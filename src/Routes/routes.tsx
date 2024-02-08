import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { adminPaths } from "./admin.routes";
import { RoutesGenerator } from "../utils/routes.Generator";
import { facultyPaths } from "./faculty.routes";
import { StudentPaths } from "./student.routes";
const router = createBrowserRouter([
   {
      path: '/',
      element:<App/>,
   },
   {
      path:'/admin',
      element: <App />,
      children: RoutesGenerator(adminPaths),
   },
   {
      path:'/faculty',
      element: <App />,
      children: RoutesGenerator(facultyPaths),
   },
   {
      path:'/student',
      element: <App />,
      children: RoutesGenerator(StudentPaths),
   },
   {
      path:'/login',
      element:<Login/>
   },
   {
      path:'/register',
      element:<Register/>
   }
]);

export default router