# 🧿 Death Eye: IP Address Tracker + Map

**Death Eye** adalah aplikasi pelacak lokasi berdasarkan **IP Address**, menampilkan informasi detail lokasi dan peta interaktif dalam gaya **terminal hacking** yang gelap dan misterius.

> 🔍 “Melacak lokasi target dengan presisi...”

---

## 🚀 Fitur Utama

- ✅ Deteksi otomatis IP publik user
- 📍 Lacak IP Address manual (misal: `8.8.8.8`)
- 🗺️ Tampilkan lokasi di peta menggunakan Leaflet.js
- 💻 Gaya visual ala terminal hacking (Death Eye)
- ⌨️ Intro loading terminal (dengan efek pengetikan)
- 📦 Tidak butuh backend! Murni HTML + JS

---

## 📁 Struktur Proyek

death-eye-ip-tracker/
├── index.html # Halaman bootinh terminal
├── tracking.html # Halaman tracking
├── style.css # Tema Death Eye
├── script.js # Logika pelacakan IP
└── README.md # Dokumentasi



---

## 🧪 Contoh Penggunaan

1. Buka `index.html`  
2. Tunggu proses “booting” selesai  
3. Akan otomatis masuk ke halaman pelacakan `tracking.html`
4. Lihat lokasi otomatis berdasarkan IP-mu
5. Coba masukkan IP lain (misal: `1.1.1.1`) dan klik **Lacak**

---

## 🌐 API yang Digunakan

- [ipapi.co](https://ipapi.co/) – deteksi lokasi dari IP address
- [ipify.org](https://api.ipify.org?format=json) – ambil IP publik user
- [Leaflet.js](https://leafletjs.com) – tampilkan peta open source

---

## 📌 Contoh Output

![image](https://github.com/user-attachments/assets/b947339b-d5fe-46a8-8301-b9dc06bc07ce)


---

## 📥 Cara Menjalankan

1. Download atau clone repo:
   ```bash
   git clone https://github.com/ahmall-sec/ip-track
   cd ip-track
