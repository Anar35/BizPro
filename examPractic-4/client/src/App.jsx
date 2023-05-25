import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";

const routes = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
