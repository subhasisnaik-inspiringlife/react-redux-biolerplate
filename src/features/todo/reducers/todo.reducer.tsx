import { ADD_TODO } from "../actions/todo.action.types";

const initialTodoState = {
    todos :["initial task"]
}

export default function TodoReducer(state = initialTodoState, action: {type: string, payload: Object}){
    switch(action.type){
        
        case ADD_TODO: {
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        }
        default:
            return state

    }
}