/* ================================================================
   BESSO Systems — nav.js
   Navigation: mobile toggle, active link detection.
================================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile menu toggle ---
  var toggle = document.getElementById('navToggle');
  var links  = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('open');
      }
    });
  }

});
