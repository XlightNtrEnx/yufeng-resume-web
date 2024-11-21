import styled from "styled-components";
import { useState } from "react";

import { FlexColumn } from "@src/components";
import { Animation } from "@src/animations";

const Container = styled(FlexColumn)<{ animation?: Animation }>`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.softerBackgroundColor};
  box-shadow: 5px 2px 2px ${({ theme }) => theme.colors.softerBlack};

  &:focus {
    border-color: ${({ theme }) => theme.colors.pallete.complementary.primary};
  }

  ${({ animation }) => (animation ? animation() : undefined)}
`;

interface HeaderContainerProps {
  open?: boolean;
}

const HeaderContainer = styled(FlexColumn)<HeaderContainerProps>`
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
  animation?: Animation;
}

export const ExpendablePanel = ({ header, children, animation }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Container tabIndex={0} animation={animation}>
      <HeaderContainer onClick={() => setOpen(!open)} open={open}>
        {header}
      </HeaderContainer>
      <Content open={open}>{children}</Content>
    </Container>
  );
};
