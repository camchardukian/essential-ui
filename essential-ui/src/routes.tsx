import Home from "./showcase/helpers/Home";
import About from "./showcase/helpers/About";
import NotFoundPage from "./showcase/helpers/NotFound";
import RootLayout from "./showcase/helpers/RootLayout";
import ShowcaseLayout from "./showcase/helpers/ShowcaseLayout";
import HamburgerMenuShowcase from "./showcase/showcases/HamburgerMenu";
import InputShowcase from "./showcase/showcases/Input";

import { Route } from "react-router-dom";
import { BASE_ROUTE } from "./utils/constants";
export const Routes = (
  <Route>
    <Route path={`${BASE_ROUTE}`} Component={RootLayout}>
      <Route index Component={Home} />
      <Route path="components" Component={ShowcaseLayout}>
        <Route path="data-entry">
          <Route path="input" Component={InputShowcase} />
        </Route>
        <Route path="navigation">
          <Route path="hamburger-menu" Component={HamburgerMenuShowcase} />
        </Route>
      </Route>
      <Route path="about" Component={About} />
    </Route>
    <Route path="*" Component={NotFoundPage} />
  </Route>
);
