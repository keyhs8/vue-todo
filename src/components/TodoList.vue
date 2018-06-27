<template>
  <div>
    <div v-for="todo in todos" v-bind:key="todo.id">
      <label :class="{done: todo.isDone}">
        <input type="checkbox" v-model="todo.isDone" @change="saveTodoToStorage()"> {{todo.title}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: Array
  },
  methods: {
    saveTodoToStorage() {
      this.$parent.saveTodoToStorage();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
