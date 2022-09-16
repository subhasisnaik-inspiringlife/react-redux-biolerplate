import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_todo } from "../features/todo/actions/todo.actions";
import { getTodos  } from "../features/todo/selectors/todo.selector";
export const AddTodo = () => {
    const dispatch = useDispatch();
    const [latestTodo, setTodo] = useState("");
    return (
        <div>
            <input type="text" onChange={e => setTodo(e.target.value)} value={latestTodo}></input>
            <button onClick={() => { dispatch(add_todo(latestTodo)); setTodo("") }}> ADD Todo</button>
        </div>

    )
}