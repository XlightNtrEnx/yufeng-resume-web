import { useAtom } from "jotai";
import { useEffect } from "react";

import { scrollToHashAtom } from "@src/common/atoms/scrollToHash";

interface Props {
  children: React.ReactNode;
}

export const ScrollToHashOnLoad = ({ children }: Props) => {
  const [scrollToHash] = useAtom(scrollToHashAtom);

  // Try to scroll to hash upon page load
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // 11 attempts with 500ms spacing gives 5s
    let attempts = 0;
    const maxAttempts = 11;
    const attemptIntervalMS = 500;
    let intervalId: number | null = null;

    const findAndScrollToElement = () => {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        if (intervalId) clearInterval(intervalId);
        return true;
      }

      attempts++;

      // Give up after maxAttempts
      if (attempts >= maxAttempts && intervalId) {
        clearInterval(intervalId);
        return false;
      }

      return false;
    };

    // Try immediately first upon app load
    // If not found, start polling every (attemptIntervalMS)ms
    if (scrollToHash && !findAndScrollToElement()) {
      intervalId = window.setInterval(
        findAndScrollToElement,
        attemptIntervalMS
      );
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  });

  return <>{children}</>;
};
