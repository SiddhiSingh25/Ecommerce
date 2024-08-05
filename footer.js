const footer = document.createElement("div");
footer.id= "footer";
footer.className = "footer";
/*
footer.innerHTML = `<div class="footerSec footerSec1">
                <h1 class="logo">SIDDHI STORE</h1>
                <p>Welcome to S.K EcomStore, your ultimate destination for cutting-edge gadgets!</p>
                <div class="card">
                    <i class="fa-brands fa-cc-apple-pay"></i><i class="fa-brands fa-cc-paypal"></i><i class="fa-brands fa-cc-stripe"></i><i class="fa-brands fa-cc-mastercard"></i><i class="fa-regular fa-credit-card"></i><i class="fa-brands fa-cc-visa"></i></div>
                </div>
                <div class="footerSec footerSec2">
                    <h1>SHOPPING</h1>
                    <div class="footerSec2Bottom"><span>Computer Store</span><br>
                        <span>Laptop Store</span><br>
                        <span>Accessories</span><Br>
                        <span>Sales & Discount</span></div>   
                </div>
                <div class="footerSec footerSec2 footerSec3">
                    <h1> Experience</h1>
                    <div class="footerSec2Bottom">
                <span>Contact Us</span>
                <span>Payment Method</span>
                <span>Delivery</span>
                <span>Return and Exchange</span>
            </div>
                </div>
                <div class="footerSec footerSec4">
                    <h1>NEWSLETTER</h1>
                <p>Be the first to know about new
                    arrivals, sales & promos!</p>
                <input type="text" placeholder="Your Email">
                </div>`;
                document.body.appendChild(footer);*/
                document.body.insertAdjacentHTML('beforeend', `
                    <div class="footer">
        <div class="footerSec footerSec1">
        <h1 class="logo">S.K Mart</h1>
        <p>Welcome to S.K EcomStore, your ultimate destination for cutting-edge gadgets!</p>
        <div class="card">
            <i class="fa-brands fa-cc-apple-pay"></i><i class="fa-brands fa-cc-paypal"></i><i class="fa-brands fa-cc-stripe"></i><i class="fa-brands fa-cc-mastercard"></i><i class="fa-regular fa-credit-card"></i><i class="fa-brands fa-cc-visa"></i></div>
        </div>
        <div class="footerSec footerSec2">
            <h1>SHOPPING</h1>
            <div class="footerSec2Bottom"><span>Computer Store</span><br>
                <span>Laptop Store</span><br>
                <span>Accessories</span><Br>
                <span>Sales & Discount</span></div>   
        </div>
        <div class="footerSec footerSec2 footerSec3">
            <h1> Experience</h1>
            <div class="footerSec2Bottom">
        <span>Contact Us</span>
        <span>Payment Method</span>
        <span>Delivery</span>
        <span>Return and Exchange</span>
    </div>
        </div>
        <div class="footerSec footerSec4">
            <h1>NEWSLETTER</h1>
        <p>Be the first to know about new
            arrivals, sales & promos!</p>
        <input type="text" placeholder="Your Email">
        </div>
        </div>
        <div class="catchMe">
                <p>Developed by Siddhi Singh</p>
                <div class="social-icons">
                    <a href="https://www.linkedin.com/in/siddhi-singh07/" target="_blank">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a href="https://www.instagram.com/siddhyy_here/" target="_blank">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://www.youtube.com/@college-insiders" target="_blank">
                        <ion-icon name="logo-youtube"></ion-icon>
                    </a>
                </div>        
        </div>
                `);
                /*const targetDiv = document.getElementById('targetDiv');

        // Insert the new div after the target div
        targetDiv.insertAdjacentElement('afterend', newDiv);*/
