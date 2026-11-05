/* L'Essenza Luxury Hair Salon - Main JavaScript, i18n & Booking Engine */

const SUPPORTED_LANGS = ['it', 'en', 'es', 'th'];

const LANG_META = {
    it: {
        code: 'IT',
        flag: 'https://flagcdn.com/w40/it.png',
        alt: 'Italiano',
        nextLabel: 'Switch to English',
        locale: 'it-IT'
    },
    en: {
        code: 'EN',
        flag: 'https://flagcdn.com/w40/gb.png',
        alt: 'English',
        nextLabel: 'Cambiar a Español',
        locale: 'en-GB'
    },
    es: {
        code: 'ES',
        flag: 'https://flagcdn.com/w40/es.png',
        alt: 'Español',
        nextLabel: 'เปลี่ยนเป็นภาษาไทย (Switch to Thai)',
        locale: 'es-ES'
    },
    th: {
        code: 'TH',
        flag: 'https://flagcdn.com/w40/th.png',
        alt: 'ไทย',
        nextLabel: 'Passa a Italiano',
        locale: 'th-TH'
    }
};

const TRANSLATIONS = {
    it: {
        page_title: "L'Essenza | Salone di Parrucchieri di Lusso",
        nav_services: "Servizi",
        nav_about: "Chi Siamo",
        nav_gallery: "Galleria",
        nav_reviews: "Recensioni",
        nav_book: "Prenota",
        nav_contact: "Contatti",
        nav_cta: "Prenota Ora",
        hero_subtitle: "Eccellenza e Stile",
        hero_title: "L'arte del capello, <br><span>ridefinita</span>",
        hero_btn_book: "Prenota Ora",
        hero_btn_services: "Scopri i Servizi",
        services_subtitle: "Cosa offriamo",
        services_title: "I Nostri Servizi",
        srv_taglio_title: "Taglio Couture",
        srv_taglio_desc: "Dall'avanguardia al classico, ogni taglio è cucito su misura per esaltare la tua unicità.",
        srv_taglio_price: "da €45",
        srv_colore_title: "Colore & Balayage",
        srv_colore_desc: "Tecniche esclusive di balayage e tonalizzazione per riflessi vibranti e naturali.",
        srv_colore_price: "da €70",
        srv_trattamenti_title: "Trattamenti Curativi",
        srv_trattamenti_desc: "Rituali di benessere per rigenerare la fibra capillare in profondità.",
        srv_trattamenti_price: "da €30",
        srv_styling_title: "Styling & Piega",
        srv_styling_desc: "Volume, onde o liscio perfetto per ogni occasione speciale.",
        srv_styling_price: "da €25",
        srv_book_link: 'Prenota <i class="fa-solid fa-arrow-right"></i>',
        about_subtitle: "La Nostra Filosofia",
        about_title: "L'Essenza del Benessere",
        about_text: "Fondata sulla passione per l'eccellenza, L'Essenza non è solo un salone, ma un rifugio dove bellezza e tecnica si incontrano. Il nostro team di stilisti internazionali è costantemente aggiornato sulle ultime tendenze di New York, Parigi e Milano.",
        about_feat_1: "Prodotti Organici Premium",
        about_feat_2: "Stilisti Certificati",
        about_feat_3: "Esperienza Personalizzata",
        gallery_subtitle: "Social Portfolio",
        gallery_title: "I Nostri Ultimi Lavori",
        reviews_subtitle: "Testimonianze",
        reviews_title: "Dicono di Noi",
        review_1_text: '"L\'Essenza è molto più di un salone. È un\'esperienza di lusso vera e propria. Il mio colore non è mai stato così vibrante."',
        review_2_text: '"Professionalità e cura del dettaglio incredibili. Il team ha capito esattamente cosa desideravo."',
        review_3_text: '"Un ambiente accogliente ed elegante. I trattamenti sono di altissimo livello. Consigliatissimo!"',
        booking_subtitle: "Riserva il Tuo Momento",
        booking_title: "Prenota un Appuntamento",
        step_1_title: "Scegli il Trattamento",
        step_2_title: "Seleziona lo Stilista",
        step_3_title: "Data e Orario",
        label_booking_date: "Giorno dell'appuntamento (Mar - Sab)",
        date_helper_text: "Orario continuato 09:00 – 19:00",
        label_available_slots: "Fasce orarie disponibili",
        step_4_title: "I Tuoi Recapiti",
        label_customer_name: "Nome e Cognome *",
        ph_customer_name: "Es. Giulia Verdi",
        label_customer_phone: "Telefono *",
        ph_customer_phone: "Es. +39 340 123 4567",
        label_customer_email: "Email *",
        ph_customer_email: "Es. giulia.verdi@email.it",
        label_customer_notes: "Note o desideri particolari (opzionale)",
        ph_customer_notes: "Allergie, preferenze di stile, lunghezze...",
        btn_confirm_booking: '<i class="fa-regular fa-calendar-check"></i> Conferma Prenotazione',
        sum_subtitle: "Riepilogo",
        sum_title: "Il Tuo Appuntamento",
        sum_lbl_service: '<i class="fa-solid fa-wand-magic-sparkles"></i> Servizio',
        sum_lbl_stylist: '<i class="fa-solid fa-user-tie"></i> Stilista',
        sum_lbl_date: '<i class="fa-regular fa-calendar"></i> Data',
        sum_lbl_time: '<i class="fa-regular fa-clock"></i> Orario',
        sum_lbl_duration: '<i class="fa-solid fa-hourglass-half"></i> Durata stimata',
        sum_lbl_total: "Totale stimato",
        sum_footer_note: "Pagamento in salone · Cancellazione gratuita fino a 24h prima",
        lookup_title: '<i class="fa-solid fa-magnifying-glass"></i> Gestisci Prenotazione',
        lookup_desc: 'Inserisci il tuo codice prenotazione (es. <code>ESS-1234</code>) o la tua email per consultare o annullare un appuntamento.',
        ph_lookup_query: "Codice ESS-XXXX o Email",
        btn_lookup: "Cerca",
        modal_close_aria: "Chiudi",
        modal_subtitle: "Prenotazione Confermata",
        modal_title: "Ti aspettiamo da L'Essenza",
        modal_desc: "Conserva il tuo codice esclusivo per gestire o modificare l'appuntamento:",
        modal_done_btn: "Perfetto, Grazie",
        contact_subtitle: "Contattaci",
        contact_title: "Siamo Qui per Te",
        contact_addr_title: "Indirizzo",
        contact_addr_val: "Via della Bellezza 12, 10121 Torino",
        contact_hours_title: "Orari",
        contact_hours_val: "Mar - Sab: 09:00 - 19:00<br>Lun & Dom: Chiuso",
        contact_phone_title: "Telefono",
        ph_contact_name: "Nome Completo",
        ph_contact_email: "Email",
        ph_contact_msg: "Il tuo messaggio",
        btn_send_msg: "Invia Messaggio",
        footer_copy: "&copy; 2026 L'Essenza Luxury Hair. Tutti i diritti riservati.",
        // Dynamic JS strings
        contact_sent_alert: "Grazie! Il tuo messaggio è stato inviato. Ti ricontatteremo a breve.",
        unit_min_short: "min",
        unit_min_long: "minuti",
        time_to_select: "Da selezionare",
        slots_checking: "Verifica disponibilità in corso...",
        slots_select_date: "Seleziona una data per visualizzare gli orari.",
        slots_closed_sun_mon: "Il salone è chiuso la Domenica e il Lunedì. Seleziona un giorno dal Martedì al Sabato.",
        slot_booked_title: "Orario già prenotato",
        err_select_date_time: "Seleziona una data valida (Mar - Sab) e una fascia oraria disponibile.",
        err_missing_fields: "Inserisci Nome e Cognome, Telefono ed Email per confermare l'appuntamento.",
        btn_submitting: '<i class="fa-solid fa-spinner fa-spin"></i> Registrazione in corso...',
        err_booking_failed: "Impossibile completare la prenotazione.",
        modal_lbl_client: "Cliente:",
        modal_lbl_service: "Trattamento:",
        modal_lbl_stylist: "Stilista:",
        modal_lbl_datetime: "Data e Ora:",
        modal_at_time: "alle ore",
        modal_lbl_location: "Sede:",
        modal_location_val: "Via della Bellezza 12, Torino",
        lookup_searching: "Ricerca in corso...",
        lookup_empty: "Nessuna prenotazione attiva trovata.",
        lookup_at_time: "ore",
        lookup_cancel_btn: "Annulla"
    },
    en: {
        page_title: "L'Essenza | Luxury Hair Salon",
        nav_services: "Services",
        nav_about: "About Us",
        nav_gallery: "Gallery",
        nav_reviews: "Reviews",
        nav_book: "Book",
        nav_contact: "Contact",
        nav_cta: "Book Now",
        hero_subtitle: "Excellence & Style",
        hero_title: "The art of hair, <br><span>redefined</span>",
        hero_btn_book: "Book Now",
        hero_btn_services: "Explore Services",
        services_subtitle: "What we offer",
        services_title: "Our Services",
        srv_taglio_title: "Couture Haircut",
        srv_taglio_desc: "From avant-garde to classic, every cut is tailored to enhance your unique beauty.",
        srv_taglio_price: "from €45",
        srv_colore_title: "Color & Balayage",
        srv_colore_desc: "Exclusive balayage and toning techniques for vibrant, natural-looking highlights.",
        srv_colore_price: "from €70",
        srv_trattamenti_title: "Restorative Treatments",
        srv_trattamenti_desc: "Wellness rituals designed to deeply regenerate and nourish the hair fiber.",
        srv_trattamenti_price: "from €30",
        srv_styling_title: "Styling & Blowout",
        srv_styling_desc: "Volume, soft waves, or sleek perfection for every special occasion.",
        srv_styling_price: "from €25",
        srv_book_link: 'Book <i class="fa-solid fa-arrow-right"></i>',
        about_subtitle: "Our Philosophy",
        about_title: "The Essence of Wellness",
        about_text: "Founded on a passion for excellence, L'Essenza is more than a salon—it is a sanctuary where beauty and artistry meet. Our international team of stylists stays constantly attuned to the latest trends from New York, Paris, and Milan.",
        about_feat_1: "Premium Organic Products",
        about_feat_2: "Certified Master Stylists",
        about_feat_3: "Bespoke Experience",
        gallery_subtitle: "Social Portfolio",
        gallery_title: "Our Latest Creations",
        reviews_subtitle: "Testimonials",
        reviews_title: "What Clients Say",
        review_1_text: '"L\'Essenza is much more than a salon. It is a true luxury experience. My hair color has never looked so vibrant."',
        review_2_text: '"Incredible professionalism and attention to detail. The team understood exactly what I was looking for."',
        review_3_text: '"A welcoming and refined atmosphere. The restorative treatments are top-tier. Highly recommended!"',
        booking_subtitle: "Reserve Your Moment",
        booking_title: "Book an Appointment",
        step_1_title: "Choose Your Treatment",
        step_2_title: "Select Your Stylist",
        step_3_title: "Date & Time",
        label_booking_date: "Appointment Date (Tue - Sat)",
        date_helper_text: "Open non-stop 09:00 – 19:00",
        label_available_slots: "Available Time Slots",
        step_4_title: "Your Contact Details",
        label_customer_name: "Full Name *",
        ph_customer_name: "e.g. Giulia Verdi",
        label_customer_phone: "Phone *",
        ph_customer_phone: "e.g. +39 340 123 4567",
        label_customer_email: "Email *",
        ph_customer_email: "e.g. giulia.verdi@email.com",
        label_customer_notes: "Special notes or requests (optional)",
        ph_customer_notes: "Allergies, style preferences, hair length...",
        btn_confirm_booking: '<i class="fa-regular fa-calendar-check"></i> Confirm Booking',
        sum_subtitle: "Summary",
        sum_title: "Your Appointment",
        sum_lbl_service: '<i class="fa-solid fa-wand-magic-sparkles"></i> Service',
        sum_lbl_stylist: '<i class="fa-solid fa-user-tie"></i> Stylist',
        sum_lbl_date: '<i class="fa-regular fa-calendar"></i> Date',
        sum_lbl_time: '<i class="fa-regular fa-clock"></i> Time',
        sum_lbl_duration: '<i class="fa-solid fa-hourglass-half"></i> Est. Duration',
        sum_lbl_total: "Estimated Total",
        sum_footer_note: "Pay at the salon · Free cancellation up to 24h before",
        lookup_title: '<i class="fa-solid fa-magnifying-glass"></i> Manage Booking',
        lookup_desc: 'Enter your booking code (e.g. <code>ESS-1234</code>) or email to view or cancel an appointment.',
        ph_lookup_query: "Code ESS-XXXX or Email",
        btn_lookup: "Search",
        modal_close_aria: "Close",
        modal_subtitle: "Booking Confirmed",
        modal_title: "We look forward to welcoming you",
        modal_desc: "Save your exclusive booking code to manage or modify your appointment:",
        modal_done_btn: "Perfect, Thank You",
        contact_subtitle: "Contact Us",
        contact_title: "We Are Here for You",
        contact_addr_title: "Address",
        contact_addr_val: "Via della Bellezza 12, 10121 Turin, Italy",
        contact_hours_title: "Opening Hours",
        contact_hours_val: "Tue - Sat: 09:00 - 19:00<br>Mon & Sun: Closed",
        contact_phone_title: "Phone",
        ph_contact_name: "Full Name",
        ph_contact_email: "Email",
        ph_contact_msg: "Your message",
        btn_send_msg: "Send Message",
        footer_copy: "&copy; 2026 L'Essenza Luxury Hair. All rights reserved.",
        // Dynamic JS strings
        contact_sent_alert: "Thank you! Your message has been sent. We will get back to you shortly.",
        unit_min_short: "min",
        unit_min_long: "minutes",
        time_to_select: "Select a time",
        slots_checking: "Checking availability...",
        slots_select_date: "Select a date to view available times.",
        slots_closed_sun_mon: "The salon is closed on Sunday and Monday. Please select a day from Tuesday to Saturday.",
        slot_booked_title: "Time slot already booked",
        err_select_date_time: "Please select a valid date (Tue - Sat) and an available time slot.",
        err_missing_fields: "Please enter your Full Name, Phone, and Email to confirm the appointment.",
        btn_submitting: '<i class="fa-solid fa-spinner fa-spin"></i> Booking in progress...',
        err_booking_failed: "Unable to complete the booking.",
        modal_lbl_client: "Client:",
        modal_lbl_service: "Treatment:",
        modal_lbl_stylist: "Stylist:",
        modal_lbl_datetime: "Date & Time:",
        modal_at_time: "at",
        modal_lbl_location: "Location:",
        modal_location_val: "Via della Bellezza 12, Turin",
        lookup_searching: "Searching...",
        lookup_empty: "No active bookings found.",
        lookup_at_time: "at",
        lookup_cancel_btn: "Cancel"
    },
    es: {
        page_title: "L'Essenza | Salón de Peluquería de Lujo",
        nav_services: "Servicios",
        nav_about: "Quiénes Somos",
        nav_gallery: "Galería",
        nav_reviews: "Reseñas",
        nav_book: "Reservar",
        nav_contact: "Contacto",
        nav_cta: "Reservar Cita",
        hero_subtitle: "Excelencia y Estilo",
        hero_title: "El arte del cabello, <br><span>redefinido</span>",
        hero_btn_book: "Reservar Ahora",
        hero_btn_services: "Descubrir Servicios",
        services_subtitle: "Lo que ofrecemos",
        services_title: "Nuestros Servicios",
        srv_taglio_title: "Corte Couture",
        srv_taglio_desc: "De la vanguardia al clásico, cada corte está hecho a medida para realzar tu belleza única.",
        srv_taglio_price: "desde €45",
        srv_colore_title: "Color & Balayage",
        srv_colore_desc: "Técnicas exclusivas de balayage y tonalización para reflejos vibrantes y naturales.",
        srv_colore_price: "desde €70",
        srv_trattamenti_title: "Tratamientos Reparadores",
        srv_trattamenti_desc: "Rituales de bienestar diseñados para regenerar y nutrir la fibra capilar en profundidad.",
        srv_trattamenti_price: "desde €30",
        srv_styling_title: "Styling & Peinado",
        srv_styling_desc: "Volumen, ondas suaves o liso impecable para cada ocasión especial.",
        srv_styling_price: "desde €25",
        srv_book_link: 'Reservar <i class="fa-solid fa-arrow-right"></i>',
        about_subtitle: "Nuestra Filosofía",
        about_title: "La Esencia del Bienestar",
        about_text: "Fundado en la pasión por la excelencia, L'Essenza es más que un salón: es un santuario donde la belleza y la técnica se encuentran. Nuestro equipo internacional de estilistas está en constante actualización sobre las últimas tendencias de Nueva York, París y Milán.",
        about_feat_1: "Productos Orgánicos Premium",
        about_feat_2: "Estilistas Certificados",
        about_feat_3: "Experiencia Personalizada",
        gallery_subtitle: "Portfolio Social",
        gallery_title: "Nuestros Últimos Trabajos",
        reviews_subtitle: "Testimonios",
        reviews_title: "Lo Que Dicen de Nosotros",
        review_1_text: '"L\'Essenza es mucho más que un salón. Es una auténtica experiencia de lujo. Mi color nunca se ha visto tan vibrante."',
        review_2_text: '"Increíble profesionalismo y cuidado del detalle. El equipo entendió a la perfección exactamente lo que buscaba."',
        review_3_text: '"Un ambiente acogedor y sofisticado. Los tratamientos son de primer nivel. ¡Totalmente recomendado!"',
        booking_subtitle: "Reserva Tu Momento",
        booking_title: "Reserva Tu Cita",
        step_1_title: "Elige el Tratamiento",
        step_2_title: "Selecciona Tu Estilista",
        step_3_title: "Fecha y Horario",
        label_booking_date: "Día de la cita (Mar - Sáb)",
        date_helper_text: "Horario continuo 09:00 – 19:00",
        label_available_slots: "Horarios disponibles",
        step_4_title: "Tus Datos de Contacto",
        label_customer_name: "Nombre y Apellidos *",
        ph_customer_name: "Ej. Giulia Verdi",
        label_customer_phone: "Teléfono *",
        ph_customer_phone: "Ej. +34 612 345 678",
        label_customer_email: "Correo Electrónico *",
        ph_customer_email: "Ej. giulia.verdi@email.es",
        label_customer_notes: "Notas o peticiones especiales (opcional)",
        ph_customer_notes: "Alergias, preferencias de estilo, longitud...",
        btn_confirm_booking: '<i class="fa-regular fa-calendar-check"></i> Confirmar Reserva',
        sum_subtitle: "Resumen",
        sum_title: "Tu Cita",
        sum_lbl_service: '<i class="fa-solid fa-wand-magic-sparkles"></i> Servicio',
        sum_lbl_stylist: '<i class="fa-solid fa-user-tie"></i> Estilista',
        sum_lbl_date: '<i class="fa-regular fa-calendar"></i> Fecha',
        sum_lbl_time: '<i class="fa-regular fa-clock"></i> Horario',
        sum_lbl_duration: '<i class="fa-solid fa-hourglass-half"></i> Duración estimada',
        sum_lbl_total: "Total estimado",
        sum_footer_note: "Pago en el salón · Cancelación gratuita hasta 24h antes",
        lookup_title: '<i class="fa-solid fa-magnifying-glass"></i> Gestionar Reserva',
        lookup_desc: 'Introduce tu código de reserva (ej. <code>ESS-1234</code>) o tu email para consultar o anular una cita.',
        ph_lookup_query: "Código ESS-XXXX o Email",
        btn_lookup: "Buscar",
        modal_close_aria: "Cerrar",
        modal_subtitle: "Reserva Confirmada",
        modal_title: "Te esperamos en L'Essenza",
        modal_desc: "Guarda tu código exclusivo de reserva para gestionar o modificar tu cita:",
        modal_done_btn: "Perfecto, Gracias",
        contact_subtitle: "Contáctanos",
        contact_title: "Estamos a Tu Disposición",
        contact_addr_title: "Dirección",
        contact_addr_val: "Via della Bellezza 12, 10121 Turín, Italia",
        contact_hours_title: "Horarios",
        contact_hours_val: "Mar - Sáb: 09:00 - 19:00<br>Lun & Dom: Cerrado",
        contact_phone_title: "Teléfono",
        ph_contact_name: "Nombre Completo",
        ph_contact_email: "Correo Electrónico",
        ph_contact_msg: "Tu mensaje",
        btn_send_msg: "Enviar Mensaje",
        footer_copy: "&copy; 2026 L'Essenza Luxury Hair. Todos los derechos reservados.",
        // Dynamic JS strings
        contact_sent_alert: "¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto contigo en breve.",
        unit_min_short: "min",
        unit_min_long: "minutos",
        time_to_select: "Por seleccionar",
        slots_checking: "Verificando disponibilidad...",
        slots_select_date: "Selecciona una fecha para ver los horarios disponibles.",
        slots_closed_sun_mon: "El salón está cerrado domingos y lunes. Por favor, selecciona un día de martes a sábado.",
        slot_booked_title: "Horario ya reservado",
        err_select_date_time: "Por favor, selecciona una fecha válida (Mar - Sáb) y un horario disponible.",
        err_missing_fields: "Introduce Nombre y Apellidos, Teléfono y Email para confirmar la cita.",
        btn_submitting: '<i class="fa-solid fa-spinner fa-spin"></i> Registrando reserva...',
        err_booking_failed: "No ha sido posible completar la reserva.",
        modal_lbl_client: "Cliente:",
        modal_lbl_service: "Tratamiento:",
        modal_lbl_stylist: "Estilista:",
        modal_lbl_datetime: "Fecha y Hora:",
        modal_at_time: "a las",
        modal_lbl_location: "Ubicación:",
        modal_location_val: "Via della Bellezza 12, Turín",
        lookup_searching: "Buscando...",
        lookup_empty: "No se encontraron reservas activas.",
        lookup_at_time: "a las",
        lookup_cancel_btn: "Anular"
    },
    th: {
        page_title: "L'Essenza | ซาลอนทำผมระดับลักชัวรี",
        nav_services: "บริการ",
        nav_about: "เกี่ยวกับเรา",
        nav_gallery: "แกลเลอรี",
        nav_reviews: "รีวิว",
        nav_book: "จองคิว",
        nav_contact: "ติดต่อเรา",
        nav_cta: "จองตอนนี้",
        hero_subtitle: "ความเป็นเลิศและสไตล์",
        hero_title: "ศิลปะแห่งเรือนผม <br><span>ที่นิยามใหม่</span>",
        hero_btn_book: "จองตอนนี้",
        hero_btn_services: "ดูบริการของเรา",
        services_subtitle: "สิ่งที่เรามอบให้",
        services_title: "บริการของเรา",
        srv_taglio_title: "ตัดผมกูตูร์ (Couture Cut)",
        srv_taglio_desc: "ตั้งแต่สไตล์ล้ำสมัยไปจนถึงคลาสสิก ทุกทรงออกแบบเฉพาะบุคคลเพื่อขับเน้นเอกลักษณ์ของคุณ",
        srv_taglio_price: "เริ่มต้น €45",
        srv_colore_title: "ทำสีผม & บาลายาจ",
        srv_colore_desc: "เทคนิคบาลายาจและการปรับโทนสีสุดพิเศษ เพื่อประกายสีผมที่สดใสและดูเป็นธรรมชาติ",
        srv_colore_price: "เริ่มต้น €70",
        srv_trattamenti_title: "ทรีตเมนต์ฟื้นฟูเส้นผม",
        srv_trattamenti_desc: "ศาสตร์แห่งการปรนนิบัติเพื่อฟื้นฟูโครงสร้างเส้นผมอย่างล้ำลึก",
        srv_trattamenti_price: "เริ่มต้น €30",
        srv_styling_title: "จัดแต่งทรงผม & ไดร์",
        srv_styling_desc: "เพิ่มวอลลุ่ม ลอนคลื่นนุ่มสลวย หรือผมตรงเรียบหรูสำหรับทุกโอกาสพิเศษ",
        srv_styling_price: "เริ่มต้น €25",
        srv_book_link: 'จองคิว <i class="fa-solid fa-arrow-right"></i>',
        about_subtitle: "ปรัชญาของเรา",
        about_title: "แก่นแท้แห่งความงามและสุขภาพผม",
        about_text: "ก่อตั้งขึ้นด้วยความหลงใหลในความเป็นเลิศ L'Essenza ไม่ใช่เพียงซาลอนทำผม แต่เป็นพื้นที่พักผ่อนที่ความงามและเทคนิคระดับสูงมาบรรจบกัน ทีมช่างทำผมระดับนานาชาติของเราอัปเดตเทรนด์ล่าสุดจากนิวยอร์ก ปารีส และมิลานอยู่เสมอ",
        about_feat_1: "ผลิตภัณฑ์ออร์แกนิกเกรดพรีเมียม",
        about_feat_2: "ช่างทำผมผู้เชี่ยวชาญที่ได้รับการรับรอง",
        about_feat_3: "ประสบการณ์การดูแลเฉพาะบุคคล",
        gallery_subtitle: "ผลงานของเรา",
        gallery_title: "ผลงานล่าสุดของเรา",
        reviews_subtitle: "เสียงตอบรับจากลูกค้า",
        reviews_title: "ความประทับใจจากลูกค้า",
        review_1_text: '"L\'Essenza เป็นมากกว่าซาลอนทำผม แต่คือประสบการณ์ความหรูหราที่แท้จริง สีผมของฉันไม่เคยสวยสดใสเท่านี้มาก่อน"',
        review_2_text: '"ความเป็นมืออาชีพและความใส่ใจในรายละเอียดยอดเยี่ยมมาก ทีมงานเข้าใจสิ่งที่ฉันต้องการอย่างแท้จริง"',
        review_3_text: '"บรรยากาศอบอุ่นและหรูหรา ทรีตเมนต์บำรุงผมคุณภาพระดับพรีเมียม แนะนำเป็นอย่างยิ่ง!"',
        booking_subtitle: "สำรองเวลาพิเศษของคุณ",
        booking_title: "จองคิวนัดหมาย",
        step_1_title: "เลือกบริการทรีตเมนต์",
        step_2_title: "เลือกช่างทำผม",
        step_3_title: "วันที่และเวลา",
        label_booking_date: "วันที่นัดหมาย (อังคาร - เสาร์)",
        date_helper_text: "เปิดให้บริการต่อเนื่อง 09:00 – 19:00 น.",
        label_available_slots: "ช่วงเวลาที่ว่าง",
        step_4_title: "ข้อมูลติดต่อของคุณ",
        label_customer_name: "ชื่อ-นามสกุล *",
        ph_customer_name: "เช่น Giulia Verdi",
        label_customer_phone: "เบอร์โทรศัพท์ *",
        ph_customer_phone: "เช่น +39 340 123 4567",
        label_customer_email: "อีเมล *",
        ph_customer_email: "เช่น giulia.verdi@email.com",
        label_customer_notes: "หมายเหตุหรือความต้องการพิเศษ (ไม่บังคับ)",
        ph_customer_notes: "ประวัติการแพ้ สไตล์ที่ต้องการ ความยาวผม...",
        btn_confirm_booking: '<i class="fa-regular fa-calendar-check"></i> ยืนยันการจองคิว',
        sum_subtitle: "สรุปรายการ",
        sum_title: "นัดหมายของคุณ",
        sum_lbl_service: '<i class="fa-solid fa-wand-magic-sparkles"></i> บริการ',
        sum_lbl_stylist: '<i class="fa-solid fa-user-tie"></i> ช่างทำผม',
        sum_lbl_date: '<i class="fa-regular fa-calendar"></i> วันที่',
        sum_lbl_time: '<i class="fa-regular fa-clock"></i> เวลา',
        sum_lbl_duration: '<i class="fa-solid fa-hourglass-half"></i> ระยะเวลาโดยประมาณ',
        sum_lbl_total: "ราคารวมโดยประมาณ",
        sum_footer_note: "ชำระเงินที่ซาลอน · ยกเลิกฟรีล่วงหน้าอย่างน้อย 24 ชม.",
        lookup_title: '<i class="fa-solid fa-magnifying-glass"></i> จัดการการจองคิว',
        lookup_desc: 'กรอกรหัสการจองของคุณ (เช่น <code>ESS-1234</code>) หรืออีเมลเพื่อตรวจสอบหรือยกเลิกนัดหมาย',
        ph_lookup_query: "รหัส ESS-XXXX หรืออีเมล",
        btn_lookup: "ค้นหา",
        modal_close_aria: "ปิด",
        modal_subtitle: "ยืนยันการจองคิวสำเร็จ",
        modal_title: "เรารอต้อนรับคุณที่ L'Essenza",
        modal_desc: "โปรดเก็บรหัสการจองนี้ไว้สำหรับจัดการหรือแก้ไขนัดหมายของคุณ:",
        modal_done_btn: "เรียบร้อย ขอบคุณ",
        contact_subtitle: "ติดต่อเรา",
        contact_title: "เราพร้อมดูแลคุณ",
        contact_addr_title: "ที่อยู่",
        contact_addr_val: "Via della Bellezza 12, 10121 ตูริน อิตาลี",
        contact_hours_title: "เวลาทำการ",
        contact_hours_val: "อังคาร - เสาร์: 09:00 - 19:00 น.<br>จันทร์ & อาทิตย์: ปิดทำการ",
        contact_phone_title: "โทรศัพท์",
        ph_contact_name: "ชื่อ-นามสกุล",
        ph_contact_email: "อีเมล",
        ph_contact_msg: "ข้อความของคุณ",
        btn_send_msg: "ส่งข้อความ",
        footer_copy: "&copy; 2026 L'Essenza Luxury Hair. สงวนลิขสิทธิ์ทั้งหมด",
        // Dynamic JS strings
        contact_sent_alert: "ขอบคุณ! ข้อความของคุณถูกส่งเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด",
        unit_min_short: "นาที",
        unit_min_long: "นาที",
        time_to_select: "โปรดเลือกเวลา",
        slots_checking: "กำลังตรวจสอบคิวว่าง...",
        slots_select_date: "โปรดเลือกวันที่เพื่อดูช่วงเวลาที่ว่าง",
        slots_closed_sun_mon: "ซาลอนปิดทำการวันอาทิตย์และวันจันทร์ โปรดเลือกวันอังคารถึงวันเสาร์",
        slot_booked_title: "ช่วงเวลานี้ถูกจองแล้ว",
        err_select_date_time: "โปรดเลือกวันที่เปิดทำการ (อังคาร - เสาร์) และช่วงเวลาที่ว่าง",
        err_missing_fields: "โปรดกรอกชื่อ-นามสกุล เบอร์โทรศัพท์ และอีเมลเพื่อยืนยันนัดหมาย",
        btn_submitting: '<i class="fa-solid fa-spinner fa-spin"></i> กำลังบันทึกการจอง...',
        err_booking_failed: "ไม่สามารถทำรายการจองได้ในขณะนี้",
        modal_lbl_client: "ลูกค้า:",
        modal_lbl_service: "บริการ:",
        modal_lbl_stylist: "ช่างทำผม:",
        modal_lbl_datetime: "วันและเวลา:",
        modal_at_time: "เวลา",
        modal_lbl_location: "สถานที่:",
        modal_location_val: "Via della Bellezza 12, ตูริน",
        lookup_searching: "กำลังค้นหา...",
        lookup_empty: "ไม่พบรายการจองที่ใช้งานอยู่",
        lookup_at_time: "เวลา",
        lookup_cancel_btn: "ยกเลิก"
    }
};

