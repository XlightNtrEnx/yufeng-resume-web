import styled from "styled-components";

import { Img, ImgProps } from "@src/common/element/Img";

export interface ImgIconProps extends ImgProps {
  $iconSize?: string;
}

export const ImgIcon = styled(Img).attrs<ImgIconProps>((props) => {
  if (!props.$iconSize) props.$iconSize = "100%";
  return props;
})`
  width: ${({ $iconSize }) => $iconSize};
  height: ${({ $iconSize }) => $iconSize};
  object-fit: contain;
`;
