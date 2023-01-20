document.addEventListener('DOMContentLoaded', () => {
  const divFeatures = document.querySelector('.div-features');

  if (window.innerWidth >= 1200) {
    divFeatures.classList.remove('hide');
  } else {
    divFeatures.classList.add('hide');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200) {
      divFeatures.classList.remove('hide');
    } else {
      divFeatures.classList.add('hide');
    }
  });
});