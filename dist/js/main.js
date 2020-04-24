var navBtn = document.querySelector('.nav__btn');
var navList = document.querySelector('.nav__list');

navBtn.addEventListener('click', function() {
  if (!navList.classList.contains('nav__list_mobile')) {
    navList.classList.add('nav__list_mobile');
  }
  display(navList);
}); 

window.addEventListener('resize', function() {
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

navElems = navList.querySelectorAll('li > a');
for (var i = 0; i < navElems.length; i +=1) {
  navElems[i].addEventListener('click', function(ev) {
    document.querySelector('.nav__list > li > a.selected').classList.remove('selected');
    ev.target.classList.add('selected');
  });
}
