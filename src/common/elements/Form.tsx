import { styled } from "styled-components";
import { ReactNode } from "react";

const StyledForm = styled.form``;

export interface FormProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export const Form = ({ onSubmit, children, ...props }: FormProps) => {
  return (
    <StyledForm onSubmit={onSubmit} {...props}>
      {children}
    </StyledForm>
  );
};
