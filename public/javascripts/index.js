////// Prevent non input /////
const ul = document.querySelector('ul')
const myInput = document.getElementById('myInput')
const inputCheck = function () {
  if (event.target.classList.contains('shorten')) {
    if (!myInput.value) {
      event.preventDefault()
      alert('Please input your URL first!')
    }
  }
}

ul.addEventListener('click', inputCheck)

///// Copy Text /////
const copyText = function () {
  const copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Link copied: " + copyText.value);
}