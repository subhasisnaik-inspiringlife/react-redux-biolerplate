import { Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
// eslint-disable-next-line import/no-anonymous-default-export
export default[
    <Route path="/auth/login" element={<Login/>}></Route>,
    <Route path="/auth/signup" element={<Signup/>}></Route>
]