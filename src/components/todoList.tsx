import { useSelector } from "react-redux";
import { getTodos } from "../features/todo/selectors/todo.selector";
import { Todo } from "./todo";
export const TodoList = () => {
    const todos = useSelector(getTodos) as Array<string>;
    return (
        <div className="todo-list">
        <ul>
          {todos.map((todo: string, index: number) => (
            <li>
            <Todo key={index+1} todo={todo}></Todo>
            </li>
        ))}
        </ul>
        </div>
    );
}