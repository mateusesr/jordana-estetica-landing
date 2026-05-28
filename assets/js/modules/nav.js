// /assets/js/modules/nav.js

export function initNav() {
  const nav    = document.querySelector('.nav');
  const logo   = document.querySelector('.nav__logo-img');
  const burger = document.querySelector('.nav__burger');
  const mobile = document.querySelector('.nav__mobile');
  const links  = document.querySelectorAll('.nav__mobile .nav__link');

  const applyLogo = (isScrolled) => {
    if (!logo?.dataset.logoScrolled) return;
    const nextSrc = isScrolled ? logo.dataset.logoScrolled : logo.dataset.logoTop;
    if (logo.src.endsWith(nextSrc.split('/').pop())) return;
    logo.style.opacity = '0';
    requestAnimationFrame(() => {
      logo.src = nextSrc;
      logo.addEventListener('load', () => { logo.style.opacity = '1'; }, { once: true });
      logo.complete && (logo.style.opacity = '1');
    });
  };

  // Scroll state + logo
  const onScroll = () => {
    const isScrolled = window.scrollY > 60;
    nav.classList.toggle('scrolled', isScrolled);
    applyLogo(isScrolled);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Burger toggle
  burger?.addEventListener('click', () => {
    const open = !mobile.classList.contains('open');
    mobile.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      mobile.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}
