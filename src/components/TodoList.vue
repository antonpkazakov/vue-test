<template>
    <ul class="todoList--todos">
        <Todo
            v-for="(todo, index) in todos"
            :key="index"
            :todo="todo"
            :index="index"
        />
    </ul>
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
</style>
