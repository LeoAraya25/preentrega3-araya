document.addEventListener('DOMContentLoaded', () => {
  const calcularBtn = document.getElementById('calculateBtn');
  calcularBtn.addEventListener('click', manejarCalcular);

  const finalizarBtn = document.getElementById('checkoutBtn');
  finalizarBtn.addEventListener('click', manejarFinalizarCompra);
});

function manejarCalcular() {
  const tamanoContenedor = parseInt(document.getElementById('containerSize').value);
  const destino = document.getElementById('destination').value;
  const cantidadContenedores = parseInt(document.getElementById('cantidadContenedores').value);

  const costoTotal = calcularCostoTotal(tamanoContenedor, destino);
  const costoTotalConCantidad = costoTotal * cantidadContenedores;

  pedido.agregarItem(destino, tamanoContenedor, cantidadContenedores, costoTotalConCantidad);

  actualizarCarrito();
  mostrarPrecioTotal(); 
}

function mostrarPrecioTotal() {
  const totalCostElement = document.getElementById('totalCost');
  const costoTotal = pedido.obtenerCostoTotal();
  totalCostElement.textContent = costoTotal;
}
document.addEventListener('DOMContentLoaded', () => {
  const calcularBtn = document.getElementById('calculateBtn');
  calcularBtn.addEventListener('click', manejarCalcular);

  const finalizarBtn = document.getElementById('checkoutBtn');
  finalizarBtn.addEventListener('click', manejarFinalizarCompra);
});

function manejarCalcular() {
  const tamanoContenedor = parseInt(document.getElementById('containerSize').value);
  const destino = document.getElementById('destination').value;
  const cantidadContenedores = parseInt(document.getElementById('cantidadContenedores').value);

  const costoTotal = calcularCostoTotal(tamanoContenedor, destino);
  const costoTotalConCantidad = costoTotal * cantidadContenedores;

  pedido.agregarItem(destino, tamanoContenedor, cantidadContenedores, costoTotalConCantidad);

  actualizarCarrito();
}


//function manejarFinalizarCompra() {
//  if (pedido.items.length === 0) {
//    alert('Su operación se encuentra incompleta. Agregue elementos antes de finalizar su operación.');
//  } else {
//    alert('Su operación ya se encuentra en proceso. En breve recibirá un correo con indicaciones administrativas para dar curso al pago.');
//    pedido.limpiar();
//    actualizarCarrito();
//  }
// }

function actualizarCarrito() {
  const carritoElemento = document.getElementById('cartItems');
  carritoElemento.innerHTML = '';

  let subtotal = 0;

  pedido.items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `Destino: ${item.destino}, Contenedor: ${item.tamanoContenedor} pies, Costo: U$S${item.costoTotal}`;
    carritoElemento.appendChild(listItem);

    subtotal += item.costoTotal;
  });

  const subtotalElemento = document.createElement('li');
  subtotalElemento.textContent = `Subtotal: U$S${subtotal}`;
  carritoElemento.appendChild(subtotalElemento);

  const totalCostoElemento = document.getElementById('totalCost');
  totalCostoElemento.textContent = pedido.obtenerCostoTotal();
}

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

