let cart = getLocalCart();
// let cartCounter = document.querySelector(".checkout-header-middle-section .return-to-home-link");
let cartCounter = document.querySelector(".cart-quantity");
updateCartCounter(cartCounter)
cart.length > 0 ? populatePage(cart,rawfn) : document.querySelector(".summary").innerHTML = "<div class='summary-empty'>Empty Cart</div>"
cart.length > 0 ?calculateOrder() : ''; 



let deleteBtn = document.querySelectorAll(".delete-quantity-link");
let changer = document.querySelectorAll(".quantity");
changer.forEach(changa=>{
  changa.addEventListener("change",(e)=>{
     cart.forEach(cartItem => {
        if (cartItem.id == e.target.id) {
            cartItem.quantity = e.target.value;
            document.querySelector(`#q${cartItem.id.slice(1,3)}`).innerText = cartItem.quantity
            storeItemLocally(cart);
            calculateOrder();
        }
     });
  })
})
deleteBtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
      cart.forEach(item=>{
          if (e.target.dataset.id == item.id.valueOf()) {
            cart.splice(cart.indexOf(item),1);
            storeItemLocally(cart);
            let itemCrad =  document.querySelector(`#e${item.id.slice(1,3)}`);
            itemCrad.style.display = "none";
            cartCounter.innerText = `${cart.length} item${cart.length > 1 ? 's' : ''}`
          }
      });
    
        cart.length == 0 ? document.querySelector(".summary").innerHTML = "<div class='summary-empty'>Empty Cart</div>" : '';
    
    });
    
});
function rawfn(data) {
    let accumulator = '';
    let shippingTotal = 0;
    data.forEach(cartItem => {
      accumulator += `
        <div class="cart-item-container" id="e${cartItem.id.slice(1,3)}">
              <div class="delivery-date">
               
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${cartItem.imageUrl}">
                <div class="cart-item-details">
                  <div class="product-name">
                    ${cartItem.name}
                  </div>
                  <div class="product-price">
                  ${cartItem.price}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label" id="q${cartItem.id.slice(1,3)}">${cartItem.quantity}</span>
                    </span>
                    <span class="delete-quantity-link link-primary" data-id="${cartItem.id}">
                      Delete
                    </span>
                  <div class="product-quantity-container">
                      <select class="quantity" id="${cartItem.id}">
                          <option selected value="${cartItem.quantity}">${cartItem.quantity}</option>
                          <option value="1">1</option>
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
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  <div class="delivery-option">
                    <input type="radio"
                      class="delivery-option-input"
                      name="delivery-option-${cartItem.id}" checked value="0.00" data-product="${cartItem.id}">
                    <div>
                      <div class="delivery-option-date">
                        Tuesday, June 21
                      </div>
                      <div class="delivery-option-price">
                        FREE Shipping
                      </div>
                    </div>
                  </div>
                  <div class="hello"></div>
                  <div class="delivery-option">
                    <input type="radio"
                      class="delivery-option-input"
                      name="delivery-option-${cartItem.id}" value="4.99" data-product="${cartItem.id}">
                    <div>
                      <div class="delivery-option-date">
                        Wednesday, June 15
                      </div>
                      <div class="delivery-option-price">
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio"
                      class="delivery-option-input"
                      name="delivery-option-${cartItem.id}" value="9.99" data-product="${cartItem.id}">
                    <div>
                      <div class="delivery-option-date">
                        Monday, June 13
                      </div>
                      <div class="delivery-option-price">
                        $9.99 - Shipping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>`
        setTimeout(() => {
          let shipping = document.querySelectorAll(`.delivery-option-input`);
          shipping.forEach(timeline => {
            if (timeline.dataset.product == cartItem.id.valueOf()) {
              timeline.value == cartItem.shipping ? timeline.checked = true : '';
            }
            timeline.addEventListener("click",(e)=>{
              cart.forEach(item=>{
                if (e.target.dataset.product == item.id.valueOf()) {
                  item.shipping = parseFloat(e.target.value);
                  storeItemLocally(cart);
                  calculateOrder()
                }
            });
            })
          });
        }, 50);
    });
  
    document.querySelector(".summary").innerHTML = 
    `<div class="page-title">Review your order</div>
    <div class="payment-summary">
      <div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money subTotal">$42.75</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money subShipping">$4.99</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money grand_total">$52.51</div>
      </div>

      <button class="place-order-button button-primary">
        Place your order
      </button>
    </div>`
  cart.subTotal = shippingTotal.toFixed(2);
  document.querySelector(".subTotal").innerHTML = cart.subTotal;
   // console.log(accumulator);
    document.querySelector(".order-summary").innerHTML = accumulator
}