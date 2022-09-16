import { AddTodo } from "../../components/addTodo";
import {TodoList } from "../../components/todoList";
import './todo.container.scss';
export const TodoContainer =() => {
    return (
        <div className="todo-main-container">
            <div className="add-todo">
                <AddTodo></AddTodo>
                <TodoList></TodoList>
            </div>
        </div>
    )
}