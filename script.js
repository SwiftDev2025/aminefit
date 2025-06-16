
function showTab(id, btn) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function toggleLang() {
  function scheduleMealReminder(time, message) {
  const now = new Date();
  const mealTime = new Date();
  const [hours, minutes] = time.split(':');
  mealTime.setHours(hours, minutes, 0, 0);

  if (mealTime > now) {
    const delay = mealTime.getTime() - now.getTime();
    setTimeout(() => {
      alert(message); // تقدر تبدلها بـ Notification API
    }, delay);
  }
}

// مثال: استدعاء تنبيهات
scheduleMealReminder("08:00", "⏰ Time for Breakfast!");
scheduleMealReminder("14:00", "⏰ Time for Lunch!");
scheduleMealReminder("20:30", "⏰ Time for Post Workout Meal!");

  const toggle = document.querySelector('.lang-toggle');
  const lang = toggle.innerText === 'AR' ? 'ar' : 'en';
  toggle.innerText = lang.toUpperCase() === 'EN' ? 'AR' : 'EN';

  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });

  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
}
