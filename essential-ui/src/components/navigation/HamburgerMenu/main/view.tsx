import styled, { css } from "styled-components";
import { createPortal } from "react-dom";

const StyledHamburgerMenu = styled.nav(
  () => css`
    border: 1px solid orange;
    position: relative;
  `
);

const StyledMenuItemsContainer = styled.ul(
  () =>
    css`
      border: 1px solid orange;
      margin: 0;
      padding: 0;
      width: 100%;
    `
);

const StyledMenuItem = styled.li(
  () =>
    css`
      display: block;
      width: 100%;
    `
);

const StyledMenuItemButton = styled.button(
  () =>
    css`
      width: 100%;
      padding: 16px 0px;
    `
);

const StyledMenuModal = styled.div(
  () =>
    css`
      position: fixed;
      top: 0;
      width: 100%;
    `
);

interface MenuItem {
  label: string;
  to: string;
  onClick?: () => void;
}

type HamburgerMenuProps = {
  onToggle: () => void;
  isOpen?: boolean;
  renderItem?: (item: MenuItem) => React.ReactNode;
} & (
  | { menuItems: MenuItem[]; children?: never }
  | { children: React.ReactNode; menuItems?: never }
);

export function HamburgerMenu(props: HamburgerMenuProps): React.ReactElement {
  const { children, menuItems, isOpen, onToggle, renderItem } = props;

  const menuContent =
    children ||
    createPortal(
      isOpen && (
        <StyledMenuModal>
          {/* @TODO -- Fix the basic styling of the hamburger menu's position/margin, etc. */}
          {/* @TODO #2 -- Implement close when clicking outside of the portal */}
          {/* @TODO #3 -- Check over functionality for onClick and if we should modify TS to require either the 'onClick' or 'to' props, but not both. */}
          <div>
            <button onClick={onToggle}>CLOSE</button>
          </div>
          <StyledMenuItemsContainer>
            {menuItems!.map((item, index) => {
              if (renderItem) {
                return renderItem(item);
              }
              return (
                <StyledMenuItem key={`menu-item-${index}`}>
                  <StyledMenuItemButton onClick={item.onClick}>
                    {item.label}
                  </StyledMenuItemButton>
                </StyledMenuItem>
              );
            })}
          </StyledMenuItemsContainer>
        </StyledMenuModal>
      ),
      document.body
    );

  return (
    <StyledHamburgerMenu>
      <button onClick={onToggle}>☰</button>
      {isOpen && menuContent}
    </StyledHamburgerMenu>
  );
}
