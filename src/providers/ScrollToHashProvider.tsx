import { useAtomValue } from "jotai";
import { useEffect } from "react";

import { scrollToHashAtom } from "@src/atoms";

interface Props {
  children: React.ReactNode;
}

export const ScrollToHashProvider = ({ children }: Props) => {
  const scrollToHash = useAtomValue(scrollToHashAtom);

  // Try to scroll to hash upon page load
  // Adds a listener that will attempt to scroll to hash when hash changes
  // if scrollToHash is true
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
        // Element found, scroll to it
        element.scrollIntoView({ behavior: "smooth" });
        // Stop checking
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
    // If not found, start polling every 100ms
    if (scrollToHash && !findAndScrollToElement()) {
      intervalId = window.setInterval(
        findAndScrollToElement,
        attemptIntervalMS
      );
    }

    // When hash change start a new series of attempts
    // if scrollToHash atom reflects true
    const handleHashChange = () => {
      if (!scrollToHash) return;

      // Reset previous attempt and try again with new hash
      if (intervalId) clearInterval(intervalId);
      attempts = 0;

      const newHash = window.location.hash;
      if (!newHash) return;

      if (!findAndScrollToElement()) {
        intervalId = window.setInterval(
          findAndScrollToElement,
          attemptIntervalMS
        );
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Clean up
    return () => {
      if (intervalId) clearInterval(intervalId);
      window.removeEventListener("hashchange", handleHashChange);
    };
  });

  return <>{children}</>;
};
