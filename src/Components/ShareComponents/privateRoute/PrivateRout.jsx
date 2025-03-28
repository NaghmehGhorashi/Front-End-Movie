import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../../../Context/AppContextProvider";

function PrivateRoute() {
  const { isLogin } = useAppContext();

  return (isLogin ? <Outlet /> : <Navigate to="/login" />)
}

export default PrivateRoute;


