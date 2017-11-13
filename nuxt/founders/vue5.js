var vm = new Vue({
  el: "#app",
  data: {
    first: "makrov",
    last: "puventin",
    isActive: true
  },
  computed: {
    fullname: {
      get: function() {
        return this.first + " " + this.last;

      },
      set: function(val) {
        var names = val.split(' ');
        this.first = names[0];
        this.last = names[names.length - 1];
      }
    }
  }
});

// vm.fullname = 'John Wane';