import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

type tRoute = {
   path:string;
   element:ReactNode;
}

const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
         name: "Create ",
         path: "create-student",
         element:<CreateStudent />,
       },
    ],
  },
];

//programmatically way
export const AdminRoutes = adminPaths.reduce((acc:tRoute[],item)=>{
   if(item.path && item.element){
      acc.push({
         path:item.path,
         element:item.element,
      });
   }

   if(item.children){
      item.children.forEach(child => {
         acc.push(
            {
               path:child.path,
               element:child.element,
            }
         )
      })
   }

   return acc;
},[]);


//hard code way 
// export const adminPaths = [
//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
// ];
