////// Prevent undefined input /////
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

///// Prevent user enter keydown at output.hbs.
const copy = document.querySelector('li.copy')
const html = document.querySelector('html')
const preventEnterKeydown = function (e) {
  if (copy) {
    console.log(e.code)
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      console.log('No enter keydown here')
      console.log(e.code)
      event.preventDefault()
    }
  }
}

html.addEventListener('keydown', preventEnterKeydown)

// When user input link that hasn't been shortened and lie
const noYouDont = function () {
  alert('沒有吧，我這邊都沒有看到啊，你再輸入一次我幫你縮。')
}

// When user input link that hasn't been shortened and be honest
const honestGuy = function () {
  alert('不錯，你是個誠實的孩子，你就再輸入一次我幫你縮吧。')
}
