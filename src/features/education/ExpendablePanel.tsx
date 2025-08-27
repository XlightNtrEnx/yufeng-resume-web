import styled from "styled-components";
import { useState } from "react";

import { H2 } from "@src/common/elements/text";
import { FlexColumn } from "@src/common/layouts/flex";
import { AnimationProps } from "@src/common/animations";

const Container = styled(FlexColumn)<Partial<AnimationProps>>`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.softerBackgroundColor};
  box-shadow: 5px 2px 2px ${({ theme }) => theme.colors.softerBlack};

  &:focus {
    border-color: ${({ theme }) => theme.colors.pallete.complementary.primary};
  }

  ${({ $animation: animation }) => (animation ? animation() : undefined)}
`;

interface HeaderContainerProps {
  open?: boolean;
}

const HeaderContainer = styled(H2)<HeaderContainerProps>`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background: ${({ theme, open }) =>
      open ? theme.colors.softerWhite : theme.colors.softerWhite};
  }
  padding: 30px;
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

interface ExpendablePanelProps extends Partial<AnimationProps> {
  headerString?: string;
  children?: React.ReactNode;
}

export const ExpendablePanel = ({
  headerString,
  children,
  $animation: animation,
}: ExpendablePanelProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Container tabIndex={0} $animation={animation}>
      <HeaderContainer onClick={() => setOpen(!open)} open={open}>
        {headerString}
      </HeaderContainer>
      <Content open={open}>{children}</Content>
    </Container>
  );
};
