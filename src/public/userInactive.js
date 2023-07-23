function deleteInactiveUsers() {
    // Realizar una solicitud DELETE al servidor
    fetch('/auth/', {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message); // Mostrar mensaje de éxito o error
        // Opcional: recargar la página o actualizar la lista de usuarios
        location.reload();
      })
      .catch((error) => {
        console.error('Error al eliminar usuarios inactivos:', error);
        alert('Error al eliminar usuarios inactivos');
      });
  }