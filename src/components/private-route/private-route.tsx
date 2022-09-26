import { Navigate } from "react-router-dom";
import { AppRoutes, AuthStatus } from "../../consts/consts";
import { useAppSelector } from "../../hooks/hooks";
import { getAuthStatus } from "../../store/user-process/selector";

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  return authStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoutes.Main} />
  );
}

export default PrivateRoute;
