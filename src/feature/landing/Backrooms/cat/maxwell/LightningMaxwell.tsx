import styled from "styled-components";

import { paths } from "@src/router/paths";

import { Maxwell } from "./Maxwell";

export const LightningMaxwell = styled(Maxwell).attrs<{
  $transform: string;
}>((props) => ({
  style: {
    transform: props.$transform,
  },
  src: paths.public.landingDir.backroomsDir.spinningOiiaCatGod,
}))`
  position: fixed;
  width: 250px;
  height: 167px;
  transition: transform linear 0.08s;
`;
