const forwardButton = document.querySelector('.button__forward');
const backButton = document.querySelector('.button__back');
const reviews = document.querySelectorAll('.review');

let translateX = 530;
let pageNumber = 0;

forwardButton.addEventListener('click', () => {
  translateX -= translateX === -1270 ? 0 : 450;
  reviews.forEach((review) => {
    review.style.transform = `translateX(${translateX}px)`;
  });

  const otherPages = document.querySelectorAll('.navigation-panel__item');
  console.log(otherPages.length)
  const activePage = document.querySelector('.navigation-panel__item_active');
  activePage.classList.remove('navigation-panel__item_active');
  activePage.classList.add('navigation-panel__item');
  otherPages[pageNumber].classList.add('navigation-panel__item_active');
  otherPages[pageNumber].classList.remove('navigation-panel__item');
  console.log(pageNumber);
  pageNumber += pageNumber === 2 ? 0 : 1;
  console.log(pageNumber);
});

backButton.addEventListener('click', () => {
  translateX += translateX === 530 ? 0 : 450;
  reviews.forEach((review) => {
    review.style.transform = `translateX(${translateX}px)`;
    console.log(review.style.transform);
  });

  const otherPages = document.querySelectorAll('.navigation-panel__item');
  console.log(otherPages.length)
  const activePage = document.querySelector('.navigation-panel__item_active');
  activePage.classList.remove('navigation-panel__item_active');
  activePage.classList.add('navigation-panel__item');
  otherPages[pageNumber].classList.add('navigation-panel__item_active');
  otherPages[pageNumber].classList.remove('navigation-panel__item');
  console.log(pageNumber);
  pageNumber -= pageNumber === 0 ? 0 : 1;
});