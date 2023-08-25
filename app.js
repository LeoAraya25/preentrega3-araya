// Función para agregar una operación al carrito
function agregarOperacion() {
  const tipoContenedor = parseInt(document.getElementById('tipoContenedor').value, 10);
  const cantidad = parseInt(document.getElementById('cantidad').value, 10);
  const paisDestino = document.getElementById('paisDestino').value;

  const order = new Order(tipoContenedor, cantidad, paisDestino);
  const precioTotal = order.calcularPrecio();

  const operacion = {
    tipoContenedor,
    cantidad,
    paisDestino,
    precioTotal
  };

  cartItems.push(operacion);

  Swal.fire({
    icon: 'success',
    title: 'Operación agregada al carrito',
    text: `Se agregó una operación con ${cantidad} contenedor(es) de tipo ${tipoContenedor} a ${paisDestino}. Precio total: U$S${precioTotal}`,
    confirmButtonText: 'OK'
  });

  actualizarCarritoUI();
}

// Función para vaciar el carrito
function vaciarCarrito() {
  cartItems.length = 0; // Vaciar el array
  actualizarCarritoUI(); // Actualizar la interfaz de usuario
}

// Función para actualizar el carrito en el UI
function actualizarCarritoUI() {
  const cartItemsList = document.getElementById('cartItems');
  cartItemsList.innerHTML = '';

  let totalCost = 0;

  cartItems.forEach((operacion, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Contenedor: ${operacion.tipoContenedor} - Destino: ${operacion.paisDestino} - Cantidad: ${operacion.cantidad}`;
    cartItemsList.appendChild(listItem);

    totalCost += operacion.precioTotal;
  });

  const totalCostSpan = document.getElementById('totalCost');
  totalCostSpan.textContent = totalCost.toFixed(2);
}

// Event listener para el botón "Agregar a la operación"
const calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', agregarOperacion);

// Event listener para el botón "Vaciar Carrito"
const clearCartBtn = document.getElementById('clearCartBtn');
clearCartBtn.addEventListener('click', () => {
  Swal.fire({
    icon: 'warning',
    title: '¿Estás seguro de vaciar el carrito?',
    showCancelButton: true,
    confirmButtonText: 'Sí, vaciar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      vaciarCarrito();
      Swal.fire({
        icon: 'success',
        title: 'Carrito vaciado',
        text: 'El carrito se ha vaciado exitosamente',
        confirmButtonText: 'OK'
      });
    }
  });
});
