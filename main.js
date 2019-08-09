var app = new Vue({
    el: '#app',
    data: {
      product: 'Speed Bikes',
      brand: 'Bicicletas',
      selectedVariant: 0,
      image: 'https://dfp2hfrf3mn0u.cloudfront.net/269/269942_1431941_png_zoom_11.jpg',
      inStock: true,
      
      details: [
      'Grupo Shimano Sora 8v', 
      'Componentes Synchros', 
      'Pneu schwalbe lugano 700x25c'
    ],
      
    variants: [
        {
          variantId: 2234,
          variantColor: 'black',
          variantImage: 'https://dfp2hfrf3mn0u.cloudfront.net/269/269942_1431941_png_zoom_11.jpg',
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: 'gray',
          variantImage: 'https://dfp2hfrf3mn0u.cloudfront.net/269/269941_1431940_png_zoom_11.jpg',
          variantQuantity: 0
        }
      ],
    cart: 0,
    onSale: true
    
  },

  methods: {
    addToCart: function() {
        this.cart += 1
    },
    updateProduct: function(index) {  
        this.selectedVariant = index
    }
},
computed: {
    title() {
        return this.brand + ' ' + this.product  
    },
    image(){
        return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
        return this.variants[this.selectedVariant].variantQuantity
    },
    sale() {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' are on sale!'
      } 
        return  this.brand + ' ' + this.product + ' are not on sale'
    }
}
})