var clients=new Vue({
    el: '#clients',
    data: { 
      clients: '',
    },
    methods: {
      getClients: function () {
        this.$http.get('/json/clients.json').then(function (respuesta) {
               this.clients=respuesta.body              
        })
      }
    },
    mounted() {
      this.getClients();
    }
})
