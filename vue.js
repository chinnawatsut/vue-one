Vue.component('greeting', {
  template: '<p>Hello This is Component!</p>'
});
//Define Component before new Vue that will use component
//In element

Vue.component('todo-item', {
  props: ['todo', 'keytodo'],
  template: '<li>{{keytodo}}:{{todo.text}}</li>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: "This First" },
      { text: "This Second" },
      { text: "This Third" }
    ]
  }
  // You can put item to todos on console
  // app4.todos.push({text : "This 4"})
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: ":( TIME "
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: ""
  }
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    todos: [
      { text: "This First" },
      { text: "This Second" },
      { text: "This Third" }
    ]
  }
});