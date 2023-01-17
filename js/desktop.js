document.addEventListener('DOMContentLoaded', () => {
  const imgNavHamburger = document.getElementById('img-nav-hamburger');
  const divNavLists = document.querySelector('.div-nav-lists');
  const spanRating = document.querySelector('.span-rating');

  if (window.innerWidth > 1400) {
    imgNavHamburger.classList.add('hide');
    divNavLists.classList.remove('hide');
    spanRating.classList.remove('hide');
  } else {
    imgNavHamburger.classList.remove('hide');
    divNavLists.classList.add('hide');
    spanRating.classList.add('hide');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1400) {
      imgNavHamburger.classList.add('hide');
      divNavLists.classList.remove('hide');
      spanRating.classList.remove('hide');
    } else {
      imgNavHamburger.classList.remove('hide');
      divNavLists.classList.add('hide');
      spanRating.classList.add('hide');
    }
  });
});