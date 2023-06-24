import styled, { css } from "styled-components";

const StyledHeader = styled.header(
  () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f0f0f0;
  `
);

interface HeaderProps {
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export function Header(props: HeaderProps): React.ReactElement {
  const { leftSlot, rightSlot } = props;
  return (
    <StyledHeader>
      {leftSlot} {rightSlot}
    </StyledHeader>
  );
}
