import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header style={{ border: "1px solid black", textAlign: "center" }}>
        <nav>
          <h1>Essential UI</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="components">Components</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
