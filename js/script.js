// Toggle Hamburger and Modal Nav
const hamburger = document.getElementById('hamburger');
const modalNav = document.getElementById('modalNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  modalNav.classList.toggle('active');
});

// Close modal when clicking a link (optional)
document.querySelectorAll('.modal-content a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    modalNav.classList.remove('active');
  });
});