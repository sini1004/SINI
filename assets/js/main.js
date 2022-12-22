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



//section1 
$(".split").each(function () {
  let text = $(this).text();
  let split = text.split('').join("</span><span aria-hidden='true'>");
  split = "<span aria-hidden='true'>" + split + "</span>";

  $(this).html(split).attr("aria-label", text);
});

setTimeout(function () {
  gsap.to(".split span", {
      duration: 0.4,
      opacity: 1,
      y: 0,
      stagger: 0.1
  })
}, 2000)


// section6
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
