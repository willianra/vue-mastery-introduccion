var app=new Vue({
el: '#app',
data: {
  enVenta: true,
  marca: 'Adidas',
  producto: 'Medias',
  varianteSeleccionado: 0,
  detalles: ["80% de lana","20% de poliester","masculino"],
  variantes:[
    {
      variante_id: "1",
      variante_color: "green",
      variante_imagen: './assets/medias.jpg',
      varianteCantidad: 19
    },
    {
      variante_id: "2",
      variante_color: "rgb(79, 79, 143)",
      variante_imagen: './assets/medias_azules.jpg',
      varianteCantidad: 0
    },
    
  ],
  cantidad: 0
},
methods: {
    agregar_a_carrito: function(){
      this.cantidad+=1;
    },
    quitarDeCarrito: function(){
      this.cantidad-=1;
    },
    actualizarProducto: function(index){
      this.varianteSeleccionado = index 
      // console.log(index)
    }
  },
  computed: {
    titulo(){
      return this.producto+ ' '+ this.marca
    },
    imagen(){
      return this.variantes[this.varianteSeleccionado].variante_imagen
    },
    stock(){
      return this.variantes[this.varianteSeleccionado].varianteCantidad
    },
    estaEnVenta(){
      if (this.enVenta) {
        return this.producto + ' '+ this.marca + ' estan en venta'
      }else{
        return this.producto + ' '+ this.marca + ' no estan en venta'
      }
    }

  },
})