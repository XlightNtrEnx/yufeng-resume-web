import styled from "styled-components";

import { Img, ImgProps } from "@src/elements";

export interface ImgIconProps extends ImgProps {
  iconSize?: string;
}

export const ImgIcon = styled(Img).attrs<ImgIconProps>((props) => {
  if (!props.iconSize) props.iconSize = "100%";
  return props;
})`
  width: ${({ iconSize }) => iconSize};
  height: ${({ iconSize }) => iconSize};
  object-fit: contain;
`;
