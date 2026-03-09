import { Route, Routes } from "react-router";
import { Layout } from "./layout/Layout";
import { routes } from "./router/router.data";

function App() {
    return (
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path === "/" ? undefined : route.path.replace("/", "")}
                index={route.path === "/"}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
    ); 
}

export default App;
