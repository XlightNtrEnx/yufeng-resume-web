import styled from "styled-components";

import { Span } from "@src/common/element/text";
import { FlexColumn } from "@src/common/layout/flex";
import { DownloadLinkWithIcon } from "@src/common/component/DownloadLinkWithIcon";

const Container = styled(FlexColumn)``;

const StyledSpan = styled(Span)`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

export interface OpencertProps {
  hrefs: string[];
}

export const Opencert = ({ hrefs }: OpencertProps) => {
  return (
    <Container>
      <StyledSpan>Opencerts</StyledSpan>
      {hrefs.map((href, index) => {
        const split = href.split("/");
        const name = split[split.length - 1];
        return (
          <DownloadLinkWithIcon key={index} href={href}>
            <Span>{name} </Span>
          </DownloadLinkWithIcon>
        );
      })}
    </Container>
  );
};
