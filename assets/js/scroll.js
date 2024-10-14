document.addEventListener('DOMContentLoaded', () => {
    const featuresContainer = document.querySelector('.features');
    let autoScrollInterval; // Variabel untuk interval auto scroll

    // Fungsi untuk scroll ke card berikutnya
    const scrollNext = () => {
        const scrollAmount = featuresContainer.clientWidth; // Ambil lebar kontainer
        const maxScrollLeft = featuresContainer.scrollWidth - featuresContainer.clientWidth; // Scroll maksimum

        // Jika sudah mencapai scroll maksimum (card terakhir), kembali ke card pertama
        if (featuresContainer.scrollLeft >= maxScrollLeft - 1) {
            featuresContainer.scrollTo({
                left: 0, // Scroll ke awal (card pertama)
                behavior: 'smooth' // Animasi smooth saat scroll
            });
        } else {
            // Scroll ke card berikutnya
            featuresContainer.scrollBy({
                left: scrollAmount, // Scroll sebesar lebar kontainer
                behavior: 'smooth' // Animasi smooth saat scroll
            });
        }
    };

    // Memulai scroll otomatis
    const startAutoScroll = () => {
        autoScrollInterval = setInterval(scrollNext, 4000); // Scroll setiap 4 detik
    };

    // Scroll otomatis dimulai ketika halaman dimuat
    startAutoScroll();
});
