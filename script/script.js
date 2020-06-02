let productData = {
    "currency": "€",
    "products": [{
            "id": "product-1",
            "name": "Billed Murray",
            "rating": "4",
            "listPrice": "200",
            "discount": "15",
            "image": "http://www.fillmurray.com/g/500/200"
        },
        {
            "id": "product-2",
            "name": "Bill's hovercraft is full of eels",
            "rating": "1",
            "listPrice": "250",
            "discount": "10",
            "image": "http://www.fillmurray.com/g/300/250"
        },
        {
            "id": "product-3",
            "name": "Bill fills everything",
            "rating": "5",
            "listPrice": "2500",
            "image": "http://www.fillmurray.com/g/300/400"
        },
        {
            "id": "product-4",
            "name": "Bill needs you to buy this product so much",
            "rating": "5",
            "listPrice": "3580",
            "discount": "20",
            "image": "http://www.fillmurray.com/g/300/300"
        },
        {
            "id": "product-5",
            "name": "Bill no more",
            "rating": "4",
            "listPrice": "2324",
            "discount": "11",
            "image": "http://www.fillmurray.com/g/350/500"
        },
        {
            "id": "product-6",
            "name": "Bill no more",
            "rating": "2",
            "listPrice": "5432",
            "image": "http://www.fillmurray.com/g/350/200"
        }
    ]
}



function displayCard() {
    let productContainer = document.querySelector('.product-card-container')
    productContainer.innerHTML = '';
    productData.products.forEach(product => {
        let stars = "";
        let discountPrice = Math.round((product.listPrice) - ((product.discount / 100) * product.listPrice));
        for (i = 1; i < 6; i++) {
            if (product.rating >= i) {
                stars += `<span class="fa fa-star yellow"></span>`
            } else {
                stars += `<span class="fa fa-star gray"></span>`
            }
        }

        if (product.discount === undefined || product.discount === null) {
            productContainer.innerHTML += `
            <div class="product-card">
            <div class="product-content">
            <div class="product-content-upper">
            <img class="product-img" src="${product.image}">
            <p class="product-name">${product.name}</p>
            </div>
            <div class="product-content-lower">
            <div class="rating-stars">${stars}</div>
            <p class="product-price">${product.listPrice}${productData.currency}</p>
            <button class="add-to-cart">Add to cart</button>
            </div>
            </div>
            </div>
        </div>`
        } else {
            productContainer.innerHTML += `
    <div class="product-card">
    <div class="product-content">
    <div class="product-content-upper">
    <img class="product-img" src="${product.image}">
    <div class="product-discount"><p>${product.discount}%</p></div>
     
    <p class="product-name">${product.name}</p>
    </div>
    <div class="product-content-lower">
    <div class="rating-stars">${stars}</div>
    <div class="prices">
    <p class="discount-price">${discountPrice}${productData.currency}</p>
    <p class="original-price"><s>${product.listPrice}${productData.currency}</s></p>
    </div>
    <button class="add-to-cart">Add to cart</button>
    </div>
    </div>
    </div>
</div>`
        }
    });
};

displayCard();



/* When the user clicks on the button, toggle between hiding and showing the dropdown content */

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function origLayout() {
    let productContainer = document.querySelector('.product-card-container');
    productContainer.innerHTML = '';
    displayCard();
}

function sortByPrice() {
    let productContainer = document.querySelector('.product-card-container');
    productData.products.sort((productA, productB) => {
        let priceA = productA.listPrice;
        let priceB = productB.listPrice;
        if (productA.discount) {
            priceA = productA.listPrice - ((productA.discount / 100) * productA.listPrice);
        }
        if (productB.discount) {
            priceB = productB.listPrice - ((productB.discount / 100) * productB.listPrice);
        }
        return priceB - priceA;
    })
    productContainer.innerHTML = '';
    displayCard();
}

function sortByDiscount() {
    let productContainer = document.querySelector('.product-card-container');
    productData.products.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    productContainer.innerHTML = '';
    displayCard();
}

function sortByRating() {
    let productContainer = document.querySelector('.product-card-container');
    productData.products.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    productContainer.innerHTML = '';
    displayCard();
}