const DEFAULT_SERVICES = [
    {
        id: 'taglio',
        price: 45,
        duration: 45,
        i18n: {
            it: {
                name: 'Taglio Couture',
                description: 'Taglio sartoriale studiato sui lineamenti del viso, comprensivo di shampoo specifico.'
            },
            en: {
                name: 'Couture Haircut',
                description: 'Tailored haircut designed around your facial features, including a bespoke shampoo ritual.'
            },
            es: {
                name: 'Corte Couture',
                description: 'Corte a medida diseñado según las facciones de tu rostro, incluye lavado con champú específico.'
            },
            th: {
                name: 'ตัดผมกูตูร์ (Couture Cut)',
                description: 'ตัดแต่งทรงผมอย่างประณีตตามโครงหน้า พร้อมแชมพูสูตรเฉพาะสำหรับสภาพเส้นผมของคุณ'
            }
        }
    },
    {
        id: 'colore',
        price: 70,
        duration: 90,
        i18n: {
            it: {
                name: 'Colore & Balayage',
                description: 'Tecniche esclusive di schiaritura, balayage e gloss tonalizzante con oli biologici.'
            },
            en: {
                name: 'Color & Balayage',
                description: 'Exclusive lightening, balayage, and gloss toning techniques enriched with organic oils.'
            },
            es: {
                name: 'Color & Balayage',
                description: 'Técnicas exclusivas de aclarado, balayage y brillo tonalizante con aceites botánicos orgánicos.'
            },
            th: {
                name: 'ทำสีผม & บาลายาจ',
                description: 'เทคนิคการไล่สี บาลายาจ และเคลือบเงาเส้นผมด้วยน้ำมันออร์แกนิกธรรมชาติ'
            }
        }
    },
    {
        id: 'trattamenti',
        price: 30,
        duration: 30,
        i18n: {
            it: {
                name: 'Trattamenti Curativi',
                description: 'Rituale di ricostruzione profonda alla cheratina vegetale e massaggio craniale rilassante.'
            },
            en: {
                name: 'Restorative Treatments',
                description: 'Deep reconstruction ritual with botanical keratin and a relaxing cranial massage.'
            },
            es: {
                name: 'Tratamientos Reparadores',
                description: 'Ritual de reconstrucción profunda con queratina botánica y masaje craneal relajante.'
            },
            th: {
                name: 'ทรีตเมนต์ฟื้นฟูเส้นผม',
                description: 'ฟื้นฟูโครงสร้างผมอย่างล้ำลึกด้วยเคราตินจากธรรมชาติ พร้อมนวดศีรษะผ่อนคลาย'
            }
        }
    },
    {
        id: 'styling',
        price: 25,
        duration: 30,
        i18n: {
            it: {
                name: 'Styling & Piega',
                description: 'Piega glamour, onde morbide o liscio seta con finish luminoso a lunga tenuta.'
            },
            en: {
                name: 'Styling & Blowout',
                description: 'Glamorous blowout, soft waves, or silky straight hair with a long-lasting luminous finish.'
            },
            es: {
                name: 'Styling & Peinado',
                description: 'Peinado glamuroso, ondas suaves o liso sedoso con acabado luminoso de larga duración.'
            },
            th: {
                name: 'จัดแต่งทรงผม & ไดร์',
                description: 'ไดร์จัดทรงสุดหรู ลอนคลื่นนุ่มสลวย หรือผมตรงเงางามอยู่ทรงยาวนาน'
            }
        }
    },
    {
        id: 'rituale-completo',
        price: 120,
        duration: 120,
        i18n: {
            it: {
                name: "Rituale Completo L'Essenza",
                description: "Esperienza completa: Consulenza d'immagine, Taglio, Colore/Balayage, Trattamento & Piega."
            },
            en: {
                name: "L'Essenza Complete Ritual",
                description: "Full luxury experience: Image consultation, Haircut, Color/Balayage, Treatment & Blowout."
            },
            es: {
                name: "Ritual Completo L'Essenza",
                description: "Experiencia de lujo integral: Asesoría de imagen, Corte, Color/Balayage, Tratamiento y Peinado."
            },
            th: {
                name: "แพ็กเกจสมบูรณ์แบบ L'Essenza",
                description: "ประสบการณ์ครบวงจร: ให้คำปรึกษาภาพลักษณ์ ตัดผม ทำสี/บาลายาจ ทรีตเมนต์ และจัดแต่งทรง"
            }
        }
    }
];

