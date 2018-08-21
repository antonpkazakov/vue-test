<template>
  <li class="todoList--todo">
      {{ todo.text }}
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
    props: {
        todo: Object,
        index: Number,
    },
    components: {
        Octicon,
    },
    methods: {
        ...mapActions({
            remove(dispatch, todoIndex) {
                dispatch('removeTodo', { todoIndex });
            },
        }),
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.todoList--removeTodoIcon {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 2px;
    cursor: pointer;
}
</style>
