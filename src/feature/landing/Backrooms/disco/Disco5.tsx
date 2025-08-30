import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { mindFuck, mindFuckReverse } from "@src/common/animation";
import { getRandomColor } from "@src/common/util";
import { AscendedMaxwell } from "@src/feature/landing/Backrooms/cat/maxwell/AscendedMaxwell";

const Overlay5a = styled.div.attrs<{
  $backgroundColor: string;
}>((props) => ({
  style: {
    backgroundColor: props.$backgroundColor,
  },
}))`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 99;
  ${mindFuckReverse()};
`;

const Overlay5b = styled.div.attrs<{
  $backgroundColor: string;
}>((props) => ({
  style: {
    backgroundColor: props.$backgroundColor,
  },
}))`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  ${mindFuck()};
`;

export const Disco5 = () => {
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const el = document.getElementById("app");
    setPortalEl(el);
  }, []);

  const [previousColor, setPreviousColor] = useState("");
  const [color, setColor] = useState(getRandomColor());
  const colorRef = useRef(color);

  // Already sweeped on render
  const sweepsRef = useRef(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousColor(colorRef.current);
      const newColor = getRandomColor();
      setColor(newColor);
      colorRef.current = newColor;
      sweepsRef.current++;
      if (sweepsRef.current >= 4) clearInterval(interval);
    }, 1580);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!portalEl) return <></>;
  return (
    <>
      <AscendedMaxwell />
      {createPortal(
        <>
          <Overlay5a key={previousColor} $backgroundColor={previousColor} />
          <Overlay5b key={color} $backgroundColor={color} />
        </>,
        portalEl
      )}
    </>
  );
};
