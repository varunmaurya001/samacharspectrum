let index = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);

function shareWhatsApp() {
  window.open("https://wa.me/?text=" + encodeURIComponent(window.location.href));
}

function shareFacebook() {
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href);
}

function shareInstagram() {
  alert("Instagram direct web share support nahi karta. Image + link manually post karein.");
}
