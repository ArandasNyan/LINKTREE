const toggle = document.querySelector(".toggle")
const body = document.querySelector("body")

toggle.onclick = function() {
  toggle.classList.toggle('Dark');
  body.classList.toggle('Dark')
}

/* putting time in title */
const Title = document.querySelector(".title")

const clock = setInterval(function time() {
  let dateToday = new Date()
  let hour = dateToday.getHours()
  let minute = dateToday.getMinutes()


  let timeInHour = hour >= 0 && hour <= 9 ? '0' + hour : hour
  let timeInMinute = minute >= 0 && minute <= 9 ? '0' + minute : minute

  Title.textContent = `Nyan Dev's - ${timeInHour}:${timeInMinute}`
})