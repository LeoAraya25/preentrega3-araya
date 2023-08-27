document.addEventListener("DOMContentLoaded", function () {
  const containerSizeSelect = document.getElementById("containerSize");
  const destinationSelect = document.getElementById("destination");
  const quantityInput = document.getElementById("cantidadContenedores");
  const calculateButton = document.getElementById("calculateBtn");
  const cartItemsList = document.getElementById("cartItems");
  const totalCostElement = document.getElementById("totalCost");
  const checkoutButton = document.getElementById("checkoutBtn");
  const clearCartButton = document.getElementById("clearCartBtn");

  const cart = [];

  function updateTotalCost() {
    const totalCost = cart.reduce((total, item) => total + item.cost, 0);
    totalCostElement.textContent = totalCost.toFixed(2);
  }

  function updateCartItems() {
    cartItemsList.innerHTML = "";
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.size} pies a ${item.destination} - Costo: U$S${item.cost.toFixed(2)}`;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Eliminar";
      removeButton.addEventListener("click", () => {
        cart.splice(index, 1);
        updateCartItems();
        updateTotalCost();
      });
      li.appendChild(removeButton);
      cartItemsList.appendChild(li);
    });
  }

  calculateButton.addEventListener("click", () => {
    const selectedSize = containerSizeSelect.value;
    const selectedDestination = destinationSelect.value;
    const quantity = parseInt(quantityInput.value, 10);

    let cost = 0;
    if (selectedSize === "20") {
      cost += 1000;
    } else if (selectedSize === "40") {
      cost += 2000;
    }

    if (selectedDestination === "China") {
      cost += 900;
    } else if (selectedDestination === "Estados Unidos") {
      cost += 800;
    } else if (selectedDestination === "Reino Unido") {
      cost += 900;
    } else if (selectedDestination === "España") {
      cost += 700;
    } else if (selectedDestination === "Chile") {
      cost += 400;
    } else if (selectedDestination === "Brasil") {
      cost += 450;
    }

    const item = {
      size: selectedSize,
      destination: selectedDestination,
      cost: cost * quantity,
    };

    cart.push(item);
    updateCartItems();
    updateTotalCost();

    Swal.fire({
      icon: 'success',
      title: 'Agregado al carrito',
      text: `Se agregaron ${quantity} contenedor(es) de ${selectedSize} pies a ${selectedDestination}.`
    });
  });

  clearCartButton.addEventListener("click", () => {
    cart.length = 0;
    updateCartItems();
    updateTotalCost();
  });

  checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Carrito vacío',
        text: 'Agrega elementos al carrito antes de finalizar la operación.',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Operación finalizada',
        text: `Se ha finalizado la operación con un costo total de U$S${totalCostElement.textContent}.`,
      }).then(() => {
        cart.length = 0;
        updateCartItems();
        updateTotalCost();
      });
    }
  });

  function cargarUsuarios() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        console.log("Usuarios cargados:", data);
      })
      .catch(error => {
        console.error("Error al cargar usuarios:", error);
      });
  }

  const cargarUsuariosBtn = document.getElementById("cargarUsuariosBtn");
  cargarUsuariosBtn.addEventListener("click", cargarUsuarios);

  function cargarDatosDesdeJSON() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        console.log("Datos desde JSON local:", data);
      })
      .catch(error => {
        console.error("Error al cargar datos desde JSON local:", error);
      });
  }

  const cargarDatosBtn = document.getElementById("cargarDatosBtn");
  cargarDatosBtn.addEventListener("click", cargarDatosDesdeJSON);
});
