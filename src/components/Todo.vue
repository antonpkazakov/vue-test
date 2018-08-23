<template>
  <li class="todoList--todo" :class="{ 'todoList--todo-done': todo.isDone }">
      <input class="todoList--todoDoneMark" type="checkbox" v-model="isDone" />
      <span class="todoList--todoText">{{ todo.text }}</span>
      <span class="todoList--removeTodoButton" @click="remove(index)">
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
            isDone: this.todo.isDone,
        };
    },
    props: {
        todo: Object,
        index: Number,
    },
    components: {
        Octicon,
    },
    watch: {
        isDone(newValue) {
            this.toggleDone(this.index, newValue);
        },
    },
    methods: {
        ...mapActions({
            toggleDone(dispatch, todoIndex, isDone) {
                dispatch('toggleDone', { todoIndex, isDone });
            },
            remove(dispatch, todoIndex) {
                dispatch('removeTodo', { todoIndex });
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
.todoList--todoText {
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
