import Layout from "../layout/Layout";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

export interface RouteConfig {
  path: string;
  element: JSX.Element;
  children?: RouteConfig[];
  authRequired: boolean;
}

const routes: RouteConfig[] = [
  {
    path: "/register",
    element: <RegisterPage />,
    authRequired: false,
  },
  {
    path: "/login",
    element: <LoginPage />,
    authRequired: false,
  },
  {
    path: "/",
    element: <Layout />,
    authRequired: true,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
        authRequired: true,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        authRequired: true,
      },
    ],
  },
];

export default routes;
