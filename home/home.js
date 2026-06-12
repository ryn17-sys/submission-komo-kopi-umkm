document.addEventListener('DOMContentLoaded', () => {

  // Scroll reveal
  document.querySelectorAll('section, .menu-item').forEach(el => {
    el.style.cssText += 'opacity:0;transform:translateY(20px);transition:opacity 0.6s,transform 0.6s';
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.style.cssText += 'opacity:1;transform:none';
    }, { threshold: 0.1 }).observe(el);
  });

  // Tahun footer
  const fp = document.querySelector('footer p');
  if (fp) fp.textContent = `© ${new Date().getFullYear()} Komokopi Cafe — Palu, Sulawesi Tengah`;

  // Peta buka tab baru
  document.querySelector('.btn-dark')?.setAttribute('target', '_blank');

});