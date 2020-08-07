const ul = document.querySelector('ul')

ul.addEventListener('click', () => {
  if (event.target.classList.contains('copy')) {
    event.preventDefault()
    // alert(event.target.dataset.url)
    event.target.select()
    document.execCommand("copy")
    alert("Text copied: " + event.target.dataset.url);
  }
})