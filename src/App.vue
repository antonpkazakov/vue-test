<template>
    <div class="todoList">
        <h1 class="todoList--title">Todo List</h1>
        <p class="todoList--manual">
            Add a todo by typing smth in the text input and hitting Enter or the 'Add' button.<br/>
            Remove the todos by clicking the 'X' near them.<br/>
            Change the priorities by dragging the todos.
        </p>
        <TodoList :todos="todos"/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoList from './components/TodoList.vue';

export default {
    name: 'app',
    components: {
        TodoList,
    },
    computed: mapState([
        'todos',
    ]),
};
</script>

<style lang="scss">
.todoList {
    width: 600px;
    margin: 0 auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.todoList--title {
    margin: 30px 0 30px;
    text-align: center;
}
.todoList--manual {
    margin-bottom: 30px;
    text-align: center;
}
</style>
