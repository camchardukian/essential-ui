import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Routes } from "./routes";
import ViewportProvider from "./contexts/ViewportProvider";

const router = createBrowserRouter(createRoutesFromElements(Routes));

function App() {
  return (
    <ViewportProvider>
      <RouterProvider router={router} />
    </ViewportProvider>
  );
}

export default App;
