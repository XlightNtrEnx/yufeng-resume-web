import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { getRandomColor } from "@src/common/util";
import { AscendingMaxwell } from "@src/feature/landing/Backrooms/cat/maxwell/AscendingMaxwell";

export const Overlay = styled.div.attrs<{ $backgroundColor: string }>(
  (props) => ({
    style: {
      backgroundColor: props.$backgroundColor,
    },
  })
)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  transition: background-color 0.1s;
`;

export const Disco4 = () => {
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const el = document.getElementById("app");
    setPortalEl(el);
  }, []);

  // Periodically changes
  const [backgroundColor, setBackgroundColor] = useState<string>(
    getRandomColor()
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColor(getRandomColor());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!portalEl) return <></>;
  return (
    <>
      <AscendingMaxwell />
      {createPortal(<Overlay $backgroundColor={backgroundColor} />, portalEl)}
    </>
  );
};
