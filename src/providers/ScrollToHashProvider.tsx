import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export const ScrollToHashProvider = ({ children }: Props) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    let attempts = 0;
    const interval = 500; // ms
    const maxAttempts = 20; // Try to find within (maxAttempts*intervals)ms or give up
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

    // Try immediately first
    if (!findAndScrollToElement()) {
      intervalId = window.setInterval(findAndScrollToElement, interval);
    }

    // Handle hash changes
    const handleHashChange = () => {
      // Reset and try again with new hash
      if (intervalId) clearInterval(intervalId);
      attempts = 0;

      const newHash = window.location.hash;
      if (!newHash) return;

      if (!findAndScrollToElement()) {
        intervalId = window.setInterval(findAndScrollToElement, interval);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Clean up
    return () => {
      if (intervalId) clearInterval(intervalId);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return <>{children}</>;
};
