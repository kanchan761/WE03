gsap.from(".npart1,.npart2,.npart3",{
y:-30,
opacity:0,
stagger:0.2
})

tl=gsap.timeline()

tl.from(".page1 h1",{
    delay:1,
    duration:1,
    opacity:0,
    scale:1.1
})
tl.from(".text1,.text2",{
opacity:0,
y:-20,
stagger:0.3,
},"hey")
tl.from(".p2 p ,.p2 button",{
    opacity:0,
    y:-20,
    stagger:0.3,
},"hey")

tl1=gsap.timeline({
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
        // markers:true,
        scrub:2
    }
})

tl1.from(".page2 h1",{
    opacity:0,
    y:-20,
  
})
tl1.from(".left2 h1,.left2 h2,.left2 h3,.left2 .box,.left2 p",{
    opacity:0,
    stagger:0.3,
    scale:1.1
    // y:20,
},"h")
tl1.from(".left2 button",{
    opacity:0,
    y:10,
})
tl1.from(".right2 img",{
    opacity:0,
    scale:1.1
},"h")

tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page3 h1",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
        // markers:true,
        scrub:2
    }
})
tl2.from(".page3 h1",{
    opacity:0,
    y:20,
})
gsap.from(".page4 .left4 ,.page4 .center4,.page4 .right4",{
    opacity:0,
    y:20,
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"top 90%",
        end:"top 80%",
        // markers:true,
        scrub:2
    },
    stagger:0.2,
})

var menu=document.querySelector(".menu")
var nav =document.querySelector("nav-in")
var cross=document.querySelector(".cross")

menu.addEventListener("click",function(){
    gsap.to(".nav-in",{
        transform:"translateY(110%)"
    })
})
cross.addEventListener("click",function(){
    gsap.to(".nav-in",{
        duration:2,
        transform:"translateY(-130%)"
    })
})