import { Navigate, Route, Routes} from "react-router-dom";
import { routes } from "./Route.const";
import PrivateRout from "../Components/ShareComponents/privateRoute/PrivateRout";
import { useAppContext } from "../Context/AppContextProvider";

function RouteApp() {

  const { isLogin } = useAppContext();

  return (
    <div>
      <Routes>
        {routes.map((route, index) =>
          route.isprivate ? (
            <Route key={index} element={<PrivateRout />}>
              <Route path={route.path} element={route.element} />
            </Route>
          ) : (
            <Route
              key={index}
              path={route.path}
              element={
                route.path === "/login" && isLogin ? <Navigate to="/" /> : route.element
              }
            />
          )
        )}
      </Routes>
    </div>
  );
}

export default RouteApp;
