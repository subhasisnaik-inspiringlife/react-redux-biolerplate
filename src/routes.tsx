import { Route } from "react-router-dom";
import { AuthContainer } from "./containers/layoutContainer/authContainer";
import { TodoContainer } from "./containers/todoContainer/todoContainer";
// eslint-disable-next-line import/no-anonymous-default-export
export default [
    <Route path="/" element={<TodoContainer/>}></Route>,
    <Route path="/auth" element={<AuthContainer/>}></Route>
]


