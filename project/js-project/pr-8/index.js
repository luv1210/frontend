let sname = document.getElementById('productName');
let price = document.getElementById('productPrice');
let url = document.getElementById('productURL');
let productList = document.querySelector('#productList');
let form = document.getElementById('productForm');
let addcartlist = document.getElementById('addcartlist');

// Initialize displays
displayProducts();
displaycartProducts();

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Basic validation
  if (!sname.value || !price.value || !url.value) {
    alert('Please fill in all fields');
    return;
  }

  let products = JSON.parse(localStorage.getItem('products')) || [];

  let product = {
    id: Date.now(),
    name: sname.value.trim(),
    price: parseFloat(price.value).toFixed(2),
    url: url.value.trim()
  };

  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));

  form.reset();
  displayProducts();
});

function displayProducts() {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  let data = "";
  
  if (products.length === 0) {
    data = `<div class="col-12"><p>No products available</p></div>`;
  } else {
    products.forEach((product, index) => {
      data += `
       <div class="col-6">
         <div class="card h-100">
           <img src="${product.url}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
           <div class="card-body">
             <h5 class="card-title">${product.name}</h5>
             <p class="card-text">Price: ₹${product.price}</p>
             <a href="#" class="btn btn-primary" onclick="addtocart(${index})">Add to cart</a>
<a href="#" class="btn btn-danger" onclick="deleteProduct(${index})">Delete</a>

           </div>
         </div>
       </div>
      `;
    });
  }
  productList.innerHTML = data;
}
function addtocart(index) {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  let cartproducts = JSON.parse(localStorage.getItem("cartproduct")) || [];

  const productToAdd = products[index];
  const exists = cartproducts.some(item => item.id === productToAdd.id);

  if (!exists) {
    productToAdd.quty = 1; // initialize quantity
    cartproducts.push(productToAdd);
    localStorage.setItem("cartproduct", JSON.stringify(cartproducts));
    displaycartProducts();
  } else {
    alert('This product is already in your cart');
  }
}


function deleteProduct(index) {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products));
  displayProducts();
}
function displaycartProducts() {
  let cartproducts = JSON.parse(localStorage.getItem("cartproduct")) || [];
  let data = "";
  let totalAmount = 0;

  if (cartproducts.length === 0) {
    data = `<div class="col-12"><p>Your cart is empty</p></div>`;
  } else {
    data += `<div class="row">`; // Start the row

    cartproducts.forEach((product, index) => {
      const itemTotal = product.price * product.quty;
      totalAmount += itemTotal;

      data += `
        <div class="col-md-4 mb-3">
          <div class="card h-100">
            <img src="${product.url}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Price: ₹${product.price}</p>
                <div class="mb-2">
                  <button class="btn btn-outline-primary me-2" onclick="quntitydec(${index})">-</button>
                  <span class="fw-bold">${product.quty}</span>
                  <button class="btn btn-outline-primary ms-2" onclick="quntityadd(${index})">+</button>
                </div>
                <div>
                  <h6>Total: ₹${itemTotal.toFixed(2)}</h6>
                </div>
              </div>
              <a href="#" class="btn btn-danger mt-2" onclick="removecart(${index})">Remove</a>
            </div>
          </div>
        </div>
      `;
    });

    // Grand Total column (spanning full width, still within same container)
    data += `
      <div class="col-12">
        <div class="card bg-light p-3 m-4">
          <h3 class="text-end mb-0">Grand Total: ₹ ${totalAmount.toFixed(2)}</h3>
        </div>
      </div>
    `;

    data += `</div>`; // Close the row
  }

  addcartlist.innerHTML = data;
}


function removecart(index) {
  let cartproducts = JSON.parse(localStorage.getItem("cartproduct")) || [];
  cartproducts.splice(index, 1);
  localStorage.setItem('cartproduct', JSON.stringify(cartproducts));
  displaycartProducts(); // Fixed: was calling displayProducts() before
}

function quntityadd(index) {
  let cartproducts = JSON.parse(localStorage.getItem("cartproduct")) || [];
  cartproducts[index].quty = Number(cartproducts[index].quty) + 1;
  localStorage.setItem("cartproduct", JSON.stringify(cartproducts));
  displaycartProducts();
}

function quntitydec(index) {
  let cartproducts = JSON.parse(localStorage.getItem("cartproduct")) || [];
  if (cartproducts[index].quty > 1) {
    cartproducts[index].quty = Number(cartproducts[index].quty) - 1;
    localStorage.setItem("cartproduct", JSON.stringify(cartproducts));
    displaycartProducts();
  }
}
