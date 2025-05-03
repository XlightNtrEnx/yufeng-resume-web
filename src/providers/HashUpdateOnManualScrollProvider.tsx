import { useEffect } from "react";

export const HashUpdateOnManualScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const idElements = document.querySelectorAll("[id]");
    const visibleIdElements = new Map<string, number>();

    const updateURLHash = () => {
      var topVisibleElement: string | null = null;
      var highestVisibility: number = 0;

      visibleIdElements.forEach((ratio, id) => {
        if (ratio > highestVisibility) {
          highestVisibility = ratio;
          topVisibleElement = id;
        }
      });

      if (
        topVisibleElement &&
        window.location.hash !== `#${topVisibleElement}`
      ) {
        window.history.replaceState(null, "", `#${topVisibleElement}`);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (!id) return;
          if (entry.isIntersecting) {
            visibleIdElements.set(id, entry.intersectionRatio);
          } else {
            visibleIdElements.delete(id);
          }
        });
        updateURLHash();
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1], // Track multiple thresholds for better accuracy
        rootMargin: "-10% 0px -10% 0px", // Slight buffer from top and bottom
      }
    );

    idElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <>{children}</>;
};
