#!/usr/bin/env python3
"""L'Essenza Luxury Hair Salon - Web Server & Booking API."""

import datetime
import json
import os
import random
import sqlite3
import string
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import parse_qs, urlparse

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.environ.get("BOOKINGS_DB_PATH", os.path.join("/tmp" if os.name != "nt" else BASE_DIR, "bookings.db"))

SERVICES = [
    {
        "id": "taglio",
        "name": "Taglio Couture",
        "price": 45,
        "duration": 45,
        "description": "Taglio sartoriale studiato sui lineamenti del viso, comprensivo di shampoo specifico.",
    },
    {
        "id": "colore",
        "name": "Colore & Balayage",
        "price": 70,
        "duration": 90,
        "description": "Tecniche esclusive di schiaritura, balayage e gloss tonalizzante con oli biologici.",
    },
    {
        "id": "trattamenti",
        "name": "Trattamenti Curativi",
        "price": 30,
        "duration": 30,
        "description": "Rituale di ricostruzione profonda alla cheratina vegetale e massaggio craniale rilassante.",
    },
    {
        "id": "styling",
        "name": "Styling & Piega",
        "price": 25,
        "duration": 30,
        "description": "Piega glamour, onde morbide o liscio seta con finish luminoso a lunga tenuta.",
    },
    {
        "id": "rituale-completo",
        "name": "Rituale Completo L'Essenza",
        "price": 120,
        "duration": 120,
        "description": "Esperienza completa: Consulenza d'immagine, Taglio, Colore/Balayage, Trattamento & Piega.",
    },
]

STYLISTS = [
    {"id": "any", "name": "Qualsiasi Stilista", "role": "Primo disponibile"},
    {"id": "alessandro", "name": "Alessandro V.", "role": "Creative Director"},
    {"id": "sofia", "name": "Sofia M.", "role": "Master Colorist"},
    {"id": "lorenzo", "name": "Lorenzo B.", "role": "Senior Hair Stylist"},
]

ALL_SLOTS = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
]


