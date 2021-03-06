import { filter } from './constants.js';

export default {
    filterData: {
        activeFilter: filter.ALL,
        filters: [
            { name: filter.ALL },
            { name: filter.TODO },
            { name: filter.DONE },
        ],
    },
    listData: {
        todos: [
            { id: 'Uywejr3234', text: 'Learn Vue.js', isDone: false },
            { id: 'Uywe21r334', text: 'Conquer the Universe', isDone: false },
            { id: 'Uy4ejr3234', text: '...', isDone: false },
            { id: 'Uy67jr3234', text: 'PROFIT!!!', isDone: false },
        ],
    },
};
