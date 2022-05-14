/* ****************** AOS ****************** */
AOS.init({
  offset: 50,
  duration: 1000
});

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

/* ************************** Services animation ************************** */
servicesAnimation()

function servicesAnimation() {

  let servicesText = document.querySelectorAll('.services__text')
  let servicesImages = document.querySelectorAll('.services__img')

  function servicesHide() {
    servicesImages.forEach(image => {
      image.style.opacity = 0
    })
  }

  function servicesShow(textAttr) {

    let imgClass = false;

    servicesImages.forEach(image => {
      if (image.classList.contains(textAttr.dataset.service)) {
        image.style.opacity = 1
      }
    })

  }

  servicesText.forEach(text => {

    text.addEventListener('mouseenter', (e) => {
      servicesHide()
      servicesShow(e.target)
    })

  })

}

/* ************************** Services slider ************************** */
servicesSlider()

function servicesSlider() {

  $('.services__slider').slick({
    prevArrow: `<button type="button" class="slider__arrow slider-prev"></button>`,

    nextArrow: `<button type="button" class="slider__arrow slider-next"></button>`,

    arrows: true,
    infinite: true,
    // responsive: [{
    //   breakpoint: 800,
    //   settings: {
    //     arrows: false,
    //     dots: true
    //   }
    // }]
  });

}

/* ************************** How slider ************************** */
howSlider()

function howSlider() {

  $('.how__slider').slick({
    prevArrow: `<button type="button" class="slider__arrow slider-prev how__slider__button"></button>`,
    nextArrow: `<button type="button" class="slider__arrow slider-next how__slider__button"></button>`,
    arrows: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '0px',
    responsive: [{
      breakpoint: 476,
      settings: {
        slidesToShow: 1,
        arrows: true
      }
    }]
  });

}

/* ************************** Reviews slider ************************** */
reviewsSlider()

function reviewsSlider() {

  $('.reviews__slider').slick({
    prevArrow: `<button type="button" class="slider__arrow slider-prev reviews__slider__button"></button>`,
    nextArrow: `<button type="button" class="slider__arrow slider-next reviews__slider__button"></button>`,
    arrows: false,
    centerMode: false,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 821,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          arrows: true
        },
      }
    ],
  });

}

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

/* ****************** Adaptive text ****************** */
adaptiveText()

