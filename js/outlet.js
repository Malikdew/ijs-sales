let outlets = JSON.parse(localStorage.getItem("outlets")) || [];

function importOutlet() {

  const rute = document.getElementById("rute").value.trim();
  const teks = document.getElementById("teksOutlet").value.trim();

  if (!rute) return alert("Isi nama rute dulu!");
  if (!teks) return alert("Data outlet masih kosong!");

  const baris = teks.split("\n");

  baris.forEach(row => {

    // hapus simbol WA / checkbox
    row = row.replace(/[-☐\[\]]/g, "").trim();
    if (!row) return;

    // pisah kode & nama
    let pisah = row.split("–");
    if (pisah.length < 2) pisah = row.split("-"); // fallback jika pakai minus biasa

    if (pisah.length >= 2) {
      outlets.push({
        rute: rute,
        kode: pisah[0].trim(),
        nama: pisah[1].trim()
      });
    }
  });

  localStorage.setItem("outlets", JSON.stringify(outlets));
  loadOutlet();

  alert("✅ Outlet berhasil diimport: " + baris.length);
}

function loadOutlet() {

  const tbody = document.getElementById("listOutlet");
  tbody.innerHTML = "";

  outlets.forEach((o, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${o.rute}</td>
        <td>${o.kode}</td>
        <td>${o.nama}</td>
        <td><button onclick="hapus(${i})">Hapus</button></td>
      </tr>
    `;
  });
}

function hapus(i) {
  outlets.splice(i, 1);
  localStorage.setItem("outlets", JSON.stringify(outlets));
  loadOutlet();
}
