const scroll = new LocomotiveScroll({
    el: document.querySelector('.container'),
    smooth: true,
    lerp: 0.05
});
let alpha;
const load = () => {
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
};
const menu = () => {
    document.querySelector(".menu").addEventListener("click", () => {
        document.querySelector("nav").style.paddingRight = 0;
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
        document.querySelector("nav").style.paddingRight = "1.6vh";
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
};
const page4Anime = () => {
    document.querySelector(".page4").addEventListener("mouseenter", () => {
        gsap.to(".page4Box1", {
            scale: 1,
            duration: 0.8
        }),
            gsap.to(".page4Box2", {
                scale: 1,
                duration: 0.8,
                delay: 0.4
            }),
            gsap.to(".pageSectionImg", {
                scale: 1,
                duration: 0.8,
                delay: 0.8
            })
        gsap.to(".page4Box3", {
            scale: 1,
            duration: 0.8,
            delay: 1.2
        }),
            gsap.to(".page4Box4", {
                scale: 1,
                duration: 0.8,
                delay: 1.6
            })
    });
};
menu();
page4Anime();
let arr = [
    {
        productImg: "https://jscourse.csscourse.online/images/lapi.png", productName: "Laptop",
        discription: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.", price: "₹5500",
        actualPrice: "₹58,000", stocks: 50
    },
    {
        productImg: "https://jscourse.csscourse.online/images/iphone.png", productName: "IPhone",
        discription: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.", price: "₹3500",
        actualPrice: "₹3800", stocks: 45
    },
    {
        productImg: "https://jscourse.csscourse.online/images/headphone.png", productName: "Headphone",
        discription: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.", price: "₹1400",
        actualPrice: "₹1500", stocks: 26
    },
    {
        productImg: "https://jscourse.csscourse.online/images/watch.png", productName: "Watch",
        discription: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.", price: "₹5500",
        actualPrice: "₹5800", stocks: 36
    },
    {
        productImg: "https://jscourse.csscourse.online/images/speakers.png", productName: "Speakers",
        discription: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.", price: "₹2100",
        actualPrice: "₹2800", stocks: 33
    },
    {
        productImg: "https://jscourse.csscourse.online/images/tv.png", productName: "Telivision",
        discription: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.", price: "₹3300",
        actualPrice: "₹3400", stocks: 7
    }];

let clutter = "";
arr.forEach((elm, idx) => {
    clutter += `<div class="product" id="${idx}">
                <div class="productTop">
                    <img src="${elm.productImg}" alt="">
                </div>
                <div class="productBottom">
                    <div class="productName">${elm.productName}</div>
                    <div class="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                    <div class="discription">
                        ${elm.discription}
                    </div>
                    <div class="price"><p>${elm.price}</p> &nbsp;<span>${elm.actualPrice}</span></div>
                    <div class="stocks">Total stocks available : <span>${elm.stocks}</span></div>
                    <div class="quantity"><div class="quantityHead">Quantity(Pieces)</div> <div class="quantityBox">
                        <button class="quantityBoxSec increment">+</button>
                        <button class="quantityBoxSec quantityValue">1</button>
                        <button class="quantityBoxSec decrement">-</button>
                    </div></div>
                    <button class ="shop">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>`;
})
let currentValue;
document.querySelector(".page3Bottom").innerHTML = clutter;
document.querySelectorAll(".increment").forEach((e) => {
    e.addEventListener("click", (event) => {
        let stock = e.parentElement.parentElement.parentElement.childNodes[9].childNodes[1].innerHTML;
        currentValue = parseInt(e.parentElement.childNodes[3].innerHTML) || 1;
        if (currentValue < stock) {
            currentValue += 1;
            e.parentElement.childNodes[3].innerHTML = currentValue;
        }
        else if (currentValue === stock) {
            currentValue = stock;
        }
    })
})
document.querySelectorAll(".decrement").forEach((e) => {
    e.addEventListener("click", (event) => {
        let stock = e.parentElement.parentElement.parentElement.childNodes[9].childNodes[1].innerHTML;
        let currentValue = parseInt(e.parentElement.childNodes[3].innerHTML) || 1;
        if (currentValue > 1) {
            currentValue -= 1;
            e.parentElement.childNodes[3].innerHTML = currentValue;
        }
        else if (currentValue === stock) {
            currentValue = stock;
        }
    })
})
/*document.querySelectorAll(".shop").forEach((e) => {
    e.addEventListener("click", (event) => {
        let cartProducts = localStorage.getItem("cartProductLS");
        let getCartProductFromLS = ()=>{
            let cartProducts = localStorage.getItem("cartProductLS");
                if (!cartProducts) {
                    return [];
                }
                cartProducts = JSON.parse(cartProducts);
                document.querySelector(".cart span").innerHTML = cartProducts.length;
                return cartProducts;
        };
        getCartProductFromLS();
        const id = e.parentElement.parentElement.getAttribute("id");
        let priceString = e.parentElement.childNodes[7].childNodes[0].innerHTML.replace("₹", "");
        let price = Number(priceString);
        let quantityString = e.parentElement.parentElement.childNodes[3].childNodes[11].childNodes[2].childNodes[3].innerHTML;
        let quantity = Number(quantityString);
        let total = price * quantity;
        const arrLocalStorageProduct =  getCartProductFromLS();
        arrLocalStorageProduct.push({id, quantity, total });
        localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
        let existingProd = arrLocalStorageProduct.find((currProd)=>currProd.id === id);
        if(existingProd){
            return false;
        }
    })
})
*/
document.querySelectorAll(".shop").forEach((e) => {
    e.addEventListener("click", (event) =>{
        const id = e.parentElement.parentElement.getAttribute("id");
        let priceString = e.parentElement.childNodes[7].childNodes[0].innerHTML.replace("₹", "");
        let price = Number(priceString);
        let quantityString = e.parentElement.parentElement.childNodes[3].childNodes[11].childNodes[2].childNodes[3].innerHTML;
        let quantity = Number(quantityString);
        let total = price * quantity;
        let product = {
            id : id,
            quantity : quantity,
            total : total
        };
        let products = JSON.parse(localStorage.getItem('products')) || [];
        let productCount = JSON.parse(localStorage.getItem('productCount')) || 0;
        //products.push(product);
        //localStorage.setItem('products', JSON.stringify(products));
        let productExists = products.some(p => p.id === product.id);
        if (!productExists) {
            // Add the new product to the array if it doesn't already exist
            products.push(product);
            productCount++;

            // Store the updated array and count in local storage
            localStorage.setItem('products', JSON.stringify(products));
            localStorage.setItem('productCount', JSON.stringify(productCount));
            document.querySelector(".cart span").innerHTML = productCount;
        }
        else{
            alert("Already ADDED");
        }
    })
})