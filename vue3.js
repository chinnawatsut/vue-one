Vue.component('directivx', {
  props: ['naming', 'age', 'address', 'infos'],
  template: "<div> {{naming}} is {{age}} years old and live in {{address}}. <br/> This is more info. <br/> {{infos}}</div>"
});

var vm = new Vue({
  el: '#app',
  data: {
    a: 3
  }
});

var vm = new Vue({
  el: "#app2",
  data: {
    anchor: "ANCHOR",
    age: 32,
    address: "ny",
    img: "https://vuejs.org/images/logo.png",
    infos: {
      phone: "88999",
      postcode: 22222
    },
    isButtonDisabled: true
  }
});