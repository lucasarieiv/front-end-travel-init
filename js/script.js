let numberValue = 0

const $bannerTravel = document.querySelector('.banner-travel')

const $dateLabel = $bannerTravel.querySelector('.box-date label')
const $dateInput = $bannerTravel.querySelector('#date');
const $arrow = $bannerTravel.querySelector('.arrow')

const $numberLabel = $bannerTravel.querySelector('.box-number label')
const $inputNumber = $bannerTravel.querySelector('#number')

const $stepDown = $bannerTravel.querySelector('.step-down')
const $stepUp = $bannerTravel.querySelector('.step-up')
const $subtraction = $bannerTravel.querySelector('.subtraction')
const $addition = $bannerTravel.querySelector('.addition')

function stepDown(element) {
  element.stepDown()
}

function stepUp(element) {
  element.stepUp()
}

$subtraction.addEventListener('click', ()=> {
  stepDown($inputNumber)
  numberValue = $inputNumber.value
  $numberLabel.textContent = numberValue
  if ($inputNumber.value <= 0) {
    $numberLabel.textContent = 'Add people'
  }
})

$addition.addEventListener('click', ()=> {
  stepUp($inputNumber)
  numberValue = $inputNumber.value
  $numberLabel.textContent = numberValue
})

$dateInput.addEventListener('click', ()=> {
  $arrow.classList.toggle('-active')
})

$dateInput.addEventListener('change', (date)=> {
  console.log('asd')
  $dateLabel.textContent = date.target.value
  $arrow.classList.toggle('-active')
})