const DEFAULT_STYLISTS = [
    {
        id: 'any',
        icon: 'fa-sparkles',
        i18n: {
            it: { name: 'Qualsiasi Stilista', role: 'Primo disponibile' },
            en: { name: 'Any Stylist', role: 'First available' },
            es: { name: 'Cualquier Estilista', role: 'Primer disponible' },
            th: { name: 'ช่างทำผมท่านใดก็ได้', role: 'คิวว่างแรกสุด' }
        }
    },
    {
        id: 'alessandro',
        icon: 'fa-scissors',
        i18n: {
            it: { name: 'Alessandro V.', role: 'Creative Director' },
            en: { name: 'Alessandro V.', role: 'Creative Director' },
            es: { name: 'Alessandro V.', role: 'Director Creativo' },
            th: { name: 'Alessandro V.', role: 'ครีเอทีฟไดเรกเตอร์' }
        }
    },
    {
        id: 'sofia',
        icon: 'fa-palette',
        i18n: {
            it: { name: 'Sofia M.', role: 'Master Colorist' },
            en: { name: 'Sofia M.', role: 'Master Colorist' },
            es: { name: 'Sofia M.', role: 'Colorista Maestra' },
            th: { name: 'Sofia M.', role: 'ผู้เชี่ยวชาญด้านสีผม' }
        }
    },
    {
        id: 'lorenzo',
        icon: 'fa-crown',
        i18n: {
            it: { name: 'Lorenzo B.', role: 'Senior Hair Stylist' },
            en: { name: 'Lorenzo B.', role: 'Senior Hair Stylist' },
            es: { name: 'Lorenzo B.', role: 'Estilista Senior' },
            th: { name: 'Lorenzo B.', role: 'ช่างทำผมอาวุโส' }
        }
    }
];

