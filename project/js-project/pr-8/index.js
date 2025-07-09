let sname = document.getElementById('productName')
let price = document.getElementById('productPrice')
let url = document.getElementById('productURL')
let productList = document.querySelector('#productList');
let form = document.getElementById('productForm');


form.addEventListener('submit', function (e) {
  e.preventDefault();

  let products = JSON.parse(localStorage.getItem('products')) || [];


  let product = {
    id: Date.now(),
    name: sname.value,
    price: price.value,
    url: url.value
  };

  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));

  form.reset();
  displayProducts();
});




let displayProducts = () => {
  let products = JSON.parse(localStorage.getItem('products'))
  let data = ""
  products.forEach((product) => {
    let row = `
     <div class="col">
         <div class="card h-100">
           <img src="${product.url}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
           <div class="card-body">
             <h5 class="card-title">${product.name}</h5>
             <p class="card-text">Price: ₹${product.price}</p>
           </div>
         </div>
       </div>
     `
    data += row
  });
  productList.innerHTML = data;
}

displayProducts()