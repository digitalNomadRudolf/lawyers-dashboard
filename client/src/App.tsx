import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import routes from "./routesConfig/routesConfig";

const App = (): JSX.Element => {
  const isLoggedIn = useSelector((state: RootState) => {
    return state.auth.isLoggedIn;
  });
  const theme = createTheme();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element}>
              {route.children &&
                route.children.map((childRoute) => (
                  <Route
                    key={childRoute.path}
                    path={childRoute.path}
                    element={
                      childRoute.authRequired === isLoggedIn ? (
                        childRoute.element
                      ) : (
                        <Navigate
                          to={
                            childRoute.authRequired ? "/register" : "/dashboard"
                          }
                        ></Navigate>
                      )
                    }
                  ></Route>
                ))}
            </Route>
          ))}
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
