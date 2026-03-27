// ── ROUTER ──
// Maps page names to element IDs
var pageMap = {
  'home':       'page-home',
  'portfolio':  'page-portfolio',
  'project':    'page-project',
  'service':    'page-service',
  'difference': 'page-difference',
  'contact':    'page-contact'
};
var currentPage = 'home';

function goTo(name) {
  if (!pageMap[name] || name === currentPage) return;
  document.getElementById(pageMap[currentPage]).classList.remove('active');
  document.getElementById(pageMap[name]).classList.add('active');
  currentPage = name;
  window.scrollTo(0, 0);
  initReveals();
  // Close mobile nav if open
  document.querySelector('.nav-links').classList.remove('mobile-open');
  document.querySelector('.nav-cta').classList.remove('mobile-open');
}

// ── MOBILE NAV TOGGLE ──
document.querySelector('.nav-mobile-btn').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('mobile-open');
  document.querySelector('.nav-cta').classList.toggle('mobile-open');
});

// ── SCROLL REVEAL ──
function initReveals() {
  var els = document.querySelectorAll('#' + pageMap[currentPage] + ' .reveal:not(.visible)');
  els.forEach(function(el) { revealObserver.observe(el); });
}

var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

initReveals();

// ── PORTFOLIO FILTERS (visual toggle only) ──
document.querySelectorAll('.pf-filter').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.pf-filter').forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');
  });
});
