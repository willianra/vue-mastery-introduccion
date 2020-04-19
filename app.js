Vue.component('detalleProducto',{
  props: {
    detalles: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul  style="border-color:green; border-style:dotted ;">           
      <li v-for="detalle in detalles">
        {{detalle}}
      </li>
    </ul>
  `
})
Vue.component('producto', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `<div  class="row">
    <div> </div>
    <div class="row justify-content-md-center" >
      <div  class="product-image">
        <img  style="width: 400px;"   v-bind:src="imagen" alt="">
      </div>
    </div>
      <div class="product-info"> 
        <h1 >{{titulo}}</h1>
        <p class="btn btn-success" v-if="stock"> Disponible </p>
        <p style="background-color: rgb(79, 79, 143); color: white;" class="btn bg" v-else :class="{ sinStock: !stock }">no disponible</p>
        <p> {{estaEnVenta}}</p>
        <p> {{envio}}</p>
          <p  class="btn bg-warning" v-show="estado"> descuento 50%</p>
          <detalleProducto :detalles="detalles"></detalleProducto>
          <div  
            style="width:40px; height: 40px;margin-top: 5px;"   
            :style="{backgroundColor: item.variante_color }"
            v-for="(item,index) in variantes"
            @mouseover="actualizarProducto(index)">
          </div>

          <button  
          
          v-on:click="agregar_a_carrito"
          :disabled="!stock"
          :class="[!stock ? 'desabilitarBoton' : 'btn btn-danger']"
          >   añadir +
          </button>
          <button class="btn btn-danger" v-on:click="quitarDeCarrito"> quitar +</button>
          
      </div>
  </div>
  `,
  data(){
    return {
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
        
      ]
      
    }
  },
  methods: {
    agregar_a_carrito: function(){
      this.$emit('agregar-a-carrito')
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
    },
    envio(){
      if (this.premium) {
        return "Gratis"
      }
      return "50bs"
    }

  },
  
})
var app=new Vue({
el: '#app',
data: {
 premium: true,
 cantidad: []
},
methods: {
  actualizarCarrito(){
    this.car+=1
  }
}

})