//menu

document.querySelectorAll(".nav ul li a").forEach(li => {
  li.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(li.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
      })
  })
})

$('.ham').click(function () {
  $('#mNav').toggleClass('active')
});
$('.mNav_cont ul li').click(function () {
  $('#mNav').removeClass('active')
});