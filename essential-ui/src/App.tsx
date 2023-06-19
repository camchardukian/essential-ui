import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Routes } from "./routes";

const router = createBrowserRouter(createRoutesFromElements(Routes));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
