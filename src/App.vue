<template>
  <div id="app">
    <div class="container">
      <h1>{{state.msg}}</h1>

      <input type="text" placeholder="add ToDo..." v-model="state.newTodoTitle" 
          @keyup.enter="addTodo(state.newTodoTitle)" >

      <todo-list :todos="state.todos"/>

      <div class="action-links">
        <a href="">All</a> |
        <a href="">Working</a> |
        <a href="">Completed</a>
      </div>

      <button @click="deleteTodos()">完了済みを削除</button>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

var store = {
  debug: true,
  state: {
    msg: "Welcome to ToDo App with Vue.js",
    todos: JSON.parse(localStorage.getItem('todos')),
    newTodoTitle: ''
  },
  methods: {
    addTodo: function(title) {
      const newTodo = {
        id: Date.now(),
        title: title,
        isDone: false
      };

      this.state.todos.push(newTodo);
      this.state.newTodoTitle = '';
      this.saveTodoToStorage();
    },
    deleteTodos: function() {
      const deletedTodos = this.state.todos.filter(function(todo) {
        if (todo.isDone === false) return true;
      });

      this.state.todos = deletedTodos;
      this.saveTodoToStorage();
    },    
    saveTodoToStorage: function() {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
      if (this.debug) console.log('saved!');
    }
  }
}

export default {
  name: 'app',
  components: {
    TodoList
  },
  data: function() {
    return {
      state: store.state
    }
  },
  methods: store.methods
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.action-links {
  margin: 20px 0;
}
.done {
  text-decoration: line-through;
  color: darkgrey;
}
</style>
