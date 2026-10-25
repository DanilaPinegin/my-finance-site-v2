// Прогресс-бар и кнопка "наверх"
const progress = document.getElementById('progress');
const totop = document.getElementById('totop');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  progress.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  totop.classList.toggle('show', h.scrollTop > 400);
});

// Появление блоков
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));