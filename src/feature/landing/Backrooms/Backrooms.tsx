import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { FlexColumn } from "@src/common/layout/flex";
import { paths } from "@src/router/paths";

import { LSD } from "./LSD";
import { Part } from "./part";
import { MemoImagePreloader } from "@src/common/component/ImagePreloader";

const StyledFlexColumn = styled(FlexColumn)`
  width: 400px;
  background: white;
  height: 500px;
  justify-content: center;
  align-items: center;

  & > img {
    transform: rotateX(45deg);
    width: 250px;
  }
`;

interface Props {
  preload?: boolean;
}

export const Backrooms = ({ preload }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [part, setPart] = useState<Part>(Part.Idle);
  const partRef = useRef(part);

  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(isHovered);

  // Ensure partRef is always updated
  useEffect(() => {
    partRef.current = part;
  }, [part]);

  // Ensure isHoveredRef is always updated
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  // Utility to advance part
  const nextPart = () => {
    const part = partRef.current;
    switch (part) {
      case Part.Idle:
        setPart(Part.Part1);
        partRef.current = Part.Part1;
        break;
      case Part.Part1:
        setPart(Part.Part2);
        partRef.current = Part.Part2;
        break;
      case Part.Part2:
        setPart(Part.Part3);
        partRef.current = Part.Part3;
        break;
      case Part.Part3:
        setPart(Part.Part4);
        partRef.current = Part.Part4;
        break;
      case Part.Part4:
        setPart(Part.Part5);
        partRef.current = Part.Part5;
        break;
      case Part.Part5:
        setPart(Part.Part6);
        partRef.current = Part.Part6;
        break;
      case Part.Part6:
        setPart(Part.Part7);
        partRef.current = Part.Part7;
        break;
      default:
        setPart(Part.Idle);
        partRef.current = Part.Part8;
    }
  };

  // Utility to get when to stop for each part
  const getAudioStopTime = () => {
    const part = partRef.current;
    switch (part) {
      case Part.Idle:
        return 0;
      case Part.Part1:
        return 2.1;
      case Part.Part2:
        return 4.9;
      case Part.Part3:
        return 7.9;
      case Part.Part4:
        return 14.4;
      case Part.Part5:
        return 20.8;
      case Part.Part6:
        return 33.5;
      default:
        if (audioRef && audioRef.current) return audioRef.current.duration;
        return 0;
    }
  };

  // Advance whenever isHovered
  const memoizedTimeout = useCallback(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    setTimeout(() => {
      const audioStopTime = getAudioStopTime();
      if (isHoveredRef.current) {
        nextPart();
        audioEl.currentTime = audioStopTime;
        memoizedTimeout();
      } else {
        audioEl.pause();
        audioEl.currentTime = audioStopTime;
      }
    }, (getAudioStopTime() - audioEl.currentTime) * 1000);
  }, []);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (audioEl && audioEl.paused && isHovered) {
      audioEl.play().then(() => {
        nextPart();
        memoizedTimeout();
      });
    }
  }, [part, isHovered, memoizedTimeout]);

  return (
    <StyledFlexColumn
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LSD part={part} />
      <audio
        ref={audioRef}
        src={paths.public.landingDir.backroomsDir.oiia}
        preload={preload ? "auto" : "none"}
      />
      {preload && (
        <MemoImagePreloader
          urls={[
            paths.public.landingDir.backroomsDir.oiiaCat,
            paths.public.landingDir.backroomsDir.oiiaCatNoBg,
            paths.public.landingDir.backroomsDir.spinningOiiaCat,
            paths.public.landingDir.backroomsDir.spinningOiiaCatGod,
            paths.public.landingDir.backroomsDir.spinningOiiaCatNoBg,
          ]}
        />
      )}
    </StyledFlexColumn>
  );
};
