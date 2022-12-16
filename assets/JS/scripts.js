const toggle = document.querySelector(".toggle")
const body = document.querySelector("body")

toggle.onclick = function() {
  toggle.classList.toggle('Dark');
  body.classList.toggle('Dark')
}