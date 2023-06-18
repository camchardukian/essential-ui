import { Outlet, NavLink } from "react-router-dom";

export default function ShowcaseLayout() {
  return (
    <div style={{ border: "1px solid green" }}>
      <nav>
        <NavLink to="data-entry/input">Input</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
