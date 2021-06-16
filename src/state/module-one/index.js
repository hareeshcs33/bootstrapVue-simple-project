console.log('module 1 index.js loaded...');

import * as authenticationActions from './authentication/actions'
import authenticationGetters from './authentication/getters'
import authenticationMutations from './authentication/mutations'

import * as customersActions from './customers/actions'
import customersGetters from './customers/getters'
import customersMutations from './customers/mutations'

const state = {
    name: 'hareesh',
    userData: []
}

const getters = {
    ...authenticationGetters,
    ...customersGetters
}

const mutations = {
    ...authenticationMutations,
    ...customersMutations
}

const actions = {
    ...authenticationActions,
    ...customersActions
}

export default {
    state,
    getters,
    mutations,
    actions
}