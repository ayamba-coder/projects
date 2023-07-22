let cart = getLocalCart();
let itemsCount = document.querySelector(".checkout-header-middle-section .return-to-home-link");
itemsCount.innerText = `${cart.length} item${cart.length > 1 ? 's' : ''}`


if (cart.length > 0) {
  populatePage(cart,rawfn);
}else{
  document.querySelector(".summary").innerHTML = "<div class='summary-empty'>Empty Cart</div>"
}

let deleteBtn = document.querySelectorAll(".delete-quantity-link");
let updateBtn = document.querySelectorAll(".update-quantity-link");
deleteBtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
      cart.forEach(item=>{
          if (e.target.dataset.id == item.id.valueOf()) {
            cart.splice(cart.indexOf(item),1);
            storeItemLocally(cart);
            let itemCrad =  document.querySelector(`#e${item.id.slice(1,3)}`);
            itemCrad.style.display = "none";
            itemsCount.innerText = `${cart.length} item${cart.length > 1 ? 's' : ''}`
          }
      });
    
        cart.length == 0 ? document.querySelector(".summary").innerHTML = "<div class='summary-empty'>Empty Cart</div>" : '';
    
    });
    
});
function rawfn(data) {
    let accumulator = '';
    data.forEach(cartItem => {
      accumulator += `
        <div class="cart-item-container" id="e${cartItem.id.slice(1,3)}">
              <div class="delivery-date">
                Delivery date: Tuesday, June 21
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
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary" data-id="${cartItem.id}">
                      Delete
                    </span>
                  <div class="product-quantity-container">
                      <select class="quantity">
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
                      name="delivery-option-${cartItem.id}" checked>
                    <div>
                      <div class="delivery-option-date">
                        Tuesday, June 21
                      </div>
                      <div class="delivery-option-price">
                        FREE Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio"
                      class="delivery-option-input"
                      name="delivery-option-${cartItem.id}">
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
                      name="delivery-option-${cartItem.id}">
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
    });
    document.querySelector(".summary").innerHTML = `<div class="page-title">Review your order</div>
    <div class="payment-summary">
      <div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money">$42.75</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$4.99</div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$47.74</div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$4.77</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$52.51</div>
      </div>

      <button class="place-order-button button-primary">
        Place your order
      </button>
    </div>`
    document.querySelector(".order-summary").innerHTML = accumulator
}