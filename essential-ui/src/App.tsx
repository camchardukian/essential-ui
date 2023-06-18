import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./showcase/helpers/Home";
import About from "./showcase/helpers/About";
import RootLayout from "./showcase/helpers/RootLayout";
import ShowcaseLayout from "./showcase/helpers/ShowcaseLayout";
import InputShowcase from "./showcase/showcases/input";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="components" element={<ShowcaseLayout />}>
        <Route path="data-entry">
          <Route path="input" element={<InputShowcase />} />
        </Route>
      </Route>
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
