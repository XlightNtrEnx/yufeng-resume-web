import { createContext, useEffect, useState } from "react";

// Keys are id of all fragments registered
const fragmentMap = new Map<string, boolean>();

// Observer will keep track of visibility of all registered fragments
// and call updateURLHash which will have the most visible fragment be
// in the URL hash
const visibleFragments = new Map<string, number>();
const updateURLHash = () => {
  var topVisibleElement: string | null = null;
  var highestVisibility: number = 0;

  visibleFragments.forEach((ratio, id) => {
    if (ratio > highestVisibility) {
      highestVisibility = ratio;
      topVisibleElement = id;
    }
  });

  if (topVisibleElement && window.location.hash !== `#${topVisibleElement}`) {
    window.history.replaceState(null, "", `#${topVisibleElement}`);
  }
};
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (!id) return;
      if (entry.isIntersecting) {
        visibleFragments.set(id, entry.intersectionRatio);
      } else {
        visibleFragments.delete(id);
      }
    });
    updateURLHash();
  },
  {
    threshold: [0, 0.25, 0.5, 0.75, 1], // Track multiple thresholds for better accuracy
    rootMargin: "-10% 0px -10% 0px", // Slight buffer from top and bottom
  }
);

export const RegisterFragmentContext = createContext((id: string) => {
  return () => {};
});

export const URLHashUpdateOnManualScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Keep track of all registered fragments and provide the function
  // to register fragment
  const [fragmentCount, setFragmentCount] = useState<number>(0);
  const registerFragment = (id: string) => {
    fragmentMap.set(id, true);
    setFragmentCount(fragmentCount + 1);
    return () => {
      fragmentMap.delete(id);
      setFragmentCount(fragmentCount - 1);
    };
  };

  // Makes the observer watch over all registered fragments
  useEffect(() => {
    const fragments = Array.from(fragmentMap.keys());
    for (const id of fragments) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => {
      visibleFragments.clear();
      observer.disconnect();
    };
  }, [fragmentCount]);
  return (
    <RegisterFragmentContext.Provider value={registerFragment}>
      {children}
    </RegisterFragmentContext.Provider>
  );
};
