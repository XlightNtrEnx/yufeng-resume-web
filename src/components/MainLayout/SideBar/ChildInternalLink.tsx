import styled from "styled-components";

import { FlexColumn, InternalLink } from "@src/components";
import { Span } from "@src/elements";

const Container = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
`;

const InternalLinkChildrenContainer = styled(FlexColumn)`
  height: 100%;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
`;

const StyledSpan = styled(Span)`
  font-size: 10px;
`;

interface Props {
  SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  to: string;
}

export const ChildInternalLink = ({ SVG, label, to }: Props) => {
  return (
    <Container>
      <InternalLink to={to}>
        <InternalLinkChildrenContainer>
          <SVG width="20px" height="20px" />
          <StyledSpan>{label}</StyledSpan>
        </InternalLinkChildrenContainer>
      </InternalLink>
    </Container>
  );
};
