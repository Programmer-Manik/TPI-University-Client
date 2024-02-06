import { Outlet } from "react-router-dom";

const AdminMainLayout = () => {
  return (
    <div>
      <h2>Welcome to the AdminMainLayout page</h2>
      <Outlet/>
    </div>
  );
};

export default AdminMainLayout;
