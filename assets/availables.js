var availables=new Vue({
    el: '#availables',
    data: { 
      availables: '',
    },
    methods: {
      getAvailables: function () {
        this.$http.get('/availables.json').then(function (respuesta) {
               this.availables=respuesta.body              
        })
      }
    },
    mounted() {
      this.getAvailables();
    }
  })
