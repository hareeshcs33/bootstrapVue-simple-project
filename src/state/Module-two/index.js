console.log('module two index.js loaded....');

import * as todosActions from './todos/actions'
import todosGetters from './todos/getters'
import todosMutations from './todos/mutations'

const state = {
    name: 'todos'
}

const getters = {
    ...todosGetters
}

const mutations = {
    ...todosMutations
}

const actions = {
    ...todosActions
}

export default {
    state,
    getters,
    mutations,
    actions
}