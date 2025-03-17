import data from "./data.js";

const modalWindow = document.querySelector(".modal-window");
const modalWindowClosingButton = document.querySelector(
  ".modal-closing__button"
);
const modalWindowOpenButton = document.querySelector(".header__sign-in-button");
const container = document.querySelector(".container");

const modalWindowDisplay = (btn) => {
  btn.addEventListener("click", () => {
    if (btn === modalWindowOpenButton) {
      modalWindow.classList.add("modal-window-visible");
      document.body.style.overflow = "hidden";
      container.style.opacity = "0.5";
    } else {
      modalWindow.classList.remove("modal-window-visible");
      document.body.style.overflow = "visible";
      container.style.opacity = "1";
    }
  });
};
modalWindowDisplay(modalWindowOpenButton);
modalWindowDisplay(modalWindowClosingButton);

const headerLinkSeries = document.querySelectorAll(".header__link.series");
const tvShowsTopicTitle = document.querySelector(".topic__title.tv-shows");
const headerLinkMovies = document.querySelectorAll(".header__link.movies");
const moviesTopicTitle = document.querySelector(".topic__title.movies");
const headerLinkCartoons = document.querySelectorAll(".header__link.cartoons");
const cartoonsTopicTitle = document.querySelector(".topic__title.cartoons");

const smoothScrolling = (headerLink, topicTitle, num) => {
  headerLink.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      let offsetPosition = 0;
      const topOffset = element.offsetHeight;
      const elementPosition = topicTitle.getBoundingClientRect().top;
      if (document.querySelector(".burger-menu.active")) {
        offsetPosition = elementPosition - topOffset - num;
      } else {
        offsetPosition = elementPosition - topOffset;
      }

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
};

smoothScrolling(headerLinkSeries, tvShowsTopicTitle, 280);
smoothScrolling(headerLinkMovies, moviesTopicTitle, 280);
smoothScrolling(headerLinkCartoons, cartoonsTopicTitle, 280);

const creationPic = document.querySelector(".creation-container");
const creationLogoImg = document.querySelector(".creation-logo__img");

const pictureAppearing = (pic, logo, time) => {
  setInterval(() => {
    creationPic.style.backgroundImage = `url(${pic})`;
    creationLogoImg.src = `${logo}`;
    if (pic.includes("hod")) {
      creationLogoImg.classList.add("creation-logo__img_smaller-picture");
    } else {
      creationLogoImg.classList.remove("creation-logo__img_smaller-picture");
    }
  }, time);
};

pictureAppearing("../img/euphoria-pic.png", "../img/euphoria-logo.png", 4000);
pictureAppearing("../img/hod-pic.png", "../img/hod-logo.png", 8000);
pictureAppearing("../img/Joel&Ellie.png", "../img/tlou-title.png", 12000);

const cardsMovies = document.querySelector(".cards.movies");
const cardsShows = document.querySelector(".cards.tv-shows");
const cardsCartoons = document.querySelector(".cards.cartoons");

const filteredArts = (arr, type) => arr.filter((el) => el.type === type);

const displayTemplate = (el, container) => {
  container.innerHTML += `
  <div class="card" style="background-image: url(${el.image})">
  <div class="card__container_opacity">
    <div class="card__container_top-space">
      <div class="rating-container">
        <img class="card__star-img_top-space" src="../img/star.png" />
        <p class="card__rate_top-space">${el.rating}</p>
      </div>
      <p class="card__year_top-space">${el.year}</p>
    </div>
    <div class="card__container_middle-space">
      <p class="card__title-text_middle-space">${el.title}</p>
      <p class="card__main-text_middle-space">
        ${el.description}
      </p>
    </div>
    <div class="card__container_down-space">
      <div class="watch-button__container">
        <img
          class="card__play-button_down-space"
          src="../img/play-button.png"
        />
        <div class="card__watch-text_down-space">watch</div>
      </div>
    </div>
  </div>
</div>
  `;
};

const displayCards = (arr, type, container) => {
  filteredArts(arr, type).map((el) => {
    displayTemplate(el, container);
  });
};

displayCards(data, "movie", cardsMovies);
displayCards(data, "cartoon", cardsCartoons);
displayCards(data, "show", cardsShows);

const burgerMenuDisplay = () => {
  const menuBtn = document.querySelector(".burger-menu__btn");
  const menu = document.querySelector(".burger-menu");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });
};

burgerMenuDisplay();


const arrowNextTvShows = document.querySelector(".arrow.next.tv-shows")
const arrowPrevTvShows = document.querySelector(".arrow.prev.tv-shows")
const arrowNextMovies = document.querySelector(".arrow.next.movies")
const arrowPrevTvMovies = document.querySelector(".arrow.prev.movies")
const arrowNextTvCartoons = document.querySelector(".arrow.next.cartoons")
const arrowPrevCartoons = document.querySelector(".arrow.prev.cartoons")



const slideArrow = (cardContainerArrow, cardContainer , dir, type) => 
  cardContainerArrow.addEventListener('click', () => {
    const currentMargin = parseInt(getComputedStyle(cardContainer).marginLeft, 10);
    let newMargin = 0;
    dir === 'next' ? newMargin = currentMargin - 1000 : newMargin = currentMargin + 1000;
    const currentWidth = cardContainer.clientWidth;
    Math.abs(newMargin) <= currentWidth - 500 ? cardContainer.style.marginLeft = newMargin + 'px' : '';
    newMargin === 0 ? type.style.display = 'none' : type.style.display = 'block';
  })

  if(window.innerWidth >= 1880){
    slideArrow(arrowNextTvShows, cardsShows, 'next', arrowPrevTvShows);
    slideArrow(arrowPrevTvShows, cardsShows, 'prev', arrowPrevTvShows);
    slideArrow(arrowNextMovies, cardsMovies, 'next', arrowPrevTvMovies);
    slideArrow(arrowPrevTvMovies, cardsMovies, 'prev', arrowPrevTvMovies);
    slideArrow(arrowNextTvCartoons, cardsCartoons, 'next', arrowPrevCartoons);
    slideArrow(arrowPrevCartoons, cardsCartoons, 'prev', arrowPrevCartoons);
   }

  
