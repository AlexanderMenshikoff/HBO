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
