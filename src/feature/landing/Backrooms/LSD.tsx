import { useEffect, useRef, useState } from "react";

import { Disco4 } from "./disco/Disco4";
import { Disco5 } from "./disco/Disco5";
import { Disco6 } from "./disco/Disco6";
import { Ethel } from "./cat/ethel/Ethel";
import { Maxwell } from "./cat/maxwell/Maxwell";
import { Part } from "./part";
import { Disco7 } from "./disco/Disco7";

interface GoCrazyProps {
  part: Part;
}

export const LSD = ({ part }: GoCrazyProps) => {
  const [play, setPlay] = useState(true);
  const playRef = useRef(play);

  // Always update playRef
  useEffect(() => {
    playRef.current = play;
  }, [play]);

  // Always play and update partRef when part changes
  const partRef = useRef(part);
  useEffect(() => {
    partRef.current = part;
    setPlay(true);
  }, [part]);

  if (play)
    switch (part) {
      case Part.Idle:
        return <Ethel />;
      case Part.Part1:
        setTimeout(() => {
          setPlay(false);
        }, 50);
        return <Maxwell />;
      case Part.Part2:
        setTimeout(() => {
          setPlay(false);
        }, 1600);
        return <Maxwell />;
      case Part.Part3:
        setTimeout(() => {
          setPlay(false);
        }, 2100);
        return <Maxwell />;
      case Part.Part4:
        setTimeout(() => {
          if (partRef.current === Part.Part4) setPlay(false);
        }, 6500 + 200);
        return <Disco4 />;
      case Part.Part5:
        setTimeout(() => {
          if (partRef.current === Part.Part5) setPlay(false);
        }, 6400 + 200);
        return <Disco5 />;
      case Part.Part6:
        setTimeout(() => {
          if (partRef.current === Part.Part6) setPlay(false);
        }, 12700 + 200);
        return <Disco6 />;
      case Part.Part7:
        setTimeout(() => {
          if (partRef.current === Part.Part7) setPlay(false);
        }, 12400 + 200);
        return <Disco7 />;
      default:
        return <Ethel />;
    }
  return <Ethel />;
};
