/* Two small jobs only: the mobile menu, and marking the current page in the nav.
   Everything else on this site is plain HTML and CSS. */

(function () {
  'use strict';

  // --- mobile menu -------------------------------------------------------
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close it when a link is tapped, or on Escape.
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // --- current page ------------------------------------------------------
  // Underlines whichever nav link matches the page you're on, so you don't
  // have to hand-edit aria-current in six files.
  var here = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav a').forEach(function (link) {
    var target = link.getAttribute('href');
    if (!target || target.indexOf('http') === 0) return;
    if (target === here || (here === '' && target === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
