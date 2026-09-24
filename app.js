const quotes = [
  '“The best heroes never stop smiling, even during the chaos.”',
  '“A comic adventure is just a brave idea with a little fun.”',
  '“Teamwork turns big problems into big laughs and big wins.”',
  '“Even tiny heroes can save the day.”'
];

const authors = [
  '— Dog Man Fan Club',
  '— Cat Kid Crew',
  '— Team Paw Patrol',
  '— Li’l Petey Energy'
];

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');

function randomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[index];
  quoteAuthor.textContent = authors[index];
}

setInterval(randomQuote, 4500);

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((nav) => nav.classList.remove('active'));
    item.classList.add('active');
  });
});

const checkButtons = document.querySelectorAll('.check-btn');
checkButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('ghost')) {
      button.textContent = '✓';
      button.classList.remove('ghost');
      return;
    }

    button.textContent = '✓';
    button.style.background = '#dff7e4';
    button.style.color = '#1b6b38';
  });
});

randomQuote();
