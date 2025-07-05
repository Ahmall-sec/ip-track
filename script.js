let map;

// 👇 Fungsi utama untuk melacak IP dan tampilkan hasil
function trackIP(ip) {
  fetch(`https://ipapi.co/${ip}/json/`)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert("IP tidak valid atau tidak ditemukan.");
        return;
      }

      document.getElementById("ipText").textContent = data.ip;
      document.getElementById("city").textContent = data.city;
      document.getElementById("country").textContent = data.country_name;
      document.getElementById("latlong").textContent = `${data.latitude}, ${data.longitude}`;
      document.getElementById("info").classList.remove("hidden");

      showMap(data.latitude, data.longitude);
    })
    .catch(() => {
      alert("Gagal mengambil data lokasi.");
    });
}

// 👇 Fungsi jika user klik tombol manual
function trackManualIP() {
  const ip = document.getElementById("ipInput").value.trim();
  if (!ip) {
    alert("Masukkan alamat IP!");
    return;
  }
  trackIP(ip);
}

// 👇 Fungsi untuk peta
function showMap(lat, lon) {
  if (map) {
    map.setView([lat, lon], 13);
    L.marker([lat, lon]).addTo(map);
    return;
  }

  map = L.map('map').setView([lat, lon], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
  }).addTo(map);

  L.marker([lat, lon]).addTo(map);
}

// 👇 Saat halaman dibuka, deteksi IP publik user
window.addEventListener("load", () => {
  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("ipInput").value = data.ip; // isi otomatis
      trackIP(data.ip); // langsung lacak
    });
});
