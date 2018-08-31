const LOCAL_STORAGE_FIELD = 'myTodoListState';

function loadState() {
    return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_FIELD));
}
function saveState(state) {
    window.localStorage.setItem(LOCAL_STORAGE_FIELD, JSON.stringify(state));
}

export default {
    loadState,
    saveState,
};
