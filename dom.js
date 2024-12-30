let products = JSON.parse(localStorage.getItem('products')) || [];
let editMode = false;

function renderProducts() {
  const productTableBody = document.querySelector('#product-table tbody');
  productTableBody.innerHTML = ''; // Limpiar tabla

  products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td>$${product.price.toFixed(2)}</td>
      <td class="actions">
        <button onclick="editProduct(${index})">Editar</button>
        <button onclick="deleteProduct(${index})">Eliminar</button>
      </td>
    `;
    productTableBody.appendChild(row);
  });
}

function clearForm() {
  document.getElementById('product-id').value = '';
  document.getElementById('product-name').value = '';
  document.getElementById('product-price').value = '';
  editMode = false;
  document.getElementById('submit-btn').textContent = 'Crear Producto';
}

renderProducts();
