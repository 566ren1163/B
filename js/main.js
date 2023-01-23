(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [
        'Apple',
        'Grape',
        'Strawberry'
      ]
    },
    methods: {
      addItem: function() {
        this.todos.push(this.newItem);
        this.newItem = '';
      },
      deleteItem: function(index) {
         {
          this.todos.splice(index, 1);
        }
      }
    }
  });
})();