function adaptiveText() {

  // Intro
  let introSubtitle = document.querySelector('.intro__subtitle')

  if (window.innerWidth <= 1250) {
    introSubtitle.innerHTML = `
    Продаёте крутые товары и хотите увеличить продажи? <br>
    Мы возьмем на себя всю работу, связанную <br>
    с маркетплейсами и гарантированно увеличим ваши продажи!
  `
  }

  if (window.innerWidth <= 950) {
    introSubtitle.innerHTML = `
    Продаёте крутые товары и хотите увеличить продажи?
    Мы возьмем на себя всю работу, <br> 
    связанную с маркетплейсами и гарантированно увеличим ваши продажи!
  `
  }

  if (window.innerWidth <= 670) {
    introSubtitle.innerHTML = `
    Продаёте крутые товары и хотите увеличить продажи? <br>
    Мы возьмем на себя всю работу,  связанную с маркетплейсами <br>
    и гарантированно увеличим ваши продажи!
  `
  }

  if (window.innerWidth <= 613) {
    introSubtitle.innerHTML = `
    Продаёте крутые товары и хотите увеличить продажи? <br>
    Мы возьмем на себя всю работу, связанную <br>
     с маркетплейсами и гарантированно увеличим ваши продажи!
  `
  }

  if (window.innerWidth <= 534) {
    introSubtitle.innerHTML = `
    Продаёте крутые товары и хотите увеличить продажи? <br>
    Мы возьмем на себя всю работу, связанную <br>
    с маркетплейсами и гарантированно увеличим ваши продажи!
  `
  }

  if (window.innerWidth <= 468) {
    introSubtitle.innerHTML = `
    Продаёте крутые товары и хотите увеличить продажи?
    Мы возьмем на себя всю работу, <br>
    связанную с маркетплейсами и гарантированно увеличим ваши продажи!
  `
  }

  if (window.innerWidth <= 412) {
    introSubtitle.innerHTML = `
    Продаёте крутые товары и хотите увеличить продажи?
    Мы возьмем на себя всю работу, <br>
    связанную с маркетплейсами <br>
    и гарантированно увеличим ваши продажи!
  `
  }

  if (window.innerWidth <= 383) {
    introSubtitle.innerHTML = `
    Продаёте крутые товары и хотите увеличить продажи?
    Мы возьмем на себя всю работу, связанную с маркетплейсами <br>
    и гарантированно увеличим ваши продажи!
  `
  }

  if (window.innerWidth <= 362) {
    introSubtitle.innerHTML = `
    Продаёте крутые товары и хотите увеличить продажи? <br>
    Мы возьмем на себя всю работу, связанную с маркетплейсами <br>
    и гарантированно увеличим ваши продажи!
  `
  }

  // Clients
  let clientsTitle = document.querySelector('.clients__title')

  if (window.innerWidth <= 801) {
    clientsTitle.innerHTML = `
    Эти бренды уже работают <br> 
    с нами
  `
  }

  if (window.innerWidth <= 601) {
    clientsTitle.innerHTML = `
    Эти бренды <br> 
    уже работают <br> 
    с нами
  `
  }


  if (window.innerWidth <= 462) {
    clientsTitle.innerHTML = `
    Эти бренды <br>
    уже работают с нами
  `
  }

  // Form
  const formPrivacyText = document.querySelector('.check__text')
  const formSelectText = document.querySelector('.feedback__text')

  if (window.innerWidth <= 604) {
    formPrivacyText.innerHTML = `
      Я согласен с обработкой <br>
      моих персональных данных
     `
  }

  if (window.innerWidth <= 604) {
    formSelectText.innerHTML = `
      Как вам удобно, <br>
      чтобы мы с вами связались ?
     `
  }

  // Popup
  const pollychooText = document.querySelector('.popup__text--pollychoo')
  const pollychooTextResult = document.querySelector('.pollychoo-result')
  const popupSubtitleMm = document.querySelector('.popup__subtitle--mm')
  const popupSubtitlePc = document.querySelector('.popup__subtitle--pollychoo')

  if (window.innerWidth <= 461) {
    pollychooText.innerHTML = `
      Перед нами стояла задача создать бренд сумок <br>
      на Wildberries с нуля.
      Начальная сумма вложений - 200 000 Р
     `
  }

  if (window.innerWidth <= 380) {
    pollychooText.innerHTML = `
      Перед нами стояла задача создать бренд сумок <br>
      на Wildberries с нуля. <br>
      Начальная сумма вложений - 200 000 Р 
     `
  }

  if (window.innerWidth <= 430) {
    pollychooTextResult.innerHTML = `
      Спустя 6 месяцев оборот бренда  <br>
      составляет 1 500 000 Р в месяц.
     `
  }

  if (window.innerWidth <= 580) {
    popupSubtitleMm.innerHTML = `
      Магазин на 300 000 Р в месяц <br>
      с нуля
     `
  }

  if (window.innerWidth <= 580) {
    popupSubtitlePc.innerHTML = `
     Бренд на 1 500 000 Р в месяц <br>
     с нуля
     `
  }

}

/* ****************** Marquee scroll ****************** */
// marqueeScroll()

function marqueeScroll() {
  const marqueeText = document.querySelector('.marquee__text')
  window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop * 0.5
    marqueeText.style.transform = `translateX(${-scrollTop}px)`
  })
}

/* ****************** Hover animations ****************** */
hoverAnimations()

function hoverAnimations() {
  const siteButtons = document.querySelectorAll('.button')
  siteButtons.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)'
      item.style.transition = 'all .3s'
    })
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)'
    })
  })

}

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

/* ************************** Popup ************************** */
popupInit()

function popupInit() {

  const caseBlocks = document.querySelectorAll('.case__block')
  const popups = document.querySelectorAll('.popup')
  const closePopupBtns = document.querySelectorAll('.popup__close__wrapper')

  caseBlocks.forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector(`.${item.dataset.popup}`).classList.add('popup--active')
    })
  })

  closePopupBtns.forEach(item => {
    item.addEventListener('click', () => {
      popups.forEach(item => {
        item.classList.remove('popup--active')
      })
    })
  })

}