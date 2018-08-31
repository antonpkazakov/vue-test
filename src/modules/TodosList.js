import Vue from 'vue';
import savedState from '../savedState';
import initialState from '../initialState';

function getTodoIndex(todos, id) {
    let todoIndex;
    todos.every((todo, index) => {
        if (todo.id === id) {
            todoIndex = index;
            return false;
        }
        return true;
    });
    return todoIndex;
}

function uniqId() {
    return Math.floor(Math.random() * Math.floor(100000000)).toString();
}

const loadedState = savedState.loadState();

export default {
    state: loadedState ? loadedState.listData : initialState.listData,
    mutations: {
        removeTodo(state, { todoId }) {
            const todoIndex = getTodoIndex(state.todos, todoId);
            state.todos.splice(todoIndex, 1);
        },
        addTodo(state, { text }) {
            const id = uniqId();
            state.todos.splice(0, 0, { id, text });
        },
        toggleDone(state, { todoId, isDone }) {
            const todoIndex = getTodoIndex(state.todos, todoId);
            const newTodo = { ...state.todos[todoIndex], isDone };
            state.todos.splice(todoIndex, 1, newTodo);
        },
        updateList(state, { newTodos }) {
            Vue.set(state, 'todos', newTodos);
        },
    },
    actions: {
        removeTodo({ commit }, { todoId }) {
            commit('removeTodo', { todoId });
        },
        addTodo({ commit }, { text }) {
            commit('addTodo', { text });
        },
        toggleDone({ commit }, { todoId, isDone }) {
            commit('toggleDone', { todoId, isDone });
        },
        updateList({ commit }, { newTodos }) {
            commit('updateList', { newTodos });
        },
    },
};
