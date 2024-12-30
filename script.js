document.getElementById('product-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const productName = document.getElementById('product-name').value;
  const productPrice = parseFloat(document.getElementById('product-price').value);
  const productId = document.getElementById('product-id').value;

  if (!productName || isNaN(productPrice) || productPrice <= 0) {
    alert('Por favor, ingresa un nombre y precio válidos');
    return;
  }

  if (editMode) {
    products[productId].name = productName;
    products[productId].price = productPrice;
    editMode = false;
  } else {
    products.push({ name: productName, price: productPrice });
  }

  localStorage.setItem('products', JSON.stringify(products));
  clearForm();
  renderProducts();
});

function editProduct(index) {
  const product = products[index];
  document.getElementById('product-id').value = index;
  document.getElementById('product-name').value = product.name;
  document.getElementById('product-price').value = product.price;
  editMode = true;
  document.getElementById('submit-btn').textContent = 'Actualizar Producto';
}

function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
}
