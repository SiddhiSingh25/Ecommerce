const newDiv = document.createElement("div");
newDiv.id = "nav";
newDiv.className = "nav";
newDiv.innerHTML = `<h1 class="logo">S.K MART</h1>
        <div class="navRight">
            <div class="mark"><i class="fa-solid fa-xmark"></i></div>
            <h1><a href="index.html#home" style="text-decoration: none; color:#222">HOme</a></h1>
            <h1><a href="index.html#About" style="text-decoration: none; color:#222">About Us</a></h1>
            <h1><a href="index.html#product" style="text-decoration: none; color:#222">Product</a></h1>
            <h1 class="contact">Feedback</h1>
            <div class="cart" style="display: flex;"><i class="fa-solid fa-cart-shopping"></i><span>0</span></div>
            <div class="menu"><i class="fa-solid fa-bars"></i></div>
        </div>`;
document.body.appendChild(newDiv);
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector(".menu").addEventListener("click", () => {
        document.querySelector(".nav").style.paddingRight = 0;
        document.querySelector(".navRight").style.alignItems = "center";
        document.querySelector(".navRight").style.justifyContent = "flex-end";
        document.querySelector(".navRight").style.flexDirection = "column";
        document.querySelector(".navRight").style.width = "50%";
        document.querySelector(".navRight").style.paddingBottom = "3vh";
        document.querySelector(".navRight").style.gap = "4vh";
        document.querySelectorAll(".navRight h1, .cart").forEach((e) => {
            e.style.display = "flex";
        })
        document.querySelector(".navRight").style.borderBottomLeftRadius = "44px";
        document.querySelector(".menu").style.display = "none";
        document.querySelector(".navRight").style.background = "#fff";
        document.querySelector(".mark").style.display = "flex";
        gsap.to(".navRight", {
            height: "90vh",
            duration: 0.5
        })
    })
    document.querySelector(".mark").addEventListener("click", () => {
        document.querySelector(".nav").style.paddingRight = "1.6vh";
        document.querySelector(".navRight").style.alignItems = "flex-end";
        document.querySelector(".navRight").style.justifyContent = "center";
        document.querySelector(".navRight").style.flexDirection = "none";
        document.querySelector(".navRight").style.width = "45%";
        document.querySelector(".navRight").style.paddingBottom = "0";
        document.querySelector(".navRight").style.gap = "0";
        document.querySelectorAll(".navRight h1, .cart").forEach((e) => {
            e.style.display = "none";
        })
        document.querySelector(".navRight").style.borderBottomLeftRadius = "0";
        document.querySelector(".navRight").style.background = "#fff";
        document.querySelector(".mark").style.display = "none";
        gsap.to(".navRight", {
            height: "8.5vh",
            duration: 0.5
        })
        gsap.to(".menu", {
            display: "flex",
            duration: 0.5,
            delay: 0.2
        })
    })
});
const load = () => {
    setTimeout(() => {
    document.querySelector(".container").style.display = "flex";
    document.querySelector(".nav").style.display = "flex";
    document.querySelector(".container").style.scale = 1;
    gsap.from(".nav",{
        y : -70,
        duration : 0.6
    })
}, 100);
};
load();
document.querySelector('.contact').addEventListener('click', function() {
    window.location.href = 'feedback.html';
    });
