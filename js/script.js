// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

// Nav Scroll
window.addEventListener('scroll', function(){
    const header = document.querySelector('nav');
    header.classList.toggle('bg-custom', window.scrollY > 420);
});

// To Top
const btnTop = document.getElementById('btn-to-top'); //Mendapatkan Button

// Menampilakan Button Ketika Scroll Dari Atas Lebih Dari 50px
window.addEventListener('scroll', function(){
    scrollFunction();
});

function scrollFunction(){
    if(
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
    ) {
        btnTop.style.display = 'block';
    } else {
        btnTop.style.display = 'none';
    }
};

// Ketika Tombol Di Klik Maka Kembali Ke Atas
btnTop.addEventListener('click', backtoTop);

function backtoTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


