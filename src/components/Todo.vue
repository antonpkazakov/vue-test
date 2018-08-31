<template>
    <li class="todoList--todo" :class="{ 'todoList--todo-done': todo.isDone }">
        <input class="todoList--todoDoneMark" type="checkbox" v-model="isDoneLocal" />
        <span class="todoList--todoText todoList--dragHandle">{{ todo.text }}</span>
        <span class="todoList--removeTodoButton" @click="remove(todo.id)">
            <octicon name="x" class="todoList--removeTodoIcon"></octicon>
        </span>
    </li>
</template>

<script>
import { mapActions } from 'vuex';

import Octicon from 'vue-octicon/components/Octicon.vue';
import 'vue-octicon/icons/x';

export default {
    name: 'Todo',
    data() {
        return {
            isDoneLocal: this.todo.isDone,
        };
    },
    props: {
        todo: Object,
    },
    components: {
        Octicon,
    },
    watch: {
        isDoneLocal(newValue) {
            this.toggleDone(this.todo.id, newValue);
        },
    },
    methods: {
        ...mapActions({
            toggleDone(dispatch, todoId, isDone) {
                dispatch('toggleDone', { todoId, isDone });
            },
            remove(dispatch, todoId) {
                dispatch('removeTodo', { todoId });
            },
        }),
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.todoList--todo-done {
    &.todoList--todo-done {
        .todoList--todoText {
            text-decoration: line-through;
        }
    }
}
.todoList--todoDoneMark {
    margin-right: 8px;
}
.todoList--todos-draggable .todoList--todoText {
    cursor: grab;
}
.todoList--removeTodoIcon {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 2px;
    margin-left: 3px;
    cursor: pointer;
}
</style>
