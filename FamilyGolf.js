var crsr = document.querySelector("#cursor")
var cbg = document.querySelector("#curbg")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    cbg.style.left = dets.x-150 + "px"
    cbg.style.top = dets.y-150 + "px"
})

var h4all = document.querySelectorAll("#nav a")


gsap.to("#nav",{
    backgroundColor : "#000",
    duration : 0.2,
    height : "100px",
    scrollTrigger:{
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start: "top -8%",
        end : "top -10%",
        scrub : 1
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    duration : 1,
    scrollTrigger :{
        trigger : "#main",
        scroller : "body",
        // markers : true,
        start : "top -50%",
        end : "top -70%",
        scrub : 3
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity : 0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start : "top 50%",
        end:"top 20%",
        scrub : 2
    }
})


gsap.from(".card",{
    scale:0.8,
    opacity : 0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end : "top 30%",
        scrub : 2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
    //    markers:true,
        start:"top 95%",
        end:"top 50%",
        scrub : 2
    }
})

gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub : 5
    }
})

gsap.from("#page4 h1",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 60%",
        scrub : 1
    }    
})
