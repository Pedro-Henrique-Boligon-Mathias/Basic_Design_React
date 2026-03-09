import Home from "../pages/Home";
import Sobre from "../pages/Sobre";

export const routes = [
  {
    path: "/",
    element: <Home />,
    label: "Home",
    nav: true
  },
  {
    path: "/sobre",
    element: <Sobre />,
    label: "Sobre",
    nav: true
  }
];