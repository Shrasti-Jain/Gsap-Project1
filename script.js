gsap.to(".section2 h2",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:".section2 ",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})