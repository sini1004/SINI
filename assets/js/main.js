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


// scroll
gsap.registerPlugin(ScrollTrigger);

const pageContents = document.getElementById("main");
const scroller = new LocomotiveScroll({
    el: pageContents,
    smooth: true
});
scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContents, {
    scrollTop(value) {
        return arguments.length ?
            scroller.scrollTo(value, 0, 0) :
            scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: pageContents.style.transform ? "transform" : "fixed"
});

window.addEventListener("load", function () {
    let sec2WrapWidth = document.querySelector(".sec2_wrap").offsetWidth;
    let horizontal2 = sec2WrapWidth - window.innerWidth;

    gsap.to("#section2 .sec2_wrap", {
        scrollTrigger: {
            scroller: pageContents,
            scrub: true,
            trigger: "#section2",
            pin: true,
            start: "top top",
            markers: true,
            end: sec2WrapWidth
        },
        x: -horizontal2,
        ease: "none"
    });

    ScrollTrigger.addEventListener("refresh", () => scroller.update());
    ScrollTrigger.refresh();
});



// frontend
gsap.set(".frontend .title", {duration: 0, opacity: 0})
gsap.set(".frontend .work .imgWrap", {duration: 0, opacity: 0})
gsap.set(".frontend .work .descWrap", {duration: 0, opacity: 0})

        // starting frontend sec
        if(!document.querySelector("#frontend").classList.contains("alreadyshowed")) {
          document.querySelector("#frontend").classList.add("alreadyshowed");

          tl.to(".frontend .title", {duration: 0.5, opacity: 1})

          if(window.innerWidth >= 1150) {
              tl.to(".frontend .work .imgWrap", {duration: 0.5, opacity: 1})
              tl.to(".frontend .work .descWrap", {duration: 0.5, opacity: 1})
          } else {
              tl.to(".frontend .work.react1 .imgWrap", {duration: 0.5, opacity: 1})
              tl.to(".frontend .work.react1 .descWrap", {duration: 0.5, opacity: 1})

              tl.to(".frontend .work.react2 .imgWrap", {duration: 0.5, opacity: 1})
              tl.to(".frontend .work.react2 .descWrap", {duration: 0.5, opacity: 1})

              tl.to(".frontend .work.vue1 .imgWrap", {duration: 0.5, opacity: 1})
              tl.to(".frontend .work.vue1 .descWrap", {duration: 0.5, opacity: 1})

              tl.to(".frontend .work.react3 .imgWrap", {duration: 0.5, opacity: 1})
              tl.to(".frontend .work.react3 .descWrap", {duration: 0.5, opacity: 1})

              tl.to(".frontend .work.php1 .imgWrap", {duration: 0.5, opacity: 1})
              tl.to(".frontend .work.php1 .descWrap", {duration: 0.5, opacity: 1})
          }
      }
