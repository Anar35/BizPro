import AddService from "../pages/AddService";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
