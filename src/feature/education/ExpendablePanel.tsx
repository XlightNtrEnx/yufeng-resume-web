import styled from "styled-components";
import { useState } from "react";

import { H2 } from "@src/common/element/text";
import { FlexColumn } from "@src/common/layout/flex";

const Container = styled(FlexColumn)`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.softerBackgroundColor};
  box-shadow: 5px 2px 2px ${({ theme }) => theme.colors.softerBlack};

  &:focus {
    border-color: ${({ theme }) => theme.colors.pallete.complementary.primary};
  }
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

interface ExpendablePanelProps {
  headerString?: string;
  children?: React.ReactNode;
}

export const ExpendablePanel = ({
  headerString,
  children,
}: ExpendablePanelProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Container tabIndex={0}>
      <HeaderContainer onClick={() => setOpen(!open)} open={open}>
        {headerString}
      </HeaderContainer>
      <Content open={open}>{children}</Content>
    </Container>
  );
};
