import Vue from 'vue';
import Vuex from 'vuex';
import initialState from './initialState';

Vue.use(Vuex);

const LOCAL_STORAGE_FIELD = 'myTodoListState';

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

const store = new Vuex.Store({
    state: JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_FIELD)) || initialState,
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
    },
});

store.subscribe((mutation, state) => {
    window.localStorage.setItem(LOCAL_STORAGE_FIELD, JSON.stringify(state));
});

export default store;
