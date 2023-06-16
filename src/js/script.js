const modalWindow = document.querySelector(".modal-window");
const modalWindowClosingButton = document.querySelector(
  ".modal-closing__button"
);
const headerSignInButton = document.querySelector(".header__sign-in-button");
const container = document.querySelector(".container");

headerSignInButton.addEventListener("click", () => {
  modalWindow.classList.add("modal-window-visible");
  document.body.style.overflow = "hidden";
  container.style.opacity = "0.5";
});

modalWindowClosingButton.addEventListener("click", () => {
  modalWindow.classList.remove("modal-window-visible");
  document.body.style.overflow = "visible";
  container.style.opacity = "1";
});

const headerLinkSeries = document.querySelector(".header__link.series");
headerLinkSeries.addEventListener("click", (e) => {
  e.preventDefault();

  const tvShows = document.querySelector(".topic__title.tv-shows");
  const topOffset = headerLinkSeries.offsetHeight;
  const elementPosition = tvShows.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: "smooth",
  });
});

const headerLinkMovies = document.querySelector(".header__link.movies");
headerLinkMovies.addEventListener("click", (e) => {
  e.preventDefault();

  const movies = document.querySelector(".topic__title.movies");
  const topOffset = headerLinkMovies.offsetHeight;
  const elementPosition = movies.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: "smooth",
  });
});

const headerLinkCartoons = document.querySelector(".header__link.cartoons");
headerLinkCartoons.addEventListener("click", (e) => {
  e.preventDefault();

  const cartoons = document.querySelector(".topic__title.cartoons");
  const topOffset = headerLinkCartoons.offsetHeight;
  const elementPosition = cartoons.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: "smooth",
  });
});
