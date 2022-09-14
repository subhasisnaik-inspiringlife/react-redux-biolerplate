import { ADD_TODO } from "./todo.action.types";

export const add_todo = (newTodo: string) => ({
    type: ADD_TODO,
    payload: newTodo
});

