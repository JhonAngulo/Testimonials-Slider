document.onkeydown = checkKey
var testimonialActive = 0

function handleChange(order) {
  const items = document.getElementsByClassName('testimonial')

  for (let i = 0; i < items.length; i++) {
    items[i].classList.add('hide')
  }

  order === 'next' ? testimonialActive++ : testimonialActive--

  if (testimonialActive === -1) {
    testimonialActive = items.length - 1
  }

  if (testimonialActive > items.length - 1) {
    testimonialActive = 0
  }

  items[testimonialActive].classList.remove('hide')
}

function checkKey(e) {
  if (e.keyCode === 37) {
    handleChange('next')
  }
  if (e.keyCode === 39) {
    handleChange('prev')
  }
}
