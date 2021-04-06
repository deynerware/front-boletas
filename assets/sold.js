var sold=new Vue({
    el: '#sold',
    data: { 
      sold: '',
    },
    methods: {
      getSold: function () {
        this.$http.get('/json/sold.json').then(function (respuesta) {
               this.sold=respuesta.body              
        })
      }
    },
    mounted() {
      this.getSold();
    }
  })
