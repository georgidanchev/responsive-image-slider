const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const intervalTime = 5000
const auto = true
let slideInterval

const resetSliderInterval = () => {
  if(auto) {
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, intervalTime);
  }
}

const nextSlide = () => {
  const current = document.querySelector('.current')
  current.classList.remove('current')
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current')
  } else {
    slides[0].classList.add('current')
  }
  setTimeout(() => current.classList.remove('current'))
  resetSliderInterval()
}

const prevSlide = () => {
  const current = document.querySelector('.current')
  current.classList.remove('current')
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current')
  } else {
    slides[slides.length - 1].classList.add('current')
  }
  setTimeout(() => current.classList.remove('current'))
  resetSliderInterval()
}

if(auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

next.addEventListener('click', () => nextSlide())
prev.addEventListener('click', () => prevSlide())

