export default {
    userData(state, userdata){
        let bool = state.userData.some(user => user.first_name === userdata.first_name);
        if(!bool){
            state.userData.push({...userdata});
        }
        state = {
            userData: [...state.userData]
        };
    },
    setTodosList(state, todosLists){
        console.log('todosLists',todosLists);
        state.todosList = [...todosLists];
    }
}