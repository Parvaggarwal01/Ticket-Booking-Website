gsap.to("#nav",{
    backgroundColor: "#000",
    height: "7vw",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        //markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main",{
    backgroundColor: "#000", 
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        //markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2, 
    }
})

gsap.from("#page2 img, #page2 p",{
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:4,
    }
})

gsap.from("#page3 img, #page3 p",{
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:4,
    }
})

gsap.from("#page4 img, #page4 p",{
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:4,
    }
})

gsap.from("#page5 img, #page5 p",{
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:4,
    }
})