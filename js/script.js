document.onkeydown = checkKey
const item_1 = document.getElementById('item_1')
const item_2 = document.getElementById('item_2')

function handleChange() {
  item_1.classList.toggle('hide')
  item_2.classList.toggle('hide')
}

function checkKey(e) {
  console.log(e.keyCode)

  if (e.keyCode === 37 || e.keyCode === 39) {
    handleChange()
  }
}