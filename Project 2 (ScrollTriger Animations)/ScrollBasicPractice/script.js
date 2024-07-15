gsap.from(".page1 #box1", {
  scale:0,
  opacity:0,
  rotate:760,
  duration:3  
})

gsap.from(".page2 #box2", {
    scale:0,
    opacity:0,
    rotate:760,
    duration:3 ,
    scrollTrigger:{
        trigger: ".page2 #box2",
        scroller: "body",
        markers:true,
        start: "top 50%",
        scrub:2,
        end: "top 20%"
    }
  })