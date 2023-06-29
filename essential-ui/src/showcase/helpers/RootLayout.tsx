import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Header } from "../../components/header";
import { HamburgerMenu } from "../../components/navigation/HamburgerMenu";
import { useViewportSize } from "../../hooks/useViewportSize";
import { BASE_ROUTE } from "../../utils/constants";
export default function RootLayout() {
  const isSmallViewport = useViewportSize().size === "small";
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const HamburgerMenuUsingMenuItems = (
    <HamburgerMenu
      isOpen={isOpen}
      onToggle={handleToggleIsOpen}
      menuItems={[
        { label: "Home", to: `${BASE_ROUTE}` },
        { label: "Components", to: `${BASE_ROUTE}/components` },
        { label: "About", to: `${BASE_ROUTE}/about` },
      ]}
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
              <NavLink to={BASE_ROUTE}>Home</NavLink>
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
