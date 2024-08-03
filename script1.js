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
            function getProductById(productId) {
                return products.find(product => product.id === productId);
            }   
            const productIdToFind = '2';
            const product = getProductById(productIdToFind);
    
    if (product) {
        console.log('Product found:', product);
        a = product.id;
        //console.log(arr[a].productImg);
        let clutter = "";
        products.forEach((elm)=>{
            clutter += `<div class="box1">
            <div class="title">Laptop</div>
            <div class="image"><img src="${arr[elm.id].productImg}" alt=""></div>
            <div class="productName">${arr[elm.id].productName}</div>
            <div class="productPrice">${elm.total}</div>
            <div class="quantityBox">
                <div class="quantityBoxSec">+</div>
                <div class="quantityBoxSec">${elm.quantity}</div>
                <div class="quantityBoxSec">-</div>
            </div>
            <button class="remove">Remove</button>
        </div>`;
        })
document.querySelector(".container").innerHTML = clutter;
    } else {
        console.log('Product not found');
    }     
        } else {
            console.log("No products in local storage");
        }
    };
    getData();
    
    