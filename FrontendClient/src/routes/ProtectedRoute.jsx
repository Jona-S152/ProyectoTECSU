import {Outlet, Navigate} from "react-router-dom";
import {useAuth} from "../Authentication/AuthProvider.jsx";
//verifica se o usuário está autenticado, redireciona a la página de login si no lo está
export default function ProtectedRoute() {
  const auth = useAuth();
  return auth.isAuthenticated ? <Outlet/> : <Navigate to="/"/>;
}