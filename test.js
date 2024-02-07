const adminpaths2 = [
   {
     name: "Dashboard",
     path: "dashboard",
     element: '<AdminDashboard />',
   },
   {
     name: "User Management",
     children: [
       
       {
         name: "Create Admin",
         path: "create-admin",
         element: '<CreateAdmin /',
       },
       {
         name: "Create Faculty",
         path: "create-faculty",
         element: '<CreateFaculty />',
       },
       {
          name: "Create ",
          path: "create-student",
          element:'<CreateStudent />',
        },
     ],
   },
 ];

const NewArray = adminpaths2.reduce((acc,item)=>{
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

console.log('final result => ', NewArray );