def init_db():
    conn = sqlite3.connect(DB_PATH)
    with conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS bookings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                code TEXT UNIQUE NOT NULL,
                service_id TEXT NOT NULL,
                service_name TEXT NOT NULL,
                price INTEGER NOT NULL,
                duration INTEGER NOT NULL,
                stylist_id TEXT NOT NULL,
                stylist_name TEXT NOT NULL,
                booking_date TEXT NOT NULL,
                booking_time TEXT NOT NULL,
                customer_name TEXT NOT NULL,
                customer_email TEXT NOT NULL,
                customer_phone TEXT NOT NULL,
                notes TEXT DEFAULT '',
                status TEXT DEFAULT 'CONFIRMED',
                created_at TEXT NOT NULL
            )
            """
        )
    conn.close()


def generate_code(conn):
    for _ in range(20):
        digits = "".join(random.choices(string.digits, k=4))
        code = f"ESS-{digits}"
        cur = conn.execute("SELECT 1 FROM bookings WHERE code = ?", (code,))
        if not cur.fetchone():
            return code
    return f"ESS-{int(datetime.datetime.now().timestamp()) % 100000}"


class SalonRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def _send_json(self, status_code, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        query = parse_qs(parsed.query)

        if path == "/api/catalog":
            return self._send_json(200, {"services": SERVICES, "stylists": STYLISTS, "slots": ALL_SLOTS})

        if path == "/api/availability":
            date_str = query.get("date", [""])[0].strip()
            stylist_id = query.get("stylist", ["any"])[0].strip()
            if not date_str:
                return self._send_json(400, {"error": "Parametro 'date' obbligatorio (YYYY-MM-DD)."})

            try:
                dt = datetime.date.fromisoformat(date_str)
            except ValueError:
                return self._send_json(400, {"error": "Formato data non valido."})

            # Salon closed on Monday (0) and Sunday (6)
            if dt.weekday() in (0, 6):
                return self._send_json(
                    200,
                    {
                        "date": date_str,
                        "closed": True,
                        "reason": "Il salone è chiuso il Lunedì e la Domenica. Orari: Mar - Sab, 09:00 - 19:00.",
                        "available_slots": [],
                        "booked_slots": [],
                    },
                )

            conn = sqlite3.connect(DB_PATH)
            conn.row_factory = sqlite3.Row
            if stylist_id and stylist_id != "any":
                rows = conn.execute(
                    "SELECT booking_time, stylist_id FROM bookings WHERE booking_date = ? AND status = 'CONFIRMED' AND (stylist_id = ? OR stylist_id = 'any')",
                    (date_str, stylist_id),
                ).fetchall()
                booked = sorted({r["booking_time"] for r in rows})
            else:
                # If "any" stylist is chosen, a slot is only full if >= 3 bookings exist at that time
                rows = conn.execute(
                    "SELECT booking_time, COUNT(*) as cnt FROM bookings WHERE booking_date = ? AND status = 'CONFIRMED' GROUP BY booking_time",
                    (date_str,),
                ).fetchall()
                booked = sorted([r["booking_time"] for r in rows if r["cnt"] >= 3])
            conn.close()

            available = [s for s in ALL_SLOTS if s not in booked]
            return self._send_json(
                200,
                {
                    "date": date_str,
                    "closed": False,
                    "available_slots": available,
                    "booked_slots": booked,
                    "all_slots": ALL_SLOTS,
                },
            )

        if path == "/api/bookings":
            code = query.get("code", [""])[0].strip().upper()
            email = query.get("email", [""])[0].strip().lower()
            conn = sqlite3.connect(DB_PATH)
            conn.row_factory = sqlite3.Row
            if code:
                rows = conn.execute(
                    "SELECT * FROM bookings WHERE UPPER(code) = ? AND status = 'CONFIRMED' ORDER BY booking_date ASC, booking_time ASC",
                    (code,),
                ).fetchall()
            elif email:
                rows = conn.execute(
                    "SELECT * FROM bookings WHERE LOWER(customer_email) = ? AND status = 'CONFIRMED' ORDER BY booking_date ASC, booking_time ASC",
                    (email,),
                ).fetchall()
            else:
                rows = conn.execute(
                    "SELECT * FROM bookings WHERE status = 'CONFIRMED' ORDER BY id DESC LIMIT 10"
                ).fetchall()
            conn.close()
            return self._send_json(200, {"bookings": [dict(r) for r in rows]})

        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path != "/api/bookings":
            return self._send_json(404, {"error": "Endpoint non trovato."})

        try:
            length = int(self.headers.get("Content-Length", "0"))
            raw = self.rfile.read(length).decode("utf-8")
            data = json.loads(raw) if raw else {}
        except Exception:
            return self._send_json(400, {"error": "JSON non valido."})

        service_id = str(data.get("service_id", "")).strip()
        stylist_id = str(data.get("stylist_id", "any")).strip() or "any"
        booking_date = str(data.get("booking_date", "")).strip()
        booking_time = str(data.get("booking_time", "")).strip()
        customer_name = str(data.get("customer_name", "")).strip()
        customer_email = str(data.get("customer_email", "")).strip()
        customer_phone = str(data.get("customer_phone", "")).strip()
        notes = str(data.get("notes", "")).strip()

        if not all([service_id, booking_date, booking_time, customer_name, customer_email, customer_phone]):
            return self._send_json(400, {"error": "Compila tutti i campi obbligatori per completare la prenotazione."})

        service = next((s for s in SERVICES if s["id"] == service_id), None)
        if not service:
            return self._send_json(400, {"error": "Servizio selezionato non valido."})

        stylist = next((st for st in STYLISTS if st["id"] == stylist_id), STYLISTS[0])

        try:
            dt = datetime.date.fromisoformat(booking_date)
        except ValueError:
            return self._send_json(400, {"error": "Data non valida."})

        if dt.weekday() in (0, 6):
            return self._send_json(400, {"error": "Il salone è chiuso il Lunedì e la Domenica."})

        if booking_time not in ALL_SLOTS:
            return self._send_json(400, {"error": "Orario non valido."})

        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        try:
            if stylist_id != "any":
                conflict = conn.execute(
                    "SELECT 1 FROM bookings WHERE booking_date = ? AND booking_time = ? AND stylist_id = ? AND status = 'CONFIRMED'",
                    (booking_date, booking_time, stylist_id),
                ).fetchone()
                if conflict:
                    return self._send_json(
                        409,
                        {"error": f"Lo stilista {stylist['name']} è già occupato alle {booking_time}. Scegli un altro orario o stilista."},
                    )
            else:
                cnt_row = conn.execute(
                    "SELECT COUNT(*) as cnt FROM bookings WHERE booking_date = ? AND booking_time = ? AND status = 'CONFIRMED'",
                    (booking_date, booking_time),
                ).fetchone()
                if cnt_row and cnt_row["cnt"] >= 3:
                    return self._send_json(409, {"error": f"L'orario {booking_time} è al completo. Seleziona un'altra fascia oraria."})

            code = generate_code(conn)
            now_iso = datetime.datetime.utcnow().isoformat(timespec="seconds") + "Z"
            with conn:
                conn.execute(
                    """
                    INSERT INTO bookings (
                        code, service_id, service_name, price, duration,
                        stylist_id, stylist_name, booking_date, booking_time,
                        customer_name, customer_email, customer_phone, notes, status, created_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'CONFIRMED', ?)
                    """,
                    (
                        code,
                        service["id"],
                        service["name"],
                        service["price"],
                        service["duration"],
                        stylist["id"],
                        stylist["name"],
                        booking_date,
                        booking_time,
                        customer_name,
                        customer_email,
                        customer_phone,
                        notes,
                        now_iso,
                    ),
                )
            row = conn.execute("SELECT * FROM bookings WHERE code = ?", (code,)).fetchone()
            return self._send_json(201, {"booking": dict(row), "message": "Prenotazione confermata con successo!"})
        finally:
            conn.close()

    def do_DELETE(self):
        parsed = urlparse(self.path)
        if not parsed.path.startswith("/api/bookings/"):
            return self._send_json(404, {"error": "Endpoint non trovato."})

        code = parsed.path.split("/api/bookings/", 1)[1].strip().upper()
        if not code:
            return self._send_json(400, {"error": "Codice prenotazione mancante."})

        conn = sqlite3.connect(DB_PATH)
        try:
            with conn:
                cur = conn.execute(
                    "UPDATE bookings SET status = 'CANCELLED' WHERE UPPER(code) = ? AND status = 'CONFIRMED'",
                    (code,),
                )
                if cur.rowcount == 0:
                    return self._send_json(404, {"error": "Prenotazione non trovata o già annullata."})
            return self._send_json(200, {"message": f"Prenotazione {code} annullata con successo.", "code": code})
        finally:
            conn.close()


def main():
    init_db()
    port = int(os.environ.get("PORT", "8080"))
    server = ThreadingHTTPServer(("0.0.0.0", port), SalonRequestHandler)
    print(f"L'Essenza Server listening on http://0.0.0.0:{port}")
    server.serve_forever()


if __name__ == "__main__":
    main()

