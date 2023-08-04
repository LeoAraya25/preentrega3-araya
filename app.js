function calcularPrecio() {
    const tipoContenedor = parseInt(document.getElementById('tipoContenedor').value, 10);
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);
    const paisDestino = document.getElementById('paisDestino').value;
  
    const order = new Order(tipoContenedor, cantidad, paisDestino);
    const precioTotal = order.calcularPrecio();
  
    mostrarResultado(precioTotal);
  }
  
  function calcularCostoTotal(tamanoContenedor, destino) {
    const precioContenedor = inventario.preciosContenedor[tamanoContenedor];
    const precioDestino = inventario.preciosDestino[destino];
    return precioContenedor + precioDestino;
  }
  
  function mostrarResultado(precioTotal) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El precio total es: U$S${precioTotal}`;
  }