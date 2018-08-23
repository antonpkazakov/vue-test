<template>
  <div class="todoList--todoInputContainer">
      <input class="todoList--todoInput" type="text" @keyup.enter="onInputEnterKeyPress" />
      <button class="todoList--todoAddButton" @click="onAddButtonClick">Add</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'TodoInput',
    methods: {
        getInput() {
            return document.getElementsByClassName('todoList--todoInput')[0];
        },
        clearInput() {
            this.getInput().value = '';
        },
        onInputEnterKeyPress() {
            this.addTodo(this.getInput().value);
            this.clearInput();
        },
        onAddButtonClick() {
            this.addTodo(this.getInput().value);
            this.clearInput();
        },
        ...mapActions({
            addTodo(dispatch, text) {
                dispatch('addTodo', { text });
            },
        }),
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.todoList--todoInputContainer {
    margin-bottom: 20px;
}
.todoList--todoInput {
    width: 80%;
    height: 28px;
    line-height: 20px;
    padding: 3px 5px;
    border: 1px solid #e2e2e2;
    box-sizing: border-box;
}
.todoList--todoAddButton {
    width: 18%;
    margin-left: 2%;
    height: 28px;
    line-height: 20px;
    border: 1px solid #d0d0d0;
    background-color: #f0f0f0;
}
</style>
