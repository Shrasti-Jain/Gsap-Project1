gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

  // Desktop
  "(min-width: 769px)": function () {
    gsap.to(".section2 h2",{
  x:-1500,
  scrollTrigger:{
    trigger:".section2",
    scroller:"body",
    start:"top 0%",
    end:"top -150%",
    scrub:2,
    pin:true
  }
})
  },

  // Mobile
  "(max-width: 768px)": function () {
    
    gsap.to(".section2 h2",{
  x:-450,
  scrollTrigger:{
    trigger:".section2",
    scroller:"body",
    start:"top 0%",
    end:"top -120%",
    scrub:2,
    pin:true
  }
})
  }
});
