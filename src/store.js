import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LOCAL_STORAGE_FIELD = 'myTodoListState';

const store = new Vuex.Store({
    state: JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_FIELD)) || {
        todos: [
            { text: 'Learn Vue.js', isDone: false },
            { text: 'Conquer the Universe', isDone: false },
            { text: '...', isDone: false },
            { text: 'PROFIT!!!', isDone: false },
        ],
    },
    mutations: {
        removeTodo(state, { todoIndex }) {
            state.todos.splice(todoIndex, 1);
        },
        addTodo(state, { text }) {
            state.todos.splice(0, 0, { text });
        },
        toggleDone(state, { todoIndex, isDone }) {
            state.todos[todoIndex].isDone = isDone;
        },
    },
    actions: {
        removeTodo({ commit }, { todoIndex }) {
            commit('removeTodo', { todoIndex });
        },
        addTodo({ commit }, { text }) {
            commit('addTodo', { text });
        },
        toggleDone({ commit }, { todoIndex, isDone }) {
            commit('toggleDone', { todoIndex, isDone });
        },
    },
});

store.subscribe((mutation, state) => {
    window.localStorage.setItem(LOCAL_STORAGE_FIELD, JSON.stringify(state));
});

export default store;
