// gsap.to(".box", { 
//     x:1000,
//     duration:2,
//     delay:1,
//     repeat:-1,

// })



// text animation

// gsap.from("h1", { 
//     y:20,
//     opacity:0,
//     duration:2,
//     delay:1,
//     stagger:-0.5
// })



// NavBar anymation

var tl = gsap.timeline();

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})



tl.from("h1",{
    opacity:0,
    scale:0,
    duration:5,
})