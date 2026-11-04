FROM python:3.12-slim

WORKDIR /app

COPY index.html server.py ./
COPY styles ./styles
COPY js ./js

ENV PORT=8080
ENV BOOKINGS_DB_PATH=/tmp/bookings.db

EXPOSE 8080

CMD ["python", "server.py"]

