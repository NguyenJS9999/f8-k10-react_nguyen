import { Outlet } from "react-router-dom";

const UserDashBoard = () => {
  return (
    <div className="mt-4">
      <Outlet />
    </div>
  );
};

export default UserDashBoard;
