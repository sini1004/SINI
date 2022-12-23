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

//websitework
	// let websiteWork = document.querySelectorAll(".webstie_wrok");
	// websiteWork.forEach(()=>{
	// 	let siteWork = websiteWork.querySelector(".site_work");
	// 	gsap.to(siteWork,{
	// 		scrollTrigger: {
	// 			trigger:'site_work',
	// 			scroller: "[data-scroll-container]",
	// 			scrub: true,
	// 			trigger: horizontalSection,
	// 			pin: true,
	// 			start: "top top",
	// 			end: 'top 50%',
	// 			invalidateOnRefresh: true
	// 		},
	// 		x: -horizontalScrollLength,
	// 		ease: "none"
	// 	});
	// })

	
	ScrollTrigger.addEventListener("refresh", () => scroller.update());
	ScrollTrigger.refresh();

});

// var $sections = document.querySelectorAll(".horizon_box");
// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#section4",
//     pin: true,
//     scrub: 0.3,
//     start: "top top",
//     end: "+=400%",
//   }
// });
// tl.from($sections, {x: '400%', autoAlpha: 0, duration:2, ease: "none", stagger:5})
//   .to($sections, {duration: 3});

