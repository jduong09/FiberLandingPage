document.addEventListener('DOMContentLoaded', () => {
  const imgMenuHamburger = document.getElementById('img-nav-hamburger');
  const divNavLists = document.querySelector('.div-nav-lists');

  imgMenuHamburger.addEventListener('click', (e) => {
    e.preventDefault();

    if (divNavLists.classList.contains('hide')) {
      divNavLists.classList.remove('hide');
    } else {
      divNavLists.classList.add('hide');
    }
  });
});