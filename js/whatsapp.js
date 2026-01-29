// GLOBAL VARIABLE
let waNumber = "6282199641354"; // Nomor WA perusahaan

function sendWA(produkCart = cart) {
    const outlet = document.getElementById("outletSelect").value;
    if (!outlet) return alert("Pilih outlet dulu!");

    if (!produkCart || produkCart.length === 0 || produkCart.every(c => !c || c.karton == 0)) {
        return alert("Belum ada produk yang dipesan!");
    }

    // Bikin pesan format profesional
    let pesan = `📦 *SALES ORDER IJS*\n`;
    pesan += `Outlet: *${outlet}*\n`;
    pesan += `Tanggal: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}\n\n`;
    pesan += `*Daftar Produk:*\n`;

    let totalOrder = 0;
    produkCart.forEach((item, i) => {
        if (item && item.karton > 0) {
            pesan += `${i+1}. ${item.nama} - ${item.karton} karton (Rp ${item.total.toLocaleString()})\n`;
            totalOrder += item.total;
        }
    });

    pesan += `\n*TOTAL: Rp ${totalOrder.toLocaleString()}*`;
    pesan += `\n\n— Terima kasih, IJS Sales`;

    // buka WA otomatis di tab baru
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
}

// ===============================
// Opsi tambahan: Kirim multi-outlet
// ===============================
function sendMultiWA(listOutlets) {
    listOutlets.forEach(o => {
        const produkCart = o.cart;
        const outlet = o.outlet;
        let pesan = `📦 *SALES ORDER IJS*\nOutlet: *${outlet}*\n`;
        let totalOrder = 0;
        produkCart.forEach((item, i) => {
            if (item && item.karton > 0) {
                pesan += `${i+1}. ${item.nama} - ${item.karton} karton (Rp ${item.total.toLocaleString()})\n`;
                totalOrder += item.total;
            }
        });
        pesan += `\n*TOTAL: Rp ${totalOrder.toLocaleString()}*\n— Terima kasih, IJS Sales`;
        const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(pesan)}`;
        window.open(url, "_blank");
    });
}
