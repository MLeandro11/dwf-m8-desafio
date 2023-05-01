import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isAuthenticatedSelector } from "../../hooks/useUserToken";

export function ProtectedRoute() {
  const navigate = useNavigate();
  const isAuthenticated = useRecoilValue(isAuthenticatedSelector);
  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
  }, [isAuthenticated]);
  return <Outlet />;
}
