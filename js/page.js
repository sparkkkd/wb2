/* ****************** AOS ****************** */
AOS.init({
  offset: 50,
  duration: 1000
});

/* ************************** Form ************************** */
formInit()

function formInit() {

  const formSelect = document.getElementById('form__select')
  const selectIcon = document.querySelector('.select__icon')
  const selectBody = document.querySelector('.select__body')
  const selectItem = document.querySelectorAll('.select__item')
  const selectLabel = document.querySelector('.select-label')

  selectLabel.innerText = `Telegram`
  formSelect.value = `telegram`

  selectIcon.addEventListener('click', () => {
    selectBody.classList.toggle('select__body--active')
  })

  selectItem.forEach(item => {
    item.addEventListener('click', () => {
      selectBody.classList.remove('select__body--active')
      formSelect.value = item.dataset.select
      console.log(item.innerText);
      selectLabel.innerText = item.innerText
    })
  })

}

/* ****************** Menu ****************** */
let menu = document.querySelector('.menu')
let burger = document.querySelector('.header__burger')
let menuCloseBtn = document.querySelector('.close__wrapper')
let menuItems = document.querySelectorAll('.menu-item')
const menuButton = document.querySelector('.menu__button')
let menuIsOpen = false
const tl = gsap.timeline()

function menuOpen() {

  menu.classList.add('menu-active');
  menuIsOpen = !menuIsOpen;

  setTimeout(() => {

    tl.to('.menu-item-1', {
      duration: 1,
      opacity: 1,
    })

    tl.to('.menu-item-2', {
      duration: 1,
      opacity: 1,
    }, '-=0.8')

    tl.to('.menu-item-3', {
      duration: 1,
      opacity: 1,
    }, '-=0.8')

    tl.to('.menu-item-4', {
      duration: 1,
      opacity: 1,
    }, '-=0.8')

    tl.to('.header__button--mob', {
      duration: 1,
      opacity: 1,
    }, '-=0.8')

  }, 1000)
}

function menuClose() {

  tl.to('.header__button--mob', {
    duration: 1,
    opacity: 0,
  })

  tl.to('.menu-item-4', {
    duration: 1,
    opacity: 0,
  }, '-=0.8')

  tl.to('.menu-item-3', {
    duration: 1,
    opacity: 0,
  }, '-=0.8')

  tl.to('.menu-item-2', {
    duration: 1,
    opacity: 0,
  }, '-=0.8')

  tl.to('.menu-item-1', {
    duration: 1,
    opacity: 0,
  }, '-=0.8')

  setTimeout(() => {
    menu.classList.remove('menu-active');
    menuIsOpen = !menuIsOpen;
  }, 1000)

}

burger.addEventListener('click', menuOpen)

menuItems.forEach(item => {
  item.addEventListener('click', menuClose)
})

menuButton.addEventListener('click', menuClose)

menuCloseBtn.addEventListener('click', menuClose)

/* ************************** Links scroll ************************** */
linksScroll()

function linksScroll() {

  const anchors = document.querySelectorAll('.scroll-href')

  anchors.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault()

      const blockID = item.dataset.scroll

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

    })
  })

}