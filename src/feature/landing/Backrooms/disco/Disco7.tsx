import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Ethel } from "@src/feature/landing/Backrooms/cat/ethel/Ethel";
import { AscendedMaxwell } from "@src/feature/landing/Backrooms/cat/maxwell/AscendedMaxwell";

import { Overlay } from "./Disco4";
import { getRandomColor } from "@src/common/util";
import { LightningMaxwell } from "../cat/maxwell/LightningMaxwell";

export const Disco7 = () => {
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const el = document.getElementById("app");
    setPortalEl(el);
  }, []);

  // Periodically changes
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColor(getRandomColor());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Final god cat
  const [final, setFinal] = useState(false);

  // Finished
  const [finished, setFinish] = useState(false);

  const [pose, setPose] = useState(false);
  const poseRef = useRef(pose);
  const [poseBgColor, setPoseBgColor] = useState(getRandomColor());
  useEffect(() => {
    // Pose 1
    setTimeout(() => {
      poseRef.current = !poseRef.current;
      setPose(poseRef.current);
      setTimeout(() => {
        poseRef.current = !poseRef.current;
        setPose(poseRef.current);
        setPoseBgColor(getRandomColor());
      }, 350);
    }, 2925 - 120);

    // Pose 2
    setTimeout(() => {
      poseRef.current = !poseRef.current;
      setPose(poseRef.current);
      setTimeout(() => {
        poseRef.current = !poseRef.current;
        setPose(poseRef.current);
        setPoseBgColor(getRandomColor());
      }, 350);
    }, (3025 - 100) * 2);

    // Pose 3 + trigger final and finish countdown
    setTimeout(() => {
      poseRef.current = !poseRef.current;
      setPose(poseRef.current);
      setTimeout(() => {
        poseRef.current = !poseRef.current;
        setPose(poseRef.current);
        setPoseBgColor(getRandomColor());
        setFinal(true);
        setTimeout(() => {
          setFinish(true);
        }, 1600);
      }, 350);
    }, 3058 * 3);
  }, []);

  if (!portalEl) return <></>;
  if (pose)
    return (
      <>
        <Ethel />
        {createPortal(<Overlay $backgroundColor={poseBgColor} />, portalEl)}
      </>
    );
  return (
    <>
      {final ? (
        finished ? (
          <></>
        ) : (
          <>
            <LightningMaxwell $transform="translateY(-100px)" />
            {createPortal(
              <Overlay $backgroundColor={backgroundColor} />,
              portalEl
            )}
          </>
        )
      ) : (
        <>
          <AscendedMaxwell />
          {createPortal(
            <Overlay $backgroundColor={backgroundColor} />,
            portalEl
          )}
        </>
      )}
    </>
  );
};
