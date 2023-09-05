import { Dashboard } from "@mui/icons-material";
import Layout from "../layout/Layout";
import { Navigate } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

interface RouteConfig {
  path: string;
  element: JSX.Element;
  children?: RouteConfig[];
  authRequired: boolean;
}

const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Layout />,
    authRequired: true,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
        authRequired: false,
      },
      {
        path: "login",
        element: <LoginPage />,
        authRequired: false,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        authRequired: true,
      },
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
        authRequired: false,
      },
    ],
  },
];

export default routes;
