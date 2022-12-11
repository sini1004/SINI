

// 메인 스크롤
window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const pageContainer = document.querySelector("#main");
  pageContainer.setAttribute("data-scroll-container", "");

  const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
    getDirection: true
  });

  scroller.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
  });

  scroller.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(pageContainer, {
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
      pinType: pageContainer.style.transform ? "transform" : "fixed"
  });

  let horizontalSections = document.querySelectorAll(".horizontal-scroll");

  horizontalSections.forEach((horizontalSection) => {
    let pinWrap = horizontalSection.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;
    gsap.to(pinWrap, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        scrub: true,
        trigger: horizontalSection,
        pin: true,
        start: "top top",
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true
      },
      x: -horizontalScrollLength,
      ease: "none"
    });
  });
  ScrollTrigger.addEventListener("refresh", () => scroller.update());
  ScrollTrigger.refresh();
});


// 메인 상단메뉴

document.querySelectorAll(".nav ul li a").forEach(li => {
  li.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(li.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
      })
  })
});

  $('.ham').click(function () {
    $('#mNav').toggleClass('active')
  });
  $('.mNav_cont ul li').click(function () {
    $('#mNav').removeClass('active')
});
