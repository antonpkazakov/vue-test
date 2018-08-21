import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            { text: 'Learn Vue.js', done: false },
            { text: 'Conquer the Universe', done: false },
            { text: '...', done: false },
            { text: 'PROFIT!!!', done: false },
        ],
    },
    mutations: {
        removeTodo(state, { todoIndex }) {
            state.todos.splice(todoIndex, 1);
        },
    },
    actions: {
        removeTodo({ commit }, { todoIndex }) {
            commit('removeTodo', { todoIndex });
        },
    },
});
