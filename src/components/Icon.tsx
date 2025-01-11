import styled from "styled-components";

import { Img } from "@src/elements";

interface Props {
  size?: string;
  src?: string;
}

export const Icon = styled(Img).attrs<Props>((props) => {
  if (!props.size) props.size = "100%";
  return props;
})`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  object-fit: contain;
`;
