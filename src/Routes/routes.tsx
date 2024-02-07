import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import { AdminRoutes } from "./admin.routes";
import Login from "../pages/Login";
const router = createBrowserRouter([
   {
      path: '/',
      element:<App/>,
   },
   {
      path:'/admin',
      element: <App />,
      children: AdminRoutes,
   },
   {
      path:'/faculty',
      element: <App />,
      children: AdminRoutes,
   },
   {
      path:'/student',
      element: <App />,
      children: AdminRoutes,
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