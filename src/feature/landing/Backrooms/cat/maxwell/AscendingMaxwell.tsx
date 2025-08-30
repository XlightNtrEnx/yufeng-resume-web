import { memo, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

import { FlexColumn } from "@src/common/layout/flex";
import { paths } from "@src/router/paths";
import { Img } from "@src/common/element/Img";
import { mindFuck, mindFuckReverse, moveUp } from "@src/common/animation";

import { Maxwell } from "./Maxwell";

export const AscendingMaxwell = styled(Maxwell)`
  ${moveUp()};
`;
