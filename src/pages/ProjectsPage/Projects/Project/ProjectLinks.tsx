import { styled } from "styled-components";

import GitHub from "@src/assets/icons/github512.png";
import { ReactComponent as ColabSVGIcon } from "@src/assets/svgs/icons/google-colab.svg";
import { ReactComponent as DocsSVGIcon } from "@src/assets/svgs/icons/google-docs.svg";
import { SafeNewTabLink, FlexRow, ImgIcon } from "@src/components";

const Links = styled(FlexRow)`
  gap: 0.3em;
  align-items: center;
  border-left: 3px solid ${({ theme }) => theme.negSofterBackgroundColor};
  padding-left: 0.5em;
  > a {
    &:hover {
      background-color: ${({ theme }) => theme.negSofterBackgroundColor};
    }
  }
`;

interface Props {
  gitHubURL?: string;
  colabURL?: string;
  docsURL?: string;
}

const iconSize = "1.75em";
export const ProjectLinks = ({ gitHubURL, colabURL, docsURL }: Props) => {
  return (
    <Links>
      {gitHubURL && (
        <SafeNewTabLink href={gitHubURL}>
          <ImgIcon $iconSize={iconSize} src={GitHub} />
        </SafeNewTabLink>
      )}
      {colabURL && (
        <SafeNewTabLink href={colabURL}>
          <ColabSVGIcon width={iconSize} height={iconSize} />
        </SafeNewTabLink>
      )}
      {docsURL && (
        <SafeNewTabLink href={docsURL}>
          <DocsSVGIcon width={iconSize} height={iconSize} />
        </SafeNewTabLink>
      )}
    </Links>
  );
};
