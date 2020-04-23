var navBtn = document.querySelector('.nav__btn');
var navList = document.querySelector('.nav__list');

navBtn.addEventListener('click', function() {
  var navMobile = document.querySelector('.nav__list_mobile');
  var opacity = navMobile.style.opacity; 
  opacity = opacity === '1' ? '0' : '1';
}); 
