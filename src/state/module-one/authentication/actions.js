import {
    todosList
} from '../../../api/todos'

export const userData = async ({commit}, userData) => {
    commit('userData', userData, true);
}

export const setTodosList = async ({commit}) => {
    let todosLists
    try {
        todosLists = await todosList();
        commit('setTodosList', todosLists, true);
    } catch(err) {
        console.log(err);
    }
}