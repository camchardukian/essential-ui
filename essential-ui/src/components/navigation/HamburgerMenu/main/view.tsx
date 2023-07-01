import styled, { css } from "styled-components";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useRef, useEffect, useCallback } from "react";

const StyledHamburgerMenu = styled.nav(
  () => css`
    position: relative;
  `
);

const StyledMenuItemsContainer = styled.ul(
  () =>
    css`
      margin-top: 32px;
      padding-left: 0;
      width: 100%;
      background-color: white;
    `
);

const StyledMenuItem = styled.li(
  () =>
    css`
      display: block;
      width: 100%;
      border: 1px solid black;
    `
);

const StyledMenuLink = styled(Link)(
  () =>
    css`
      width: 100%;
      display: inline-block;
      padding: 16px 0px;
      text-decoration: none;
      text-align: center;
    `
);

const StyledCloseButton = styled.button(
  () =>
    css`
      float: right;
    `
);

const StyledMenuModal = styled.div(
  () =>
    css`
      position: fixed;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background-color: white;
      transition: left 1s ease-in-out;

      &.open {
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
      }
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
  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onToggle();
  };

  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onToggle();
    }
  };

  const menuRef = useRef<HTMLUListElement>(null);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      const target = event.target as Node;

      if (menuRef.current && !menuRef.current.contains(target)) {
        onToggle();
      }
    },
    [onToggle]
  );

  const handleKeyDown = <T extends HTMLElement>(
    event: React.KeyboardEvent<T>,
    index: number
  ) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      let newIndex = event.key === "ArrowDown" ? index + 1 : index - 1;
      const menuItemsCount = menuItems!.length;
      newIndex =
        newIndex >= menuItemsCount
          ? 0
          : newIndex === -1
          ? menuItemsCount - 1
          : newIndex;
      document
        .getElementById(`hamburger-menu-item-content-${newIndex}`)!
        .focus();
    } else if (event.key === "Enter") {
      event.preventDefault();
      const currentItem = menuItems![index];
      console.log("currentItem", currentItem);
      if (currentItem.to) {
        window.location.href = currentItem.to;
      } else {
        currentItem.onClick ? currentItem.onClick() : onToggle();
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [handleOutsideClick, onToggle, isOpen]);

  const menuContent =
    children ||
    createPortal(
      isOpen && (
        <StyledMenuModal
          className={isOpen ? "open" : ""}
          id="hamburger-menu-modal"
          aria-hidden={!isOpen}
          aria-modal="true"
        >
          <StyledCloseButton
            onClick={handleToggle}
            aria-controls="hamburger-menu-modal"
            aria-label="Close Menu"
            aria-expanded={isOpen}
          >
            CLOSE
          </StyledCloseButton>
          <StyledMenuItemsContainer ref={menuRef}>
            {menuItems!.map((item, index) => {
              if (renderItem) {
                return renderItem(item);
              }
              return (
                <StyledMenuItem key={`menu-item-${index}`}>
                  <StyledMenuLink
                    id={`hamburger-menu-item-content-${index}`}
                    to={item.to}
                    onClick={item.onClick || onToggle}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {item.label}
                  </StyledMenuLink>
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
      <button onClick={handleToggle} aria-label="hamburger menu toggle">
        ☰
      </button>
      {isOpen && menuContent}
    </StyledHamburgerMenu>
  );
}
