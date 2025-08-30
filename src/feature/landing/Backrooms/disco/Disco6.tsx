import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { LightningMaxwell } from "@src/feature/landing/Backrooms/cat/maxwell/LightningMaxwell";
import { MinionEthels } from "@src/feature/landing/Backrooms/cat/ethel/MinionEthels";

export const Disco6 = () => {
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const el = document.getElementById("app");
    setPortalEl(el);
  }, []);

  const [releaseMinions, setReleaseMinions] = useState(false);

  const initialY = "-100px";
  const initialX = "0";
  const [y, setY] = useState(initialY);
  const [x, setX] = useState(initialX);

  useEffect(() => {
    const interval = setInterval(() => {
      setY(Math.round(Math.random() * 200 - 100) + "%");
      setX(Math.round(Math.random() * 200 - 100) + "%");
    }, 80);

    setTimeout(() => {
      setReleaseMinions(true);
      clearInterval(interval);
      setY(initialY);
      setX(initialX);
    }, 11100);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!portalEl) return <></>;
  return createPortal(
    <>
      {releaseMinions && <MinionEthels />}
      <LightningMaxwell $transform={`translateX(${x}) translateY(${y})`} />
    </>,
    portalEl
  );
};
