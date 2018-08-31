import Vue from 'vue';
import Vuex from 'vuex';
import initialState from './initialState';
import savedState from './savedState';
import TodosFilter from './modules/TodosFilter';
import TodosList from './modules/TodosList';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        filterData: TodosFilter,
        listData: TodosList,
    },
});

store.subscribe((mutation, state) => {
    savedState.saveState(state);
});

export default store;
