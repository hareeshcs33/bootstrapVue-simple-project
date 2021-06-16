import {
    todosList
} from '../../../api/todos'

export const userData = async ({commit}, userData) => {
    commit('userData', userData, true);
}

export const setTodosList = async ({commit}) => {
    let todosLists = await todosList();
    commit('setTodosList', todosLists, true);
}