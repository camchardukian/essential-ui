import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { Header } from "../../components/header";
import { HamburgerMenu } from "../../components/navigation/HamburgerMenu";
import { useViewportSize } from "../../hooks/useViewportSize";
export default function RootLayout() {
  const isSmallViewport = useViewportSize().size === "small";
  const [isOpen, setIsOpen] = React.useState(false);

  const HamburgerMenuUsingMenuItems = (
    <HamburgerMenu
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      menuItems={[
        { label: "Home", to: "/" },
        { label: "Components", to: "/components" },
        { label: "About", to: "/about" },
      ]}
      renderItem={({ label, to }) => (
        <Link to={to} onClick={() => setIsOpen(false)}>
          {label}
        </Link>
      )}
    />
  );
  return (
    <div>
      <Header
        leftSlot={
          isSmallViewport ? (
            HamburgerMenuUsingMenuItems
          ) : (
            <div style={{ border: "1px solid purple" }}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="components">Components</NavLink>
              <NavLink to="about">About</NavLink>
            </div>
          )
        }
        rightSlot={<div>replaceWithLogoLater</div>}
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
