let index = 0;
function cycleSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(s => s.style.display = 'none');
  index = (index + 1) % slides.length;
  slides[index].style.display = 'block';
  setTimeout(cycleSlides, 5000);
}
window.onload = cycleSlides;

// Video Modal
function openVideoModal() {
  document.getElementById('videoModal').style.display = 'flex';
}
function closeVideoModal() {
  document.getElementById('videoModal').style.display = 'none';
}

// Theme Toggle
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light');
  body.classList.toggle('dark');
}
