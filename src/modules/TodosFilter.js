import savedState from '../savedState';
import initialState from '../initialState';

const loadedState = savedState.loadState();

export default {
    state: loadedState ? loadedState.filterData : initialState.filterData,
    mutations: {
        setActiveFilter(state, { filter }) {
            // eslint-disable-next-line no-param-reassign
            state.activeFilter = filter;
        },
    },
    actions: {
        setActiveFilter({ commit }, { filter }) {
            commit('setActiveFilter', { filter });
        },
    },
};
