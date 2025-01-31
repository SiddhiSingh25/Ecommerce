//Animation on load event
const load = () => {
    setTimeout(() => {
        document.querySelector(".container").style.display = "flex";
        document.querySelector(".nav").style.display = "flex";
        document.querySelector(".container").style.scale = 1;
        gsap.from(".nav", {
            y: -70,
            duration: 0.6
        })
        gsap.from(".mainRight img", {
            y: -60,
            duration: 0.9
        })
        gsap.to(".mainRight img", {
            scale: 0.95,
            duration: 0.9
        })
    }, 100);
};
load();
//hamburger menu
document.addEventListener("DOMContentLoaded", () => {
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
//Animation on page 4
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
//Animation On clik on add to cart button
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".shop").forEach((e) => {
        e.addEventListener("click", () => {
            gsap.to(e, {
                duration: 0.5,
                scale: 1.05,
                backgroundColor: "#101010",
                ease: "elastic.out(1, 0.3)",
                onComplete: () => {
                    gsap.to(e, {
                        duration: 0.4,
                        scale: 1,
                        backgroundColor: "#007bff",
                        ease: "elastic.out(1, 0.3)"
                    });
                }
            });
        });
    });
});
page4Anime();
//Array of all the product data that are available now. Used to add dynamically Product Card 
const arr = [
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
//Increase Quantity
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
//Decrease Quantity
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
// Function to update cart count on page load 
const updateCartCountOnLoad = () => {
    const productCount = JSON.parse(localStorage.getItem('productCount')) || 0;
    document.querySelector(".cart span").innerHTML = productCount;
};
document.addEventListener('DOMContentLoaded', updateCartCountOnLoad);

// Add event listeners to all elements with the class "shop"
document.querySelectorAll(".shop").forEach((e) => {
    e.addEventListener("click", (event) => {
        // Get product ID, price, and quantity
        const id = e.parentElement.parentElement.getAttribute("id");
        let priceString = e.parentElement.childNodes[7].childNodes[0].innerHTML.replace("₹", "");
        let price = Number(priceString);
        let quantityString = e.parentElement.parentElement.childNodes[3].childNodes[11].childNodes[2].childNodes[3].innerHTML;
        let quantity = Number(quantityString);
        let total = price * quantity;

        // Create product object
        let product = {
            id: id,
            quantity: quantity,
            total: total
        };

        // Retrieve existing products and product count from local storage
        let products = JSON.parse(localStorage.getItem('products')) || [];
        let productCount = JSON.parse(localStorage.getItem('productCount')) || 0;

        // Check if product already exists
        let productExists = products.some(p => p.id === product.id);

        if (!productExists) {
            // Add the new product to the array if it doesn't already exist
            products.push(product);
            productCount++;
            localStorage.setItem('products', JSON.stringify(products));
            localStorage.setItem('productCount', JSON.stringify(productCount));

            // Update the cart count display
            document.querySelector(".cart span").innerHTML = productCount;
        } else {
            alert("Already ADDED");
        }
    });
});
document.querySelector(".cart").addEventListener("click", () => {
    getData();
})
let a = 0;
//Click on cart & feedback it will open new file
document.querySelector('.cart').addEventListener('click', function () {
    window.location.href = 'addToCart.html';
});
document.querySelector('.contact').addEventListener('click', function () {
    window.location.href = 'feedback.html';
});