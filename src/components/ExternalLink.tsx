import { styled } from "styled-components";

import { A, Span } from "@src/elements";
import { Icon } from "@src/components";
import { ReactComponent as OpenInNewTabSVGIcon } from "@src/assets/svgs/icons/open-in-new-tab.svg";

const StyledA = styled(A)`
  text-decoration: none;
  line-height: 1;
`;

interface Props {
  href: string;
  text?: string;
  src?: string;
  SVG?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconSize?: string;
}

/**
 * Link to an external website
 */
export const ExternalLink = ({ href, text, src, iconSize, SVG }: Props) => {
  iconSize = iconSize || "0.75em";
  return (
    <StyledA target="_blank" rel="noreferrer noopener" href={href}>
      {text && <Span>{text} </Span>}
      {src ? (
        <Icon src={src} size={iconSize} />
      ) : SVG ? (
        <SVG width={iconSize} height={iconSize} />
      ) : (
        <OpenInNewTabSVGIcon width={iconSize} height={iconSize} />
      )}
    </StyledA>
  );
};
