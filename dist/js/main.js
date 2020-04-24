var navBtn = document.querySelector('.nav__btn');
var navList = document.querySelector('.nav__list');

navBtn.addEventListener('click', function() {
  if (!navList.classList.contains('nav__list_mobile')) {
    navList.classList.add('nav__list_mobile');
  }
  display(navList);
}); 

window.addEventListener('resize', function() {
  console.log(window.innerWidth);
  if (window.innerWidth > 1024) {
    if (navList.classList.contains('nav__list_mobile')) {
      navList.classList.remove('nav__list_mobile');
      navList.style.display = 'flex';
    }
  } else {
    if (!navList.classList.contains('nav__list_mobile')) {
      navList.classList.add('nav__list_mobile');
      navList.style.display = 'none';
    }
  }
});

function display(elem) {
  elem.style.display = elem.style.display === 'block' ? 'none' : 'block';
}