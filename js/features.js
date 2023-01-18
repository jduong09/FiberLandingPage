document.addEventListener('DOMContentLoaded', () => {
  const spanButtons = document.getElementsByClassName('span-button');
  const listItemFeatures = document.getElementsByClassName('list-item-feature');
  let listFeatureIdx = 0;

  for (let i = 0; i < spanButtons.length; i++) {
    const spanBtn = spanButtons[i];

    spanBtn.addEventListener('click', () => {
      const clickedSpanIdx = i;

      listItemFeatures[listFeatureIdx].classList.add('hide');
      listItemFeatures[clickedSpanIdx].classList.remove('hide');

      spanButtons[listFeatureIdx].classList.remove('active');
      spanButtons[clickedSpanIdx].classList.add('active');

      listFeatureIdx = clickedSpanIdx;
    });
  } 
});