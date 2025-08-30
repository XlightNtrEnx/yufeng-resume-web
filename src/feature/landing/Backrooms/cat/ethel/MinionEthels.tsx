import { memo, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { Img } from "@src/common/element/Img";
import { paths } from "@src/router/paths";

const NoBgEthel = styled(Img).attrs((props) => ({
  src: paths.public.landingDir.backroomsDir.oiiaCatNoBg,
}))``;

const GhostEthel = styled(NoBgEthel)<{
  $top: string;
  $left: string;
  $visibility: string;
}>`
  position: fixed;
  width: 250px;
  height: 167px;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  visibility: ${({ $visibility }) => $visibility};
  transform: translate(-50%, -50%);
`;

const MemoGhostEthel = memo(
  (props: { $top: string; $left: string; $visibility: string }) => (
    <GhostEthel {...props} />
  )
);

export const MinionEthels = memo(() => {
  const topLeft = { top: 20, left: 20 }; // in %
  const bottomRight = { top: 80, left: 80 }; // in %

  // generate random positions within bounding box
  const totalEthels = 45;
  const randomEthels = useMemo(() => {
    return Array.from({ length: totalEthels }, () => ({
      top: topLeft.top + Math.random() * (bottomRight.top - topLeft.top),
      left: topLeft.left + Math.random() * (bottomRight.left - topLeft.left),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // state to track which ones are visible
  const [visibleStates, setVisibleStates] = useState(
    Array(totalEthels).fill(false)
  );

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleStates((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
      index++;
      if (index >= visibleStates.length) {
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {randomEthels.map((pos, i) => (
        <MemoGhostEthel
          key={i}
          $top={`${pos.top}%`}
          $left={`${pos.left}%`}
          $visibility={visibleStates[i] ? "visible" : "hidden"}
        />
      ))}
    </>
  );
});
