import axios from "axios";

export const todosList = () => axios.get('https://jsonplaceholder.typicode.com/todos?_limit=2').then(data => data.data)
