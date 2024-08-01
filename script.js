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
});
document.querySelector(".menu").addEventListener("click", ()=>{
    document.querySelector("nav").style.paddingRight = 0;
    document.querySelector(".navRight").style.alignItems = "center";
    document.querySelector(".navRight").style.justifyContent = "flex-end";
    document.querySelector(".navRight").style.flexDirection = "column";
    document.querySelector(".navRight").style.width = "50%";
    document.querySelector(".navRight").style.paddingBottom = "3vh";
    document.querySelector(".navRight").style.gap = "4vh";
    document.querySelectorAll(".navRight h1, .cart").forEach((e)=>{
        e.style.display = "flex";
    })
    document.querySelector(".navRight").style.borderBottomLeftRadius = "44px";
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".navRight").style.background = "#fff";
    document.querySelector(".mark").style.display = "flex";
    gsap.to(".navRight",{
        height : "90vh",
        duration :0.5
    })
})
document.querySelector(".mark").addEventListener("click", ()=>{
    document.querySelector("nav").style.paddingRight = "1.6vh";
    document.querySelector(".navRight").style.alignItems = "flex-end";
    document.querySelector(".navRight").style.justifyContent = "center";
    document.querySelector(".navRight").style.flexDirection = "none";
    document.querySelector(".navRight").style.width = "45%";
    document.querySelector(".navRight").style.paddingBottom = "0";
    document.querySelector(".navRight").style.gap = "0";
    document.querySelectorAll(".navRight h1, .cart").forEach((e)=>{
        e.style.display = "none";
    })
    document.querySelector(".navRight").style.borderBottomLeftRadius = "0";
    document.querySelector(".navRight").style.background = "#fff";
    document.querySelector(".mark").style.display = "none";
    gsap.to(".navRight",{
        height : "8.5vh",
        duration :0.5
    })
    gsap.to(".menu",{
        display: "flex",
        duration :0.5,
        delay :0.2
    })
})