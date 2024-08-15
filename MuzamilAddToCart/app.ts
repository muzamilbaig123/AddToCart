interface AllProductsType {
    id: string
    imgage: string
    prodName: string
    prodDescription: string
    price: number
    qty?: number
    totalPrice?: number

}
let allProducts: AllProductsType[] = [
    {
        id: "iphone123",
        imgage: "https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        prodName: "iphone 15 promax",
        prodDescription: "i phone ipsum, dolor sit amet consectetur adipisicing elit. Id, expedita.",
        price: 1266,
    },

    {
        id: "SdCard123",
        imgage: "https://images.unsplash.com/photo-1720048169970-9c651cf17ccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        prodName: "Sd Card",
        prodDescription: "Sd Card ipsum, dolor sit amet consectetur adipisicing elit. Id, expedita.",
        price: 4,
    },

    {
        id: "laptop123",
        imgage: "https://images.unsplash.com/photo-1720665858567-3f677602cb7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        prodName: "i5 10th gen",
        prodDescription: "heavy worksation laptop ipsum, dolor sit amet consectetur adipisicing elit. Id, expedita.",
        price: 780,
    },

    {
        id: "hdd123",
        imgage: "https://images.unsplash.com/photo-1721332153289-0c46dc38981b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        prodName: "portable HDD",
        prodDescription: "portable harddisk ipsum, dolor sit amet consectetur adipisicing elit. Id, expedita.",
        price: 20,
    }

];

let container = document.querySelectorAll(".container")[0];
function listAllProducts () {
container.innerHTML = "";

allProducts.map((val, ind, arr) => {
    container.innerHTML += `
    <div class="product">
        <img src="${val.imgage}" alt="">
        <h2>${val.prodName}</h2>
        <p>${val.prodDescription}</p>
        <div><b>$${val.price}</b></div>
        <button onclick="addtocart(${ind})">Add To Cart</button>
    </div>   
    `
});

}

listAllProducts();

let cart: AllProductsType[] = [];
let cartIcon = document.querySelectorAll("nav a i")[0];

function addtocart (index: number) {
    let prodInCart = cart.find((item) => item.id === allProducts[index].id);
    if(prodInCart){
        prodInCart.qty! += 1;
        prodInCart.totalPrice = prodInCart.qty! * prodInCart.price;
        cartIcon.innerHTML = `${prodInCart.qty}`
    }
    else{
        let prodAddCart = {...allProducts[index], qty: 1, totalPrice: allProducts[index].price}
        cart.push(prodAddCart)
    }
}

let cartContainer = document.querySelectorAll(".cart-container")[0];
function displayCart () {
    cartContainer.innerHTML = ""
    cart.map((item, index, arr) => {
        cartContainer.innerHTML += `
        <div class="product">
            <img src="${item.imgage}" alt="">
            <h2>${item.prodName}</h2>
            <p>${item.prodDescription}</p>
            <div><b>$${item.totalPrice}</b></div>
            <button>Buy</button>
        </div>   
    `
    })
}