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
    let a = 0 ;
    // Function to get and log product data from local storage
    const getData = () => {
        const productData = localStorage.getItem('products');
        if (productData) {
            const products = JSON.parse(productData);
            console.log(products[0].id)
            function getProductById(productId) {
                return products.find(product => product.id === productId);
            }
            products.forEach((e)=>{
            const productIdToFind = e.id;
            console.log(productIdToFind)
            const product = getProductById(productIdToFind);
            if (product) {
                console.log('Product found:', product);
                a = product.id;
                let clutter = "";
                products.forEach((elm)=>{
                    clutter += `<div class="box1">
                    <div class="title">${arr[elm.id].productName}</div>
                    <div class="image"><img src="${arr[elm.id].productImg}" alt=""></div>
                    <div class="productName">${arr[elm.id].productName}</div>
                    <div class="productPrice">₹${elm.total}</div>
                    <div class="quantityBox">
                        <div class="quantityBoxSec increment">+</div>
                        <div class="quantityBoxSec">${elm.quantity}</div>
                        <div class="quantityBoxSec decrement">-</div>
                    </div>
                    <button class="remove">Remove</button>
                </div>`;
                })
        document.querySelector(".container").innerHTML = clutter;
            } else {
                console.log('Product not found');
            } 
            })   
        } else {
            console.log("No products in local storage");
        }
    };
    getData();
    const productCountCart = localStorage.getItem('productCount');
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector(".cart span").innerHTML = productCountCart;
})
//Increment Decrement
document.querySelectorAll(".increment").forEach((e) => {
    e.addEventListener("click", (event) => {
        let stock = Number(e.parentElement.childNodes[3].innerHTML);
        let currentValue = parseInt(e.parentElement.childNodes[3].innerHTML) || 1;
        let priceString = e.parentElement.parentElement.childNodes[7].innerHTML.replace("₹", "");
        let price = Number(priceString);
        let quantityString = e.parentElement.childNodes[3].innerHTML.innerHTML;
        let quantity = Number(quantityString);
        let total = price * quantity;
        /*if (currentValue < stock) {
            currentValue += 1;
            e.parentElement.parentElement.childNodes[7].innerHTML = currentValue;
        }
        else if (currentValue === stock) {
            currentValue = stock;
        }
        else{
            console.log("hello")
        }*/
       console.log(typeof currentValue);
       console.log(currentValue)
    })
})
/*document.querySelectorAll(".decrement").forEach((e) => {
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
})*/
    /*mujhe addcart wala parrt me increment decrement krna aur remove krne hai  */