const reviews = document.querySelectorAll('.review');
const allPages = document.querySelectorAll('.navigation-panel__item');
const controlButtons = document.querySelector('.navigation-panel__control-buttons');

const state = {
  translateX: 530,
  allPagesLength: allPages.length,
  activePageIndex: 0,
};

controlButtons.addEventListener('click', (event) => {
  if (event.target.className === 'button__back') {
    state.translateX += state.translateX === 530 ? 0 : 450;
    reviews.forEach((review) => {
      review.style.transform = `translateX(${state.translateX}px)`;
    });

    if (state.activePageIndex > 0) {
      allPages[state.activePageIndex].classList.remove('navigation-panel__item_active');
      allPages[state.activePageIndex - 1].classList.add('navigation-panel__item_active');
      state.activePageIndex -= 1;
    }
  }

  if (event.target.className === 'button__forward') {
    state.translateX -= state.translateX === -1270 ? 0 : 450;
    reviews.forEach((review) => {
      review.style.transform = `translateX(${state.translateX}px)`;
    });

    if (state.activePageIndex < state.allPagesLength - 1) {
      allPages[state.activePageIndex].classList.remove('navigation-panel__item_active');
      allPages[state.activePageIndex + 1].classList.add('navigation-panel__item_active');
      state.activePageIndex += 1;
    }
  }
});
