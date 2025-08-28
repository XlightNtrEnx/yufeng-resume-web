import { styled } from "styled-components";

import { URLIcons, URLIconsProps } from "@src/common/component/URLIcons";
import { FlexRow } from "@src/common/layout/flex";

const StyledFlexRow = styled(FlexRow)`
  gap: 0.3em;
  align-items: center;
  border-left: 3px solid ${({ theme }) => theme.negSofterBackgroundColor};
  padding-left: 0.5em;
  > a {
    &:hover {
      background-color: ${({ theme }) => theme.negSofterBackgroundColor};
    }
  }

  * {
    width: 1.75em;
    height: 1.75em;
  }
`;

export const Links = (props: URLIconsProps) => {
  return (
    <StyledFlexRow>
      <URLIcons {...props} />
    </StyledFlexRow>
  );
};
