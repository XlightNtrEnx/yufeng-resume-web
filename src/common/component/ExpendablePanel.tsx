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

const Content = styled.div`
  > * {
    border-top: 1px solid ${({ theme }) => theme.colors.softerBlack};
    padding: 10px;
  }
`;

interface ExpendablePanelProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
  onOpen?: () => void;
}

export const ExpendablePanel = ({
  header,
  children,
  onOpen,
}: ExpendablePanelProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Container tabIndex={0}>
      <HeaderContainer
        onClick={() => {
          if (!open) {
            setOpen(!open);
            if (onOpen) onOpen();
          } else {
            setOpen(!open);
          }
        }}
        open={open}
      >
        {header}
      </HeaderContainer>
      {open && <Content>{children}</Content>}
    </Container>
  );
};
