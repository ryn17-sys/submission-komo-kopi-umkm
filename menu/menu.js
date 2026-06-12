document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero__content');
  const sectionHeadings = document.querySelectorAll('.section-heading');
  const menuCards = document.querySelectorAll('.menu-card');
  const footer = document.querySelector('.site-footer');

  const revealOptions = {
    threshold: 0.14,
    rootMargin: '0px 0px -10% 0px',
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  const setRevealStyle = (element) => {
    if (!element) return;
    element.style.opacity = '0';
    element.style.transform = 'translateY(24px)';
    element.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    revealObserver.observe(element);
  };

  setRevealStyle(heroContent);
  sectionHeadings.forEach(setRevealStyle);
  menuCards.forEach(setRevealStyle);
  setRevealStyle(footer);

  menuCards.forEach((card) => {
    card.addEventListener('click', () => {
      menuCards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove('menu-card--focused');
        }
      });
      card.classList.toggle('menu-card--focused');
    });
  });

  document.querySelectorAll('.site-nav a').forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});