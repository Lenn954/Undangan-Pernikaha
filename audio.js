// Mengambil elemen audio dan tombol
const bgMusic = document.getElementById('bgMusic');
const audioBtn = document.getElementById('audioBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

// Periksa apakah audio sudah dimuat
bgMusic.addEventListener('error', function(e) {
    console.error('Error loading audio file:', e);
    alert('Gagal memuat file audio. Periksa jalur file dan format audio.');
});

// Status awal audio (mati)
let isPlaying = false;

// Fungsi untuk memainkan atau menghentikan lagu
function toggleAudio() {
    if (isPlaying) {
        // Menghentikan lagu
        bgMusic.pause();
        
        // Mengubah tampilan tombol
        audioBtn.classList.remove('playing');
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    } else {
        // Memainkan lagu
        const playPromise = bgMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Pemutaran berhasil dimulai
                audioBtn.classList.add('playing');
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
            })
            .catch(error => {
                // Pemutaran gagal atau diblokir
                console.log('Pemutaran audio gagal:', error);
                alert('Pemutaran otomatis diblokir oleh browser atau file audio tidak dapat diputar.');
            });
        }
        
        // Mengubah tampilan tombol
        audioBtn.classList.add('playing');
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    }
    
    // Memperbarui status
    isPlaying = !isPlaying;
}

// Menambahkan event listener untuk tombol
audioBtn.addEventListener('click', toggleAudio);

// Untuk menangani kasus ketika lagu selesai diputar
bgMusic.addEventListener('ended', function() {
    // Jika lagu selesai, kembalikan tombol ke status awal
    // (Ini biasanya tidak terjadi jika loop=true)
    audioBtn.classList.remove('playing');
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    isPlaying = false;
});


// Periksa file audio saat halaman dimuat
window.addEventListener('load', checkAudioFile);