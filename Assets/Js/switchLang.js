document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan bahasa yang dipilih sebelumnya dari localStorage (default: 'id' jika belum ada)
    let currentLanguage = localStorage.getItem('language') || 'id';

    // Fungsi untuk mengubah tampilan bahasa
    function switchLanguage(language) {
        // Menyembunyikan semua elemen bahasa
        const allTextElements = document.querySelectorAll('.id, .en');
        allTextElements.forEach(function (element) {
            if (element.classList.contains(language)) {
                element.classList.remove('d-none');
            } else {
                element.classList.add('d-none');
            }
        });

        // Mengubah tampilan icon check pada dropdown
        if (language === 'id') {
            document.querySelector('#setIndonesian img.check-bahasa').classList.remove('d-none');
            document.querySelector('#setEnglish img.check-bahasa').classList.add('d-none');
            document.getElementById('dropdownMenuButton').innerHTML = 'Bahasa <i class="bi bi-chevron-down"></i>';
        } else if (language === 'en') {
            document.querySelector('#setEnglish img.check-bahasa').classList.remove('d-none');
            document.querySelector('#setIndonesian img.check-bahasa').classList.add('d-none');
            document.getElementById('dropdownMenuButton').innerHTML = 'English <i class="bi bi-chevron-down"></i>';
        }
    }

    // Menangani klik pada pilihan Bahasa Indonesia
    document.getElementById('setIndonesian').addEventListener('click', function () {
        currentLanguage = 'id';
        localStorage.setItem('language', currentLanguage);  // Simpan pilihan bahasa ke localStorage
        switchLanguage(currentLanguage);
    });

    // Menangani klik pada pilihan English
    document.getElementById('setEnglish').addEventListener('click', function () {
        currentLanguage = 'en';
        localStorage.setItem('language', currentLanguage);  // Simpan pilihan bahasa ke localStorage
        switchLanguage(currentLanguage);
    });

    // Inisialisasi bahasa berdasarkan pilihan yang ada di localStorage saat halaman dimuat
    switchLanguage(currentLanguage);
});
