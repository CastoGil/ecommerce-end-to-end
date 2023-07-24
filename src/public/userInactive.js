// Definir la función deleteInactiveUsers en el alcance global
function deleteInactiveUsers() {
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

document.addEventListener('DOMContentLoaded', () => {
  const inactiveUsersSection = document.querySelector('#inactiveUsersSection');
  const getInactiveBtn = document.getElementById('getInactiveBtn');

  getInactiveBtn.addEventListener('click', () => {
    fetch('/auth/inactive')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const inactiveUsers = data.inactiveUsers;
        console.log("hola"+inactiveUsersSection)
        if (inactiveUsers.length > 0) {
          let html = '<h2>Usuarios inactivos</h2><ul>';
          inactiveUsers.forEach((user) => {
            html += `<li><strong>Nombre:</strong> ${user.first_name}, <strong>Email:</strong> ${user.email}, <strong>Tipo de cuenta:</strong> ${user.role}</li>`;
          });
          html += '</ul>';
          inactiveUsersSection.innerHTML = html;
          // Mostrar el botón de eliminar usuarios inactivos cuando haya usuarios inactivos
          const deleteInactiveBtn = document.getElementById('deleteInactiveBtn');
          console.log(deleteInactiveBtn);
          deleteInactiveBtn.style.display = 'block';
        } else {
          inactiveUsersSection.innerHTML = '<p>No hay usuarios inactivos.</p>';
          // Ocultar el botón de eliminar usuarios inactivos cuando no haya usuarios inactivos
          const deleteInactiveBtn = document.getElementById('deleteInactiveBtn');
          deleteInactiveBtn.style.display = 'none';
        }
      })
      .catch((error) => {
        console.error('Error al obtener usuarios inactivos:', error);
      });
  });
});
