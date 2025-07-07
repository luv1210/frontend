x
  // Open the form
  function openForm() {
    document.getElementById("cartForm").style.display = "block";
    document.getElementById("backdrop").style.display = "block";
  }

  // Close form and backdrop
  function closeForm() {
    document.getElementById("cartForm").style.display = "none";
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("productForm").reset();
  }

  // Show the cart form when cart icon is clicked
  document.querySelector('.bi-cart3').addEventListener('click', openForm);

  // Add product to list
  document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const imgUrl = document.getElementById('imgUrl').value;
    const name = document.getElementById('productname').value;
    const price = document.getElementById('productprice').value;

    const productCard = `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${imgUrl}" class="img-fluid rounded-start" alt="Product Image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Price: ₹${price}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Append product to list
    document.getElementById('productList').insertAdjacentHTML('beforeend', productCard);

    // Close the form after submit
    closeForm();
  });

  // Initial hide of form and backdrop
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('cartForm').style.display = 'none';
    document.getElementById('backdrop').style.display = 'none';
  });

