import styled from "styled-components";

import { Img } from "@src/elements";

interface Props {
  size?: string;
}

export const Icon = styled(Img).attrs<Props>((props) => {
  if (!props.size) props.size = "1rem";
  return props;
})`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  object-fit: contain;
`;
