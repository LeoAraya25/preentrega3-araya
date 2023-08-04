const pedido = {
    items: [],
  
    agregarItem: function(destino, tamanoContenedor, cantidadContenedores, costoTotal) {
      this.items.push({
        destino,
        tamanoContenedor,
        cantidadContenedores,
        costoTotal
      });
    },
  
    obtenerCostoTotal: function() {
      let total = 0;
      this.items.forEach(item => {
        total += item.costoTotal;
      });
      return total;
    },
  
    limpiar: function() {
      this.items = [];
    }
  };
  