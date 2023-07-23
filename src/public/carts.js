const cartContainer = document.getElementById('cart-container');
const cartId = cartContainer.getAttribute('data-cart-id');
const deleteButtons = document.querySelectorAll('.delete-product');
const checkoutButton = document.getElementById('checkout');


deleteButtons.forEach((button) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    
    const productId = button.getAttribute('data-id');
    

    try {
      const response = await fetch(`/api/carts/${cartId}/products/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Actualizar la página o realizar cualquier otra acción después de eliminar el producto
        location.reload();
      } else {
        throw new Error('Hubo un error al eliminar el producto del carrito.');
      }
    } catch (error) {
      alert(error.message);
    }
  });
});


checkoutButton.addEventListener('click', async () => {
  try {
    const cartProducts = Array.from(document.querySelectorAll('.products')).map(productRow => {
      const title = productRow.querySelector('td:nth-child(1)').textContent;
      const description = productRow.querySelector('td:nth-child(2)').textContent;
      const price = parseFloat(productRow.querySelector('td:nth-child(3)').textContent.replace('$', ''));
      const quantity = parseInt(productRow.querySelector('td:nth-child(4)').textContent);
      return { title, description, price, quantity };
    });

    const res = await fetch('/api/payments/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartId, cartProducts }),
    });

    const data = await res.json();
    console.log(data)
    window.location.href = data.url;
  } catch (error) {
    console.error(error)
    alert('Hubo un error al procesar el checkout.');
  }
});

