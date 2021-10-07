const topPart = document.querySelector(".img-block__top-part");
const buttonUp = document.querySelector(".img-block__button-up");
const buttonDown = document.querySelector(".img-block__button-down");

buttonUp.addEventListener('click', () => {
  topPart.className = 'img-block__top-part go-up'
})

buttonDown.addEventListener('click', () => {
  topPart.className = 'img-block__top-part go-down'
})