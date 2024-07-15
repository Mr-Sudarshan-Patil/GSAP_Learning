gsap.to(".page2 h2", {
   transform: "translate(-130%)",
   scrollTrigger:{
    trigger:".page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true
   }
})