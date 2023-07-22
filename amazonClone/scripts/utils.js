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

 function updateCartCounter(){
   let accumulator = 0
   cart.forEach(product => {
      accumulator += parseInt(product.quantity);
      if (product.id in product) {
         console.log(product);
      }
   });
   cartCounter.innerHTML = accumulator;
 }