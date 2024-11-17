import styled from "styled-components";

import { Icon } from "@src/components";
import { A, Span } from "@src/elements";
import DownloadIcon from "@src/assets/icons/download512.png";

interface Props {
  href: string;
  text?: string;
  iconSize?: string;
  children?: React.ReactNode;
}

const StyledA = styled(A)`
  > *:last-child {
    margin-left: 0.5em;
  }
`;

/**
 * Link to download a file
 */
export const DownloadLink = ({ children, href, text, iconSize }: Props) => {
  return (
    <StyledA download href={href}>
      <Span>{text}</Span>
      <Icon
        src={DownloadIcon}
        alt="download-icon"
        size={iconSize || "0.75em"}
      />
      {children}
    </StyledA>
  );
};
