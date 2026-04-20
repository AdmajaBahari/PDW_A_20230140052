// =============================================
//  ADMAJA BAHARI – main.js
// =============================================

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Form submit
function submitForm(e) {
  e.preventDefault();
  const msg = document.getElementById('successMsg');
  if (msg) {
    msg.style.display = 'block';
    window.scrollTo({ top: msg.offsetTop - 100, behavior: 'smooth' });
  }
}

// Add fade-up to cards on page load
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll(
    '.stat-card, .page-card, .value-card, .hobby-card-big, .hobby-card-small, .timeline-item'
  );
  cards.forEach((card, i) => {
    card.classList.add('fade-up');
    card.style.transitionDelay = `${i * 0.05}s`;
    observer.observe(card);
  });
});
