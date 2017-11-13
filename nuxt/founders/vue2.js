var data = {
  a: 1
};
var vm = new Vue({
  //Do not use arrow function over here
  //Because Arrow functions bound with parent contect
  //It now see any in really this
  el: '#app',
  data: data,
  created: function() {
    console.log('a is ' + this.a);
  },
  beforeCreate: function() {
    console.log('before created :) ');
  }

});
// REF.data as pointer

vm.$watch('a', function(newVal, oldVal) {
  console.log(newVal);
});

console.log("More Info.");
console.log('https://vuejs.org/v2/guide/instance.html');