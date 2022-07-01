const slides = document.getElementsByClassName('carousel-item')
const slideIndices = document.getElementsByClassName('carousel-index')
const numSlides = slides.length
let slideIndex = 0
let buttonsVisible = true

const leftArrowEl = document.getElementById('carousel-button-prev')
const rightArrowEl = document.getElementById('carousel-button-next')
const buttonToggleEl = document.getElementById('carousel-button-hide')

// Adding event listeners to buttons
function moveToNextSlide() {
  slides[slideIndex].classList.remove('carousel-item-visible')
  slideIndices[slideIndex].classList.remove('carousel-index-current')
  slideIndex = (slideIndex + 1) % numSlides
  slides[slideIndex].classList.add('carousel-item-visible')
  slideIndices[slideIndex].classList.add('carousel-index-current')
}

function moveToPrevSlide() {
  slides[slideIndex].classList.remove('carousel-item-visible')
  slideIndices[slideIndex].classList.remove('carousel-index-current')
  slideIndex = slideIndex - 1 < 0 ? numSlides - 1 : slideIndex - 1
  slides[slideIndex].classList.add('carousel-item-visible')
  slideIndices[slideIndex].classList.add('carousel-index-current')
}

function toggleButtons(event) {
  {
    buttonsVisible = !buttonsVisible
    leftArrowEl.style.display = buttonsVisible ? 'block' : 'none'
    rightArrowEl.style.display = buttonsVisible ? 'block' : 'none'
    event.target.innerText = buttonsVisible ? 'Hide buttons' : 'Show buttons'
  }
}

leftArrowEl.addEventListener('click', moveToPrevSlide)
rightArrowEl.addEventListener('click', moveToNextSlide)
buttonToggleEl.addEventListener('click', (e) => toggleButtons(e))
