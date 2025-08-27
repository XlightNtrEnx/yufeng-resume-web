import { styled } from "styled-components";
import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button`
  border-radius: 1em;
  border-style: none;
  background-color: ${({ theme }) =>
    theme.colors.pallete.complementary.softerPrimary};
  padding: 0.5em;
  cursor: pointer;
`;

export const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};
