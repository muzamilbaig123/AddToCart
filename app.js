"use strict";
let laptops = [
    // laptops
    {
        id: "fa305309-94ac-43b4-a8c0-51da89405aad",
        prodImg: "public/laptop1.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "84d6c39f-4db9-4ab0-b20f-12ef33695bf9",
        prodImg: "public/laptop2.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "8cada725-fd40-4ac7-872b-6d7d14121ed0",
        prodImg: "public/laptop3.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "444e7eb9-f2e8-492b-9e77-9b147e6da802",
        prodImg: "public/laptop4.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "a3bd9afd-6707-46c3-b082-d0d930d4942c",
        prodImg: "public/laptop5.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "4119b7ff-5770-4582-af95-159550236da1",
        prodImg: "public/laptop6.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 100.00
    },
];
let computers = [
    // computers
    {
        id: "18203fa5-a614-445a-aa37-1bc63bb0815d",
        prodImg: "public/pc1.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "0db3e1f9-ccad-4d59-ba0d-bebc8bed94b0",
        prodImg: "public/pc2.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "d791dded-8fe2-4797-935e-d82be75a6bbc",
        prodImg: "public/pc3.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "d2dcc76c-09a3-417a-aa8c-387a0c39e454",
        prodImg: "public/pc4.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "e1888447-9a01-4747-81d6-07dc272261b5",
        prodImg: "public/pc5.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "0154e040-72d9-44d1-822d-cadec8bd2d0b",
        prodImg: "public/pc6.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
];
let acceseries = [
    // Acceseries
    {
        id: "9b72978b-a1f8-4e7f-8f50-aa74b0e4a220",
        prodImg: "public/a1.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "a5837880-085c-454f-9995-5ec456a4ea3d",
        prodImg: "public/a2.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "b289d9a6-23b3-4fb1-b229-d40259f24a6a",
        prodImg: "public/a3.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "f70a2955-2f76-43e1-a1e2-8596cb82c8b8",
        prodImg: "public/a4.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "acb0af0e-45d2-41a6-98a4-ea536702659c",
        prodImg: "public/a5.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    },
    {
        id: "22ddf75f-5e8e-4158-93d5-8405ac01c751",
        prodImg: "public/a6.webp",
        prodName: "Dell i54th Gen",
        prodDesc: "This is a product. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, alias. Lorem ipsum dolor sit amet.",
        revies: "public/reviews.png",
        price: 27.00
    }
];
let laptopProductSec = document.querySelectorAll(".laptop-product .main-product")[0];
let computerProductsSec = document.querySelectorAll(".computer-products .main-product")[0];
let accersiesProducts = document.querySelectorAll(".accersies-products .main-product")[0];
function listAllProducts() {
    for (let i = 0; i < Math.min(laptops.length, acceseries.length, computers.length); i++) {
        laptopProductSec.innerHTML += `
         <div class="product">
            <div class="product-pic">
                 <img src="${laptops[i].prodImg}" alt="laptop 1" />
             </div>
                  <h2>${laptops[i].prodName}</h2>
                  <p>${laptops[i].prodDesc}</p>
                 <img src="${laptops[i].revies}" class="reviews" />
                 <br />
                 <div class="rate">
                           <del>40,000</del><ins>${laptops[i].price}</ins>
                 </div>
                 <br />
                      <button onclick="AddToCartFeatureLap(${i})">AddToCart</button>
            </div>
    `;
        // computer
        computerProductsSec.innerHTML += `
         <div class="product">
            <div class="product-pic">
                 <img src="${computers[i].prodImg}" alt="laptop 1" />
             </div>
                  <h2>${computers[i].prodName}</h2>
                  <p>${computers[i].prodDesc}</p>
                 <img src="${computers[i].revies}" class="reviews" />
                 <br />
                 <div class="rate">
                           <del>40,000</del><ins>${computers[i].price}</ins>
                 </div>
                 <br />
                      <button onclick="AddToCartFeatureCom(${i})">AddToCart</button>
            </div>
    `;
        // accersies
        accersiesProducts.innerHTML += `
        <div class="product">
           <div class="product-pic">
                <img src="${acceseries[i].prodImg}" alt="laptop 1" />
            </div>
                 <h2>${acceseries[i].prodName}</h2>
                 <p>${acceseries[i].prodDesc}</p>
                <img src="${acceseries[i].revies}" class="reviews" />
                <br />
                <div class="rate">
                          <del>40,000</del><ins>${acceseries[i].price}</ins>
                </div>
                <br />
                     <button onclick="AddToCartFeatureAcc(${i})">AddToCart</button>
           </div>
   `;
    }
}
;
listAllProducts();
let cart = [];
// function AddToCartFeatureLap (index: number) {
//     // console.log(index)
//     let {id} = laptops[index]
//     let isMatched = false;
//     let targetIndex: number = -1;
//     cart.forEach((item, idx:number)=>{
//         if(id === id){
//         console.log(item)
//         isMatched = true;
//         console.log("Matec found", idx);
//         targetIndex = idx;
//     }
//     });
//     if(!isMatched){
//         let laptopProductClone = { ...laptops[index]  }
//         laptopProductClone.qty = 1;
//         laptopProductClone.totalPrice = laptopProductClone.qty * laptopProductClone.price;
//         cart.push(laptopProductClone)
//     }
//     else{
//         if(targetIndex !== -1){
//         let cartItem = cart[targetIndex]
//         cartItem.qty = cartItem.qty + 1
//         cartItem.totalPrice = cartItem.qty * cartItem.price
//         }
//     }
// }
function AddToCartFeatureLap(index) {
    let { id } = laptops[index];
    let isMatched = false;
    let targetIndex = -1;
    cart.forEach((item, idx) => {
        if (item.id === id) { // Compare `item.id` with `id`
            console.log(item);
            isMatched = true;
            console.log("Match found", idx);
            targetIndex = idx;
        }
    });
    if (!isMatched) {
        let laptopProductClone = Object.assign({}, laptops[index]);
        laptopProductClone.qty = 1;
        laptopProductClone.totalPrice = laptopProductClone.qty * laptopProductClone.price;
        cart.push(laptopProductClone);
    }
    else {
        if (targetIndex !== -1) {
            let cartItem = cart[targetIndex];
            cartItem.qty = cartItem.qty + 1;
            cartItem.totalPrice = cartItem.qty * cartItem.price;
        }
    }
}
function AddToCartFeatureCom(index) {
    console.log(index);
    let { id } = computers[index];
    console.log(id);
}
function AddToCartFeatureAcc(index) {
    console.log(index);
    let { id } = acceseries[index];
    console.log(id);
}
