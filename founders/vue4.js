var vm = new Vue({
  el: "#app",
  data: {
    clicks: 0
  },
  methods: {
    increments: function() {
      this.clicks++;
    }
  },
  computed: {
    counters: function() {
      return this.clicks * 2;
    }
  }

});