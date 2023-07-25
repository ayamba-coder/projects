let cart = getLocalCart();
const products_grid = document.querySelector(".products-grid");
let cartCounter = document.querySelector(".cart-quantity");

updateCartCounter(cartCounter);
// Sometimes different users may use different browser to access site
// Hence local storage becomes empty in browser.
// 1 way to overcome this is by enforcing user to get a session by login before he can create cart
// Once created, save to Local storage and copy to session db

getData().then(data=>{
    populatePage(data,rawfn);
}).then(()=> configurePage());

function configurePage(){
  const addToCartBtn = document.querySelectorAll(".add-to-cart-button");
  let added2Cart = document.querySelectorAll(".added-to-cart");
  for (const el of addToCartBtn) {
    let product = JSON.parse(window.atob(el.dataset.product));
      el.addEventListener("click",()=>{
           let quantityChecked = document.getElementById(`${product.quantity}`);
           product.id = product.quantity;
           product.quantity = quantityChecked.value;
           product.shipping = 0.00; // default shipping fee for all products
           cart.push(product);
           updateCartCounter(cartCounter);
           storeItemLocally(cart);
           el.previousElementSibling.style.visibility = "visible";
           el.style.display="none";
           quantityChecked.style.visibility = "hidden"
          });
  }
  added2Cart.forEach(btn => {
    for (let index = 0; index < cart.length; index++) {
      const cartEl = cart[index];
      if (btn.dataset.id == cartEl.id) {
        btn.style.visibility = "visible";
        btn.nextElementSibling.style.display = "none";
        let quantityChecked = document.getElementById(`${btn.dataset.id}`);
        quantityChecked.style.visibility = "hidden"
      }
    }
  });
}

function rawfn(data){
  let accumulator = ''
    data.forEach(product=>{
      accumulator += `<div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>
  
      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>
  
      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>
  
      <div class="product-price">
        $${(product.priceCents / Math.pow(10,2)).toFixed(2)}
      </div>
  
      <div class="product-quantity-container">
        <select class="quantity" id="${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
  
      <div class="product-spacer"></div>
  
      <div class="added-to-cart" data-id='${product.id}'>
        <img src="images/icons/checkmark.png">
        Added
      </div>
      <button class="add-to-cart-button button-primary" data-product='${window.btoa(JSON.stringify({"name": product.name,"imageUrl": product.image ,"price":(product.priceCents / Math.pow(10,2)).toFixed(2),"quantity":product.id}))}'>
        Add to Cart
      </button>
    </div>`
    });
    document.querySelector(".products-grid").innerHTML = accumulator;
}