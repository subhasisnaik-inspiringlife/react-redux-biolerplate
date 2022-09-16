import { Routes, Route } from "react-router-dom";
import { Login } from "../../features/auth/pages/login";
import { Signup } from "../../features/auth/pages/signup";
import AuthRoutes from "../../features/auth/routes/auth.routes"
export const AuthContainer = () => {
   
    return (
    <div>From auth conatiner</div>
   
    )
//  return (
//         <Routes>
//               <Route  path="/auth/login" >
//                 <Login></Login>
//               </Route>
//         </Routes>
//       );
}