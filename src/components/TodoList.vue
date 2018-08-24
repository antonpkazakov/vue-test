<template>
    <draggable
        element="ul"
        v-model="todosLocal"
        @choose="sortingInProgress = true"
        @end="sortingInProgress = false"
        :options="sortOptions"
        class="todoList--todos"
        :class="{ 'todoList--todos-sortingInProgress': sortingInProgress }"
        v-if="todosLocal.length"
    >
        <Todo
            v-for="todo in todosLocal"
            :key="todo.id"
            :todo="todo"
        />
    </draggable>
    <div class="todoList--noTodosMessage" v-else>No todos added.<br/>Feel free to add one using the input above.</div>
</template>

<script>
import { mapActions } from 'vuex';

import draggable from 'vuedraggable';
import Todo from './Todo.vue';

export default {
    name: 'TodoList',
    components: {
        draggable,
        Todo,
    },
    props: {
        todos: Array,
    },
    data() {
        return {
            sortOptions: {
                handle: '.todoList--dragHandle',
                forceFallback: true, // to make it work in FF
            },
            sortingInProgress: false,
        };
    },
    computed: {
        todosLocal: {
            get() {
                return this.todos;
            },
            set(newTodos) {
                this.updateList(newTodos);
            },
        },
    },
    methods: {
        ...mapActions({
            updateList(dispatch, newTodos) {
                dispatch('updateList', { newTodos });
            },
        }),
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.todoList--todos {
    &.todoList--todos-sortingInProgress {
        // These rules are needed to disable the text selection while dragging
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        & * {
            cursor: grabbing !important;
        }
    }
}
.todoList--noTodosMessage {
    padding: 40px 0;
    text-align: center;
    font-size: 1.2em;
}
</style>
