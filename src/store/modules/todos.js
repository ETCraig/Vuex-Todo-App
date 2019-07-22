import axios from 'axios';

const state = {
    todos: [
        {
            id: 1,
            title: 'Todo One'
        },
        {
            id: 2,
            title: 'Todo Two'
        },
        {
            id: 3,
            title: 'Todo Three'
        }
    ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}