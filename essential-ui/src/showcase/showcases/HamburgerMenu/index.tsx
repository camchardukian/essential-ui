import React from "react";
import { HamburgerMenu } from "../../../components/navigation/HamburgerMenu";
import { Link } from "react-router-dom";

function HamburgerMenuShowcase() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <h2>I am the Hamburger Menu showcase</h2>
      <p>See an example of the Hamburger Menu below</p>
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
    </div>
  );
}

export default HamburgerMenuShowcase;
