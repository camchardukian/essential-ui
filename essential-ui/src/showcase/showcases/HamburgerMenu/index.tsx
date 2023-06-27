import React from "react";
import { HamburgerMenu } from "../../../components/navigation/HamburgerMenu";
import { BASE_ROUTE } from "../../../utils/constants";
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
          { label: "Home", to: `${BASE_ROUTE}` },
          { label: "Components", to: `${BASE_ROUTE}/components` },
          { label: "About", to: `${BASE_ROUTE}/about` },
        ]}
      />
    </div>
  );
}

export default HamburgerMenuShowcase;
