import "./App.css";
import Users from "./views/Users";
import CardDetail from "./views/CardDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/:username",
    element: <CardDetail />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
