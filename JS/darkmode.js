let body = document.querySelector('body')
function darkMode() {
  const wasDarkmode = localStorage.getItem('darkmode') === 'true';
  const body = document.body;
  localStorage.setItem('darkmode', !wasDarkmode);
  body.classList.toggle('dark-mode', !wasDarkmode);
  updateBodyStyles(!wasDarkmode);
}

document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.btn');
  btns.forEach(btn => {
    btn.addEventListener('click', darkMode);
  });
});



