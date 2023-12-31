import axios from "axios";

const baseUrl = 'http://localhost:3001';
const todosURL = baseUrl + '/todos';
 
export const getTodos = () => {
    return axios.get(todosURL).then(res => res.data);
}

export const addTodo = (description) => {
    const todo = {
        description: description,
        isDone: false
    }
    return axios.get(todosURL);
}
