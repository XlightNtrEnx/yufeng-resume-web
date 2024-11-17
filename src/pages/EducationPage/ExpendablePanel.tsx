import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  transition: background 0.2s;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.softerWhite};
  box-shadow: 5px 2px 2px ${({ theme }) => theme.colors.softerBlack};
  &:focus {
    border-color: ${({ theme }) => theme.colors.pallete.complementary.primary};
  }
`;

interface HeaderContainerProps {
  open?: boolean;
}

const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s;
  border-radius: 10px;
  &:hover {
    background: ${({ theme, open }) =>
      open ? theme.colors.softerWhite : theme.colors.softerWhite};
  }
`;

interface ContentProps {
  open: boolean;
}

const Content = styled.div<ContentProps>`
  display: ${(props) => (props.open ? "block" : "none")};

  > * {
    border-top: 1px solid ${({ theme }) => theme.colors.softerBlack};
    padding: 10px;
  }
`;

interface Props {
  header?: React.ReactNode;
  children?: React.ReactNode;
}

export const ExpendablePanel = ({ header, children }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Container tabIndex={0}>
      <HeaderContainer onClick={() => setOpen(!open)} open={open}>
        {header}
      </HeaderContainer>
      <Content open={open}>{children}</Content>
    </Container>
  );
};
