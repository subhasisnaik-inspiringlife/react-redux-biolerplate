import { ADD_TODO } from "../actions/todo.action.types";

const initialTodoState = {
    todos: []
}

export default function TodoReducer(state = initialTodoState, action: {type: string, payload: Object}){
    switch(action.type){
       
        case ADD_TODO: {
            const temp = state.todos as any;
            temp.push(action.payload)
            return{
                ...state,
                todo: [...temp]
            }
        }

    }
}