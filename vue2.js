var data = {
  a: 1
};
var vm = new Vue({
  el: '#app',
  data: data
});
// REF.data as pointer

vm.$watch('a', function(newVal, oldVal) {
  console.log(newVal);
});