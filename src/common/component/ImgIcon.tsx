import styled from "styled-components";

import { Img, ImgProps } from "@src/common/element/Img";

export interface ImgIconProps extends ImgProps {}

export const StyledImg = styled(Img)`
  aspect-ratio: 1/1;
`;

export const ImgIcon = (props: ImgIconProps) => {
  return <StyledImg {...props} />;
};
