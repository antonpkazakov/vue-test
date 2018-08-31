<template>
    <draggable
        element="ul"
        v-model="todosLocal"
        @choose="sortingInProgress = true"
        @end="sortingInProgress = false"
        :options="sortOptions"
        class="todoList--todos"
        :class="{ 'todoList--todos-sortingInProgress': sortingInProgress, 'todoList--todos-draggable': isDraggable }"
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
import { filter } from '../constants';

export default {
    name: 'TodoList',
    components: {
        draggable,
        Todo,
    },
    props: {
        activeFilter: String,
        todos: Array,
    },
    data() {
        return {
            sortingInProgress: false,
        };
    },
    computed: {
        sortOptions() {
            return {
                handle: '.todoList--dragHandle',
                forceFallback: true, // to make it work in FF
                disabled: !this.isDraggable,
            };
        },
        isDraggable() {
            return this.activeFilter === filter.ALL;
        },
        todosLocal: {
            get() {
                if (this.activeFilter !== filter.ALL) {
                    // eslint-disable-next-line arrow-body-style
                    return this.todos.filter((element) => {
                        return ((this.activeFilter === filter.TODO) && !element.isDone)
                            || ((this.activeFilter === filter.DONE) && element.isDone);
                    });
                }
                return this.todos;
            },
            set(newTodos) {
                if (this.isDraggable) {
                    this.updateList(newTodos);
                }
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
