document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menuIcon');
  const menuList = document.querySelector('.menu-list');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', function () {
    menuList.classList.toggle('show');
    //menuList.style.marginTop = menuList.classList.contains('show') ? '0' : navbar.offsetHeight + 'px';
  });

  window.addEventListener('scroll', function () {
    // Check the scroll position
    if (window.scrollY > 0) {
      // If scrolled, apply the color
      navbar.style.backgroundColor = 'cornflowerblue';
    } else {
      // If at the top, make it transparent
      navbar.style.backgroundColor = 'transparent';
    }
  });
});
