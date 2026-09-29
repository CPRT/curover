// Nav collapse (throttled with rAF) + hero slideshow (paused when tab hidden)
(() => {
  const nav = document.querySelector('header'), icon = document.querySelector('.nav-icon');
  let last = 0, ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const y = scrollY, on = y > last && y > 80 && innerWidth > 850;
      nav?.classList.toggle('collapse', on); icon?.classList.toggle('collapse', on);
      last = y; ticking = false;
    });
  }, { passive: true });

  const slides = [...document.querySelectorAll('.hero .slide')];
  if (slides.length < 2 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let i = 0, timer;
  const next = () => { slides[i].classList.remove('on'); i = (i + 1) % slides.length; slides[i].classList.add('on'); };
  const start = () => timer = setInterval(next, 5000);
  document.addEventListener('visibilitychange', () => { clearInterval(timer); if (!document.hidden) start(); });
  start();
})();