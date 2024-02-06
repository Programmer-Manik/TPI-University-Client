import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminMainLayout from "../components/layout/AdminMainLayout";

const router = createBrowserRouter([
   {
      path: '/',
      element:<App/>,
      children: [
         {
            path:'about',
            element:<About/>
         },
         {
            path:'contact',
            element:<Contact/>
         },
      ],
   },
   {
      path:'/admin',
      // element:<AdminMainLayout />,
      element: <App />,
      children:[
         {
            index: true,
            element: <AdminDashboard/>
         },
         {
            path:'dashboard',
            element: <AdminDashboard/>
         },
         {
            path:"create-student",
            element:<CreateStudent />
         }
      ]
   },
   {
      path:'/register',
      element:<Register/>
   }
]);

export default router