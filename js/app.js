const btns = document.querySelectorAll('.specification >button');
const menu_cards = document.querySelectorAll('.menu_card');

Array.from(btns).forEach(btn => btn.addEventListener('click', closeWindow));
function closeWindow() {
  this.parentNode.classList.remove('open_spec');
}

Array.from(menu_cards).forEach(card =>
  card.addEventListener('click', openWindow),
);
function openWindow(e) {
  e.preventDefault();
  this.parentNode.children[0].classList.add('open_spec');
}

const burgerBtn = document.getElementsByClassName('burgerBars')[0];
const siteMenu = document.getElementById('sideBar');

burgerBtn.addEventListener('click', () => {
  siteMenu.style = 'right: 0px;';
});

const exitBtn = document.querySelector('.siteMenu>label');

exitBtn.addEventListener('click', () => {
  siteMenu.style = 'right: -105%';
});
