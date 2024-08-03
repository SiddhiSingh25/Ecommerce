const newDiv = document.createElement("div");
newDiv.id = "nav";
newDiv.className = "nav";
newDiv.innerHTML = `<h1 class="logo">S.K MART</h1>
        <div class="navRight">
            <div class="mark"><i class="fa-solid fa-xmark"></i></div>
            <h1>Home</h1>
            <h1>About us</h1>
            <h1>Product</h1>
            <h1>Contact</h1>
            <div class="cart"><i class="fa-solid fa-cart-shopping"></i><span>0</span></div>
            <div class="menu"><i class="fa-solid fa-bars"></i></div>
        </div>`;
document.body.appendChild(newDiv);

