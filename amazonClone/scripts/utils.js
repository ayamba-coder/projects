//  Comnfiguration and backend functions here


async function getData() {
     const response = await fetch('././backend/products.json')
     if (!response.ok) {
        throw  Error("Something went wrong")
     }else{
        return await response.json()
     }
}

function populatePage(data,rawfn) {
      rawfn(data)
}

function storeItemLocally(cart){
   
   localStorage.setItem(`cart`,JSON.stringify(cart));
}

function getLocalCart(){
   return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
 }

 function updateCartCounter(cartCounter){
   let accumulator = 0
   cart.forEach(product => {
      accumulator += parseInt(product.quantity);
      if (product.id in product) {
         console.log(product);
      }
   });
   cartCounter.innerHTML = accumulator;
 }
 function calculateOrder(){
   let subTotal = 0;
   let shipping = 0;
   let subShipping = 0;
   let grand_total = 0;
   cart.forEach(cartItem => {
      let price = parseFloat(cartItem.price);
      let quantity = parseFloat(cartItem.quantity);
      let shipping = parseFloat(cartItem.shipping);
      let total = (price*quantity) + shipping;
      subTotal += total;
      shipping = shipping
      subShipping += shipping;
   });
   grand_total = subTotal + subShipping;
   document.querySelector(".subTotal").innerHTML = `$${subTotal.toFixed(2)}`;
   document.querySelector(".subShipping").innerHTML = `$${subShipping.toFixed(2)}`;
   document.querySelector(".grand_total").innerHTML = `$${grand_total.toFixed(2)}`
   switch (shipping) {
      case 0:
         console.log(shipping);
         break;
      case 4.99:
         console.log(shipping);
         break;
      case 9.99:
         console.log(shipping);
         break;
      default:
         break;
   }
   document.querySelector(".delivery-date").innerText = `Delivery date: Tuesday, June 21`
}