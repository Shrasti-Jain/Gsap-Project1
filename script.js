gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

  // Desktop
  "(min-width: 769px)": function () {
    gsap.to(".section2 h2", {
      x: "-70%",
      scrollTrigger: {
        trigger: ".section2",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
      }
    });
  },

  // Mobile
  "(max-width: 768px)": function () {
    gsap.to(".section2 h2", {
      x: "-100%",
      scrollTrigger: {
        trigger: ".section2",
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
        pin: true,
         pinSpacing: false 
      }
    });
  }
});

// important for mobile
ScrollTrigger.refresh();
