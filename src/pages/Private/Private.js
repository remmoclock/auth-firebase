import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Outlet, Navigate } from "react-router-dom";

function Private() {
  const { currentUser } = useContext(UserContext);
  console.log("user", currentUser);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default Private;
