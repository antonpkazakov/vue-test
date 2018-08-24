<template>
    <ul class="todoList--todos" v-if="todos.length">
        <Todo
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
        />
    </ul>
    <div class="todoList--noTodosMessage" v-else>No todos added.<br/>Feel free to add one using the input above.</div>
</template>

<script>
import Todo from './Todo.vue';

export default {
    name: 'TodoList',
    props: {
        todos: Array,
    },
    components: {
        Todo,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.todoList--todos {
}
.todoList--noTodosMessage {
    padding: 40px 0;
    text-align: center;
    font-size: 1.2em;
}
</style>
