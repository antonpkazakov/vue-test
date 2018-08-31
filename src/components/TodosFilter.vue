<template>
    <ul class="todosFilter--container">
        <li
            class="todosFilter--filter"
            v-for="(filter, index) in filters"
            :key="filter.name"
            :class="{ 'todosFilter--filter-active': isFilterActive(filter.name) }"
            @click="onFilterClick(filter.name);"
        >
            {{ filter.name }}
        </li>
    </ul>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'TodosFilter',
    props: {
        activeFilter: String,
        filters: Array,
    },
    methods: {
        isFilterActive(filter) {
            return this.activeFilter === filter;
        },
        onFilterClick(filter) {
            this.setActiveFilter(filter);
        },
        ...mapActions({
            setActiveFilter(dispatch, filter) {
                dispatch('setActiveFilter', { filter });
            },
        }),
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.todosFilter--container {
    margin: 0 20px 0 0;
    padding: 0;
}
.todosFilter--filter {
    display: inline-block;
    line-height: 20px;
    padding: 7px 12px;
    margin-right: 10px;
    border: 1px solid #e2e2e2;
    color: #8a8a8a;
    cursor: pointer;

    &.todosFilter--filter-active {
        background-color: #f0f0f0;
        border: 1px solid #b2b2b2;
        color: #5a5a5a;
    }

    &:hover {
        border: 1px solid #8a8a8a;
        color: #3a3a3a;
    }
}
</style>
