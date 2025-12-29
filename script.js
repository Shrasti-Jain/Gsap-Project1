gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

  // ✅ Desktop
  "(min-width: 769px)": function () {
    gsap.to(".section2 h2", {
      xPercent: -70,
      scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: "+=600",
        scrub: 2,
        pin: true
      }
    });
  },

  // ✅ Mobile (NO pin → no white space)
  "(max-width: 768px)": function () {
    gsap.to(".section2 h2", {
      xPercent: -100,
      scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: "+=300",
        scrub: 1
      }
    });
  }
});

// final refresh
ScrollTrigger.refresh();
