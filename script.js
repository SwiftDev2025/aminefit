
function showTab(id, btn) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function toggleLang() {
  const toggle = document.querySelector('.lang-toggle');
  const lang = toggle.innerText === 'AR' ? 'ar' : 'en';
  toggle.innerText = lang.toUpperCase() === 'EN' ? 'AR' : 'EN';

  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });

  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
}