const DEFAULT_SLOTS = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
];

let currentLang = (() => {
    const saved = localStorage.getItem('site_lang') || localStorage.getItem('essenza_lang');
    return SUPPORTED_LANGS.includes(saved) ? saved : 'it';
})();

let onBookingLanguageRefresh = null;

function t(key) {
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.it;
    return dict[key] !== undefined ? dict[key] : (TRANSLATIONS.it[key] || key);
}

function getLocalizedService(srv) {
    if (!srv) return null;
    const loc = (srv.i18n && (srv.i18n[currentLang] || srv.i18n.it)) || {};
    return {
        ...srv,
        name: loc.name || srv.name || srv.id,
        description: loc.description || srv.description || ''
    };
}

function getLocalizedStylist(st) {
    if (!st) return null;
    const loc = (st.i18n && (st.i18n[currentLang] || st.i18n.it)) || {};
    return {
        ...st,
        name: loc.name || st.name || st.id,
        role: loc.role || st.role || ''
    };
}

function applyLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = 'it';
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    localStorage.setItem('essenza_lang', lang);
    document.documentElement.lang = lang;
    document.title = t('page_title');

    // Update language toggle button UI
    const meta = LANG_META[lang];
    const flagImg = document.getElementById('lang-flag-img');
    const codeText = document.getElementById('lang-code-text');
    const toggleBtn = document.getElementById('lang-toggle-btn');
    if (flagImg) {
        flagImg.src = meta.flag;
        flagImg.alt = meta.alt;
    }
    if (codeText) {
        codeText.textContent = meta.code;
    }
    if (toggleBtn) {
        toggleBtn.title = meta.nextLabel;
    }

    // Update static DOM elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        el.innerHTML = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        el.setAttribute('aria-label', t(key));
    });

    if (typeof onBookingLanguageRefresh === 'function') {
        onBookingLanguageRefresh();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Language toggle button
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const idx = SUPPORTED_LANGS.indexOf(currentLang);
            const nextLang = SUPPORTED_LANGS[(idx + 1) % SUPPORTED_LANGS.length];
            applyLanguage(nextLang);
        });
    }

    // Mobile menu toggle
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.service-card, .about-img, .about-content, .gallery-item');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(el);
    });

    // Reviews Slider
    const slides = document.querySelectorAll('.review-slide');
    let currentSlide = 0;
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    // Contact Form submission
    const contactForm = document.getElementById('form-contatto');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert(t('contact_sent_alert'));
            contactForm.reset();
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- BOOKING SYSTEM ---
    initBookingSystem();

    // Apply initial language
    applyLanguage(currentLang);
});

