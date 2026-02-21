const nextStart = document.querySelector('#next-start');
const submitBtn = document.querySelector('#submit-btn');
const formNote = document.querySelector('#form-note');

if (nextStart) {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 5);
  nextStart.textContent = nextMonth.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
  });
}

if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    formNote.textContent = 'Спасибо! Мы отправили программу на вашу почту.';
  });
}
