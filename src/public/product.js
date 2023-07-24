// Obtener el formulario de ordenar y buscar por su ID
const orderForm = document.getElementById('order-form');
const searchForm = document.getElementById('search-form');

// Capturar la URL actual
const currentUrl = window.location.href;

// Agregar el parámetro cartId a la URL actual
const modifiedUrl = currentUrl.includes('cartId')
  ? currentUrl // Si el parámetro ya existe, mantener la URL actual sin cambios
  : `${currentUrl}&cartId={{cartId}}`; // Agregar el parámetro cartId al final de la URL

// Establecer la URL modificada como acción del formulario
orderForm.action = modifiedUrl;
searchForm.action = modifiedUrl;

const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    const productId = button.getAttribute('data-product-id');
    const cartId = button.closest('.block').getAttribute('data-cart-id');
    const form = document.querySelector(`#add-to-cart-form-${productId}`);
    const formData = new FormData(form);
    
    try {
      const response = await fetch(`/api/carts/${cartId}/products/${productId}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('El producto se agregó al carrito correctamente.');
      } else {
        alert('Tienes que iniciar sesion para agregar productos al carrito');
      }
    } catch (error) {
      console.log(error);
    }
  });
});


