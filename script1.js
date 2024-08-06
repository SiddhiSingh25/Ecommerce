    const arr = [
        {
            productImg: "https://jscourse.csscourse.online/images/lapi.png", 
            productName: "Laptop",
            description: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.", 
            price: "₹5500",
            actualPrice: "₹58,000", 
            stocks: 50
        },
        {
            productImg: "https://jscourse.csscourse.online/images/iphone.png", 
            productName: "IPhone",
            description: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.", 
            price: "₹3500",
            actualPrice: "₹3800", 
            stocks: 45
        },
        {
            productImg: "https://jscourse.csscourse.online/images/headphone.png", 
            productName: "Headphone",
            description: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.", 
            price: "₹1400",
            actualPrice: "₹1500", 
            stocks: 26
        },
        {
            productImg: "https://jscourse.csscourse.online/images/watch.png", 
            productName: "Watch",
            description: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.", 
            price: "₹5500",
            actualPrice: "₹5800", 
            stocks: 36
        },
        {
            productImg: "https://jscourse.csscourse.online/images/speakers.png", 
            productName: "Speakers",
            description: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.", 
            price: "₹2100",
            actualPrice: "₹2800", 
            stocks: 33
        },
        {
            productImg: "https://jscourse.csscourse.online/images/tv.png", 
            productName: "Television",
            description: "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.", 
            price: "₹3300",
            actualPrice: "₹3400", 
            stocks: 7
        }
    ];
    
    // Function to display products from local storage
    const getData = () => {
        const productData = localStorage.getItem('products');
        if (productData) {
            const products = JSON.parse(productData);
            let clutter = "";
            products.forEach(elm => {
                clutter += `<div class="box1" data-id="${elm.id}">
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
            });
            document.querySelector(".container").innerHTML = clutter;
    
            // Add event listeners to remove buttons
            document.querySelectorAll(".remove").forEach((e) => {
                e.addEventListener("click", (event) => {
                    const productId = event.target.parentElement.getAttribute("data-id");
                    removeProductById(productId);
                });
            });
        } else {
            console.log("No products in local storage");
        }
    };
    
    // Function to remove a product by id from local storage and update product count
    const removeProductById = (productId) => {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products = products.filter(product => product.id !== productId);
        localStorage.setItem('products', JSON.stringify(products));
    
        // Update product count
        let productCount = JSON.parse(localStorage.getItem('productCount')) || 0;
        if (productCount > 0) {
            productCount--;
            localStorage.setItem('productCount', JSON.stringify(productCount));
            document.querySelector(".cart span").innerHTML = productCount;
        }
    
        getData();
        calculateTotal(); // Recalculate the total after removing a product
    };
    
    // Function to update cart count on page load
    const updateCartCountOnLoad = () => {
        const productCount = JSON.parse(localStorage.getItem('productCount')) || 0;
        document.querySelector(".cart span").innerHTML = productCount;
    };
    
    // Function to calculate and display the total price
    const calculateTotal = () => {
        const productData = localStorage.getItem('products');
        if (productData) {
            const products = JSON.parse(productData);
            let total = products.reduce((sum, product) => sum + product.total, 0);
            document.querySelector(".right").innerHTML = `₹${total}`;
            document.querySelector("#total").innerHTML = `₹${total > 0 ? total + 50 : 0}`;
        }
    };
    
    // Call the function to update cart count and display products when the page loads
    document.addEventListener('DOMContentLoaded', () => {
        updateCartCountOnLoad();
        getData();
        calculateTotal();
    });
    
    