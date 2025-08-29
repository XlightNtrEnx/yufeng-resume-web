import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { FlexColumn } from "@src/common/layout/flex";
import { paths } from "@src/router/paths";

import { Img } from "@src/common/element/Img";

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

enum Part {
  Part1 = "PART1",
  Part2 = "PART2",
  Part3 = "PART3",
  Part4 = "PART4",
  Part5 = "PART5",
  Part6 = "PART6",
  Part7 = "PART7",
  Part8 = "PART8",
}

export const Backrooms = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [part, setPart] = useState<Part>(Part.Part1);
  const partRef = useRef(part);

  const [isHovered, setIsHovered] = useState(false);

  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    partRef.current = part;
  }, [part]);

  // Play whenever isHovered
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement && isHovered) {
      let audioStopTime = 0;
      let animationStopTime = 0;
      switch (part) {
        case Part.Part1:
          audioElement.currentTime = 0;
          animationStopTime = 0.05;
          audioStopTime = 2.1;
          break;
        case Part.Part2:
          animationStopTime = 3.7;
          audioStopTime = 4.9;
          break;
        case Part.Part3:
          animationStopTime = 7.0;
          audioStopTime = 7.9;
          break;
        default:
          animationStopTime = audioElement.duration;
          audioStopTime = audioElement.duration;
          break;
      }
      const checkAudioTime = () => {
        if (audioElement.currentTime >= audioStopTime) {
          audioElement.pause();
          audioElement.currentTime = audioStopTime;
        } else {
          requestAnimationFrame(checkAudioTime);
        }
      };
      const checkAnimationTime = () => {
        if (audioElement.currentTime >= animationStopTime) {
          setPlayAnimation(false);
        } else {
          requestAnimationFrame(checkAnimationTime);
        }
      };
      audioElement.play().then(() => {
        requestAnimationFrame(checkAudioTime);
        setPlayAnimation(true);
        requestAnimationFrame(checkAnimationTime);
      });
    }
  }, [part, isHovered]);

  // After audio finishes
  useEffect(() => {
    const handleEnded = () => {
      const part = partRef.current;
      switch (part) {
        case Part.Part1:
          setPart(Part.Part2);
          break;
        case Part.Part2:
          setPart(Part.Part3);
          break;
        case Part.Part3:
          setPart(Part.Part4);
          break;
        // case Part.Part4:
        //   setPart(Part.Part5);
        //   break;
        // case Part.Part5:
        //   setPart(Part.Part6);
        //   break;
        // case Part.Part6:
        //   setPart(Part.Part7);
        //   break;
        // case Part.Part7:
        //   setPart(Part.Part8);
        //   break;
        default:
          setPart(Part.Part1);
      }
    };

    const audioEl = audioRef.current;
    if (audioEl) audioEl.addEventListener("pause", handleEnded);

    return () => {
      if (audioEl) audioEl.removeEventListener("pause", handleEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledFlexColumn
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GoCrazy part={part} playAnimation={playAnimation} />
      <audio
        ref={audioRef}
        src={paths.public.landingDir.backroomsDir.oiia}
        preload="auto"
      />
    </StyledFlexColumn>
  );
};

interface GoCrazyProps {
  part: Part;
  playAnimation: boolean;
}

const GoCrazy = ({ part, playAnimation }: GoCrazyProps) => {
  if (!playAnimation)
    return <Img src={paths.public.landingDir.backroomsDir.oiiaCat} />;
  switch (part) {
    case Part.Part1:
      return <Img src={paths.public.landingDir.backroomsDir.spinningOiiaCat} />;
    case Part.Part2:
      return <Img src={paths.public.landingDir.backroomsDir.spinningOiiaCat} />;
    case Part.Part3:
      return <Img src={paths.public.landingDir.backroomsDir.spinningOiiaCat} />;
    case Part.Part4:
      return <Img src={paths.public.landingDir.backroomsDir.spinningOiiaCat} />;
    case Part.Part5:
      return <Img src={paths.public.landingDir.backroomsDir.oiiaCat} />;
    case Part.Part6:
      return <Img src={paths.public.landingDir.backroomsDir.oiiaCat} />;
    case Part.Part7:
      return <Img src={paths.public.landingDir.backroomsDir.oiiaCat} />;
    case Part.Part8:
      return <Img src={paths.public.landingDir.backroomsDir.oiiaCat} />;
    default:
      return <Img src={paths.public.landingDir.backroomsDir.spinningOiiaCat} />;
  }
};
