const socket = io();
const noteform = document.querySelector("#noteForm");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const thumbnail = document.querySelector("#thumbnail");
const code = document.querySelector("#code");
const stock = document.querySelector("#stock");
const category = document.querySelector("#category");
const table = document.getElementById("myTable");

async function postData(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud POST");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

noteform.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    title: title.value,
    price: parseInt(price.value),
    code: code.value,
    thumbnail: thumbnail.value,
    stock: parseInt(stock.value),
    category: category.value,
    description: description.value,
  };

  // Obtiene la URL de la API oculta
  const urlElement = document.getElementById("products-link");
  const url = urlElement.textContent.trim();

  try {
    const response = await postData(url, data);
    console.log(response)
    if (response) {
      alert("producto agregado")
    } else {
      alert("no puedes agregar productos")
    }
  } catch (error) {
    console.log(error);
  }
});

socket.emit("allProducts");

socket.on("producto", async (data) => {
  await attachRow(data);
});

const attachRow = async (data) => {
  const fila = document.createElement("tr");
  fila.id = data._id;
  fila.innerHTML = `<td>${data._id}</td><td>${data.title}</td> <td>${data.description}</td>
      <td>${data.price}</td><td>${data.thumbnail}</td><td>${data.code}</td><td>${data.stock}</td><td>${data.category}</td><button onclick="deleteProduct('${data._id}')" class="btn btn-danger">X</button>`;

  table.appendChild(fila);
};

socket.on("productos", async (data) => {
  table.innerHTML = `<th>ID</th><th>Title</th><th>Description</th><th>Price</th><th>Thumbnail</th><th>Code</th><th>Stock</th><th>Category</th>`;

  data.forEach(async (data) => {
    await attachRow(data);
  });
});

const deleteProduct = async (_id) => {
  await fetch(`${url}/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
