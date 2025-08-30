import { useEffect } from "react";

interface Props {
  urls: string[];
}

export const ImagePreloader = ({ urls }: Props) => {
  useEffect(() => {
    urls.forEach((src) => {
      const img = new Image();
      img.src = src; // Browser will request and cache it
    });
  }, [urls]);

  return null; // No UI needed
};