function getNextOpenDateISO() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    // 0 = Sunday, 1 = Monday -> advance to Tuesday
    while (d.getDay() === 0 || d.getDay() === 1) {
        d.setDate(d.getDate() + 1);
    }
    return d.toISOString().split('T')[0];
}

function formatDateLocalized(isoDate) {
    if (!isoDate) return '—';
    const parts = isoDate.split('-');
    if (parts.length !== 3) return isoDate;
    const dt = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    const locale = (LANG_META[currentLang] && LANG_META[currentLang].locale) || 'it-IT';
    return dt.toLocaleDateString(locale, {
        weekday: 'short',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
}

function initBookingSystem() {
    const servicesContainer = document.getElementById('booking-services-list');
    const stylistsContainer = document.getElementById('booking-stylists-list');
    const dateInput = document.getElementById('booking-date');
    const slotsGrid = document.getElementById('booking-slots-grid');
    const bookingForm = document.getElementById('booking-form');
    const feedbackBox = document.getElementById('booking-form-feedback');

    if (!servicesContainer || !bookingForm) return;

    const state = {
        services: DEFAULT_SERVICES,
        stylists: DEFAULT_STYLISTS,
        selectedServiceId: 'taglio',
        selectedStylistId: 'any',
        selectedDate: getNextOpenDateISO(),
        selectedTime: '',
        lastBookedSlots: [],
        lastSlotsState: 'ready', // 'empty-date' | 'closed-sun-mon' | 'closed-api' | 'ready'
        lastClosedReason: '',
        activeFeedbackKey: '',
        activeFeedbackRaw: '',
        lastModalBooking: null,
        lastLookupList: [],
        lastLookupShowEmpty: false
    };

    // Set minimum date to today and initial date to next open day
    const todayIso = new Date().toISOString().split('T')[0];
    dateInput.min = todayIso;
    dateInput.value = state.selectedDate;

    function renderServices() {
        servicesContainer.innerHTML = '';
        state.services.forEach(rawSrv => {
            const srv = getLocalizedService(rawSrv);
            const card = document.createElement('div');
            card.className = `booking-option-card ${srv.id === state.selectedServiceId ? 'selected' : ''}`;
            card.innerHTML = `
                <div class="option-top">
                    <span class="option-title">${escapeHtml(srv.name)}</span>
                    <span class="option-price">€${srv.price}</span>
                </div>
                <div class="option-meta">
                    <i class="fa-regular fa-clock"></i> ${srv.duration} ${escapeHtml(t('unit_min_short'))}
                </div>
                <p class="option-desc">${escapeHtml(srv.description)}</p>
            `;
            card.addEventListener('click', () => {
                state.selectedServiceId = srv.id;
                renderServices();
                updateSummary();
            });
            servicesContainer.appendChild(card);
        });
    }

    function renderStylists() {
        stylistsContainer.innerHTML = '';
        state.stylists.forEach(rawSt => {
            const st = getLocalizedStylist(rawSt);
            const iconMap = {
                any: 'fa-wand-magic-sparkles',
                alessandro: 'fa-scissors',
                sofia: 'fa-palette',
                lorenzo: 'fa-crown'
            };
            const iconClass = iconMap[st.id] || 'fa-user';
            const card = document.createElement('div');
            card.className = `stylist-card ${st.id === state.selectedStylistId ? 'selected' : ''}`;
            card.innerHTML = `
                <div class="stylist-icon"><i class="fa-solid ${iconClass}"></i></div>
                <div class="stylist-name">${escapeHtml(st.name)}</div>
                <div class="stylist-role">${escapeHtml(st.role)}</div>
            `;
            card.addEventListener('click', () => {
                state.selectedStylistId = st.id;
                renderStylists();
                updateSummary();
                loadAvailableSlots();
            });
            stylistsContainer.appendChild(card);
        });
    }

    function renderSlotsFromState() {
        if (state.lastSlotsState === 'empty-date') {
            slotsGrid.innerHTML = `<div class="slots-empty-msg">${escapeHtml(t('slots_select_date'))}</div>`;
            return;
        }
        if (state.lastSlotsState === 'closed-sun-mon') {
            slotsGrid.innerHTML = `<div class="slots-empty-msg"><i class="fa-solid fa-circle-info"></i> ${escapeHtml(t('slots_closed_sun_mon'))}</div>`;
            return;
        }
        if (state.lastSlotsState === 'closed-api') {
            slotsGrid.innerHTML = `<div class="slots-empty-msg"><i class="fa-solid fa-circle-info"></i> ${escapeHtml(state.lastClosedReason)}</div>`;
            return;
        }

        const bookedSlots = state.lastBookedSlots || [];
        slotsGrid.innerHTML = '';
        DEFAULT_SLOTS.forEach(slot => {
            const isBooked = bookedSlots.includes(slot);
            if (!state.selectedTime && !isBooked) {
                state.selectedTime = slot;
            }
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `slot-btn ${slot === state.selectedTime ? 'selected' : ''}`;
            btn.textContent = slot;
            btn.disabled = isBooked;
            if (isBooked) {
                btn.title = t('slot_booked_title');
            }
            btn.addEventListener('click', () => {
                state.selectedTime = slot;
                slotsGrid.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                updateSummary();
            });
            slotsGrid.appendChild(btn);
        });
    }

    async function loadAvailableSlots() {
        const dateVal = dateInput.value;
        state.selectedDate = dateVal;
        slotsGrid.innerHTML = `<div class="slots-empty-msg">${escapeHtml(t('slots_checking'))}</div>`;

        if (!dateVal) {
            state.lastSlotsState = 'empty-date';
            renderSlotsFromState();
            return;
        }

        const parts = dateVal.split('-');
        const dt = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        if (dt.getDay() === 0 || dt.getDay() === 1) {
            state.selectedTime = '';
            state.lastSlotsState = 'closed-sun-mon';
            updateSummary();
            renderSlotsFromState();
            return;
        }

        let bookedSlots = [];
        try {
            const res = await fetch(`/api/availability?date=${encodeURIComponent(dateVal)}&stylist=${encodeURIComponent(state.selectedStylistId)}`);
            if (res.ok) {
                const data = await res.json();
                if (data.closed) {
                    state.selectedTime = '';
                    state.lastSlotsState = 'closed-api';
                    state.lastClosedReason = data.reason || t('slots_closed_sun_mon');
                    updateSummary();
                    renderSlotsFromState();
                    return;
                }
                bookedSlots = data.booked_slots || [];
            }
        } catch (_) {
            // Fallback to localStorage if static preview
            const localBookings = JSON.parse(localStorage.getItem('essenza_bookings') || '[]');
            bookedSlots = localBookings
                .filter(b => b.booking_date === dateVal && b.status === 'CONFIRMED' && (state.selectedStylistId === 'any' || b.stylist_id === state.selectedStylistId))
                .map(b => b.booking_time);
        }

        state.lastBookedSlots = bookedSlots;
        state.lastSlotsState = 'ready';

        if (bookedSlots.includes(state.selectedTime)) {
            state.selectedTime = '';
        }

        renderSlotsFromState();
        updateSummary();
    }

    function updateSummary() {
        const rawSrv = state.services.find(s => s.id === state.selectedServiceId) || state.services[0];
        const rawSt = state.stylists.find(s => s.id === state.selectedStylistId) || state.stylists[0];
        const srv = getLocalizedService(rawSrv);
        const st = getLocalizedStylist(rawSt);

        document.getElementById('sum-service').textContent = srv ? srv.name : '—';
        document.getElementById('sum-stylist').textContent = st ? st.name : '—';
        document.getElementById('sum-date').textContent = formatDateLocalized(state.selectedDate);
        document.getElementById('sum-time').textContent = state.selectedTime || t('time_to_select');
        document.getElementById('sum-duration').textContent = srv ? `${srv.duration} ${t('unit_min_long')}` : '—';
        document.getElementById('sum-price').textContent = srv ? `€${srv.price}` : '€0';
    }

    function showFeedbackKey(key, rawFallback = '') {
        state.activeFeedbackKey = key || '';
        state.activeFeedbackRaw = rawFallback || '';
        if (!key && !rawFallback) {
            feedbackBox.hidden = true;
            feedbackBox.textContent = '';
            return;
        }
        feedbackBox.textContent = key ? t(key) : rawFallback;
        feedbackBox.hidden = false;
    }

    // Bind service card buttons in #servizi to pre-select service in #prenota
    document.querySelectorAll('.service-select-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const srvId = btn.getAttribute('data-service-id');
            if (srvId) {
                state.selectedServiceId = srvId;
                renderServices();
                updateSummary();
            }
        });
    });

    dateInput.addEventListener('change', () => {
        showFeedbackKey('');
        loadAvailableSlots();
    });

    // Submit Booking Form
    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        showFeedbackKey('');

        const customerName = document.getElementById('customer-name').value.trim();
        const customerPhone = document.getElementById('customer-phone').value.trim();
        const customerEmail = document.getElementById('customer-email').value.trim();
        const customerNotes = document.getElementById('customer-notes').value.trim();

        if (!state.selectedDate || !state.selectedTime) {
            showFeedbackKey('err_select_date_time');
            return;
        }
        if (!customerName || !customerPhone || !customerEmail) {
            showFeedbackKey('err_missing_fields');
            return;
        }

        const submitBtn = document.getElementById('booking-submit-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = t('btn_submitting');

        const payload = {
            service_id: state.selectedServiceId,
            stylist_id: state.selectedStylistId,
            booking_date: state.selectedDate,
            booking_time: state.selectedTime,
            customer_name: customerName,
            customer_phone: customerPhone,
            customer_email: customerEmail,
            notes: customerNotes
        };

        try {
            let confirmedBooking = null;
            try {
                const res = await fetch('/api/bookings', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const data = await res.json();
                if (!res.ok) {
                    if (data.error) {
                        showFeedbackKey('', data.error);
                    } else {
                        showFeedbackKey('err_booking_failed');
                    }
                    return;
                }
                confirmedBooking = data.booking;
            } catch (_) {
                // Offline/static fallback
                const srv = getLocalizedService(state.services.find(s => s.id === state.selectedServiceId));
                const st = getLocalizedStylist(state.stylists.find(s => s.id === state.selectedStylistId));
                confirmedBooking = {
                    code: 'ESS-' + Math.floor(1000 + Math.random() * 9000),
                    service_id: srv.id,
                    service_name: srv.name,
                    price: srv.price,
                    duration: srv.duration,
                    stylist_id: st.id,
                    stylist_name: st.name,
                    booking_date: state.selectedDate,
                    booking_time: state.selectedTime,
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    notes: customerNotes,
                    status: 'CONFIRMED'
                };
            }

            // Also store in localStorage for instant user reference
            const saved = JSON.parse(localStorage.getItem('essenza_bookings') || '[]');
            saved.unshift(confirmedBooking);
            localStorage.setItem('essenza_bookings', JSON.stringify(saved.slice(0, 20)));

            openConfirmationModal(confirmedBooking);
            bookingForm.reset();
            dateInput.value = state.selectedDate;
            await loadAvailableSlots();
            renderLookupItems([confirmedBooking]);
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = t('btn_confirm_booking');
        }
    });

    // Modal controls
    const modal = document.getElementById('booking-modal');
    const closeModal = () => { modal.hidden = true; };
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    document.getElementById('modal-done-btn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    function resolveBookingServiceName(booking) {
        if (booking && booking.service_id) {
            const found = state.services.find(s => s.id === booking.service_id);
            if (found) return getLocalizedService(found).name;
        }
        return booking ? booking.service_name : '';
    }

    function resolveBookingStylistName(booking) {
        if (booking && booking.stylist_id) {
            const found = state.stylists.find(s => s.id === booking.stylist_id);
            if (found) return getLocalizedStylist(found).name;
        }
        return booking ? booking.stylist_name : '';
    }

    function renderModalDetails(booking) {
        if (!booking) return;
        const srvName = resolveBookingServiceName(booking);
        const stName = resolveBookingStylistName(booking);
        document.getElementById('modal-booking-code').textContent = booking.code;
        document.getElementById('modal-booking-details').innerHTML = `
            <div><strong>${escapeHtml(t('modal_lbl_client'))}</strong> ${escapeHtml(booking.customer_name)}</div>
            <div><strong>${escapeHtml(t('modal_lbl_service'))}</strong> ${escapeHtml(srvName)} (€${booking.price})</div>
            <div><strong>${escapeHtml(t('modal_lbl_stylist'))}</strong> ${escapeHtml(stName)}</div>
            <div><strong>${escapeHtml(t('modal_lbl_datetime'))}</strong> ${formatDateLocalized(booking.booking_date)} ${escapeHtml(t('modal_at_time'))} ${escapeHtml(booking.booking_time)}</div>
            <div><strong>${escapeHtml(t('modal_lbl_location'))}</strong> ${escapeHtml(t('modal_location_val'))}</div>
        `;
    }

    function openConfirmationModal(booking) {
        state.lastModalBooking = booking;
        renderModalDetails(booking);
        modal.hidden = false;
    }

    // Lookup & Cancel Bookings
    const lookupBtn = document.getElementById('lookup-btn');
    const lookupInput = document.getElementById('lookup-query');
    const lookupResults = document.getElementById('lookup-results');

    async function performLookup() {
        const q = lookupInput.value.trim();
        if (!q) return;

        lookupResults.innerHTML = `<small>${escapeHtml(t('lookup_searching'))}</small>`;
        const isEmail = q.includes('@');
        const param = isEmail ? `email=${encodeURIComponent(q)}` : `code=${encodeURIComponent(q)}`;

        let list = [];
        try {
            const res = await fetch(`/api/bookings?${param}`);
            if (res.ok) {
                const data = await res.json();
                list = data.bookings || [];
            }
        } catch (_) {
            const saved = JSON.parse(localStorage.getItem('essenza_bookings') || '[]');
            list = saved.filter(b =>
                b.status === 'CONFIRMED' &&
                (b.code.toUpperCase() === q.toUpperCase() || b.customer_email.toLowerCase() === q.toLowerCase())
            );
        }

        renderLookupItems(list, true);
    }

    function renderLookupItems(list, showEmpty = false) {
        state.lastLookupList = list || [];
        state.lastLookupShowEmpty = showEmpty;
        lookupResults.innerHTML = '';
        if (!list || list.length === 0) {
            if (showEmpty) {
                lookupResults.innerHTML = `<small style="color:#888;">${escapeHtml(t('lookup_empty'))}</small>`;
            }
            return;
        }

        list.forEach(item => {
            const srvName = resolveBookingServiceName(item);
            const stName = resolveBookingStylistName(item);
            const div = document.createElement('div');
            div.className = 'lookup-item';
            div.innerHTML = `
                <div class="lookup-item-info">
                    <strong>${escapeHtml(item.code)} · ${escapeHtml(srvName)}</strong>
                    <span>${formatDateLocalized(item.booking_date)} ${escapeHtml(t('lookup_at_time'))} ${escapeHtml(item.booking_time)} (${escapeHtml(stName)})</span>
                </div>
                <button type="button" class="lookup-cancel-btn" data-code="${escapeHtml(item.code)}">${escapeHtml(t('lookup_cancel_btn'))}</button>
            `;
            div.querySelector('.lookup-cancel-btn').addEventListener('click', async () => {
                await cancelBooking(item.code);
            });
            lookupResults.appendChild(div);
        });
    }

    async function cancelBooking(code) {
        try {
            await fetch(`/api/bookings/${encodeURIComponent(code)}`, { method: 'DELETE' });
        } catch (_) {
            // Ignore network error in static fallback
        }
        const saved = JSON.parse(localStorage.getItem('essenza_bookings') || '[]');
        const updated = saved.filter(b => b.code !== code);
        localStorage.setItem('essenza_bookings', JSON.stringify(updated));

        renderLookupItems(updated.slice(0, 3));
        await loadAvailableSlots();
    }

    lookupBtn.addEventListener('click', performLookup);
    lookupInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performLookup();
        }
    });

    // Register language change re-renderer so switching IT/EN/TH preserves state
    onBookingLanguageRefresh = () => {
        renderServices();
        renderStylists();
        renderSlotsFromState();
        updateSummary();
        if (state.activeFeedbackKey || state.activeFeedbackRaw) {
            showFeedbackKey(state.activeFeedbackKey, state.activeFeedbackRaw);
        }
        if (state.lastModalBooking && !modal.hidden) {
            renderModalDetails(state.lastModalBooking);
        }
        renderLookupItems(state.lastLookupList, state.lastLookupShowEmpty);
    };

    // Initial render
    renderServices();
    renderStylists();
    loadAvailableSlots();

    const recentSaved = JSON.parse(localStorage.getItem('essenza_bookings') || '[]');
    if (recentSaved.length > 0) {
        renderLookupItems(recentSaved.slice(0, 2));
    }
}

function escapeHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
