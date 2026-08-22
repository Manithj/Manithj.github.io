// Theme toggle. Follows the OS by default; a click pins an explicit choice.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');

  function isDark() {
    var pinned = root.getAttribute('data-theme');
    if (pinned) return pinned === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function paint() {
    btn.textContent = isDark() ? '☀' : '☾';
  }

  btn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    paint();
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', paint);
  paint();
})();

// Email is assembled at click time so it is not sitting in the HTML for scrapers.
(function () {
  var user = ['manith', 'jm'].join('');
  var host = ['gmail', 'com'].join('.');

  function reveal(btn, out) {
    if (!btn || !out) return;
    btn.addEventListener('click', function () {
      var addr = user + String.fromCharCode(64) + host;
      var a = document.createElement('a');
      a.href = 'mailto:' + addr;
      a.textContent = addr;
      out.textContent = '';
      out.appendChild(a);
      btn.remove();
    });
  }

  reveal(document.getElementById('email-btn'), document.getElementById('email-out'));
  reveal(document.getElementById('email-btn-2'), document.getElementById('email-out-2'));
})();

// Highlight the nav link for the section currently in view.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);
  if (!sections.length || !('IntersectionObserver' in window)) return;

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) {
        a.style.color = a.getAttribute('href') === '#' + e.target.id
          ? 'var(--accent)' : '';
      });
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(function (s) { obs.observe(s); });
})();
