/* ================================================================
   BESSO Systems — nav.js
   Navigation: mobile toggle, active link detection.
================================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile menu toggle ---
  var toggle = document.getElementById('navToggle');
  var links  = document.getElementById('navLinks');

  if (toggle && links) {
    // Keep the open class and aria-expanded in sync on every path.
    var setOpen = function (open) {
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    toggle.addEventListener('click', function () {
      setOpen(!links.classList.contains('open'));
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        setOpen(false);
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        setOpen(false);
      }
    });

    // Close menu with Escape and return focus to the toggle
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    // The toggle comes after the list in the markup, so guide Tab through
    // the open menu: toggle → links → (menu closes) → rest of the page.
    if (!links.id) links.id = 'navLinks';
    toggle.setAttribute('aria-controls', links.id);
    var items = links.querySelectorAll('a');
    var first = items[0], last = items[items.length - 1];
    toggle.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' && !e.shiftKey && first && links.classList.contains('open')) {
        e.preventDefault();
        first.focus();
      }
    });
    links.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !links.classList.contains('open')) return;
      if (e.shiftKey && e.target === first) {
        e.preventDefault();
        toggle.focus();
      } else if (!e.shiftKey && e.target === last) {
        setOpen(false); // focus moves on to the toggle, then the page
      }
    });
  }

});
