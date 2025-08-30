import { useEffect, memo } from "react";

interface Props {
  urls: string[];
}

export const MemoImagePreloader = memo(({ urls }: Props) => {
  useEffect(() => {
    urls.forEach((src) => {
      const img = new Image();
      img.src = src; // Browser will request and cache it
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null; // No UI needed
});
