const scroll = new LocomotiveScroll({
    el: document.querySelector('.container'),
    smooth: true, 
    lerp :0.05
});
gsap.registerPlugin(ScrollTrigger);
/*setTimeout(() => {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".container").style.display = "flex";
    document.querySelector("nav").style.display = "flex";
    document.querySelector(".container").style.scale = 1;
    gsap.from("nav",{
        y : -70,
        duration : 0.6
    })
    gsap.from(".mainRight img",{
        y : -60,
        duration : 0.9
    })
    gsap.to(".mainRight img",{
        scale : 0.95, 
        duration  :0.9
    })
}, 1000);*/
document.querySelector(".page4").addEventListener("mouseenter", ()=>{
    gsap.to(".page4Box1", {
        scale : 1, 
        duration:0.8
    }),
    gsap.to(".page4Box2", {
        scale : 1, 
        duration:0.8,
        delay:0.4
    }),
    gsap.to(".pageSectionImg", {
        scale : 1, 
        duration:0.8,
        delay:0.8
    })
    gsap.to(".page4Box3", {
        scale : 1, 
        duration:0.8, 
        delay:1.2
    }),
    gsap.to(".page4Box4", {
        scale : 1, 
        duration:0.8,
        delay:1.6
    })
})
