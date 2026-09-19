var tombolMenu = document.getElementById('hamburger');
var menuNav = document.getElementById('nav-menu');

tombolMenu.onclick = function() {
  menuNav.classList.toggle('active');
}

var tautanMenu = document.querySelectorAll('.nav-links a');
for (var i = 0; i < tautanMenu.length; i++) {
  tautanMenu[i].onclick = function() {
    menuNav.classList.remove('active');
  };
}

window.onscroll = function() {
  var nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.background = '#140c0a'; // Sedikit lebih gelap saat di-scroll
  } else {
    nav.style.background = '#1c110e'; // Warna asli CSS
  }
}

var formKontak = document.getElementById('contactForm');
var infoHasil = document.getElementById('hasil');

formKontak.onsubmit = function(event) {
  event.preventDefault(); 

  var nama = document.getElementById('nama').value;

  infoHasil.innerHTML = '✔ Pesan terkirim! Terima kasih, ' + nama;
  infoHasil.style.color = '#2e7d32'; 

  formKontak.reset(); 
}
