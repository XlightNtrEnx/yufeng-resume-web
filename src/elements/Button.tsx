import { styled } from "styled-components";
import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
`;

export const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};
