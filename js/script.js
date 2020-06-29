document.onkeydown = checkKey
var active = 0

function handleChange(dir) {
  const items = document.getElementsByClassName('testimonial')

  for (let i = 0; i < items.length; i++) {
    items[i].classList.add('hide')
  }

  dir === 'next' ? active++ : active--

  if (active === -1) {
    active = items.length - 1
  }

  if (active > items.length - 1) {
    active = 0
  }

  items[active].classList.remove('hide')
}

function checkKey(e) {
  if (e.keyCode === 37) {
    handleChange('next')
  }
  if (e.keyCode === 39) {
    handleChange('prev')
  }
}
