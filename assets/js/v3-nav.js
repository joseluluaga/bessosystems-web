/* BESSÓ Systems — v3 primary navigation on small screens.
   Progressive enhancement: without this script the links stay visible
   (see v3-responsive.css). With it, they fold into a disclosure menu. */
(function () {
  var bar = document.querySelector('.bar');
  var btn = bar && bar.querySelector('.nav-toggle');
  var nav = bar && bar.querySelector('.nav');
  if (!btn || !nav) return;

  var label = btn.querySelector('.nav-toggle-label');
  var desktop = window.matchMedia('(min-width: 681px)');

  function setOpen(open) {
    bar.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (label) label.textContent = open ? 'Close' : 'Menu';
  }

  bar.classList.add('nav-js');
  btn.hidden = false;
  setOpen(false);

  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && bar.classList.contains('nav-open')) {
      setOpen(false);
      btn.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (bar.classList.contains('nav-open') && !bar.contains(e.target)) setOpen(false);
  });

  nav.addEventListener('focusout', function (e) {
    if (bar.classList.contains('nav-open') && !bar.contains(e.relatedTarget) && e.relatedTarget) setOpen(false);
  });

  var onChange = function (e) { if (e.matches) setOpen(false); };
  if (desktop.addEventListener) desktop.addEventListener('change', onChange);
  else desktop.addListener(onChange);
})();
