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