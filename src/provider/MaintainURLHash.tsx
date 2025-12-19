import { createContext, useCallback, useEffect, useState } from "react";

/**
 * Keys are id of all fragments registered.\
 * A fragment is any component that is registered to here using {@link RegisterFragmentContext}
 */
const registeredFragmentMap = new Map<string, boolean>();

/**
 * {@link observer} will keep track of visibility score of all registered fragments in this variable
 */
const visibleFragments = new Map<string, number>();

/**
 * Used by {@link observer}.\
 * This function use {@link visibleFragments} to update URL hash with the most visible fragment
 */
const updateURLHash = () => {
  var topVisibleElement: string | null = null;
  var highestVisibility: number = 0;

  visibleFragments.forEach((ratio, id) => {
    if (ratio > highestVisibility) {
      highestVisibility = ratio;
      topVisibleElement = id;
    }
  });

  if (topVisibleElement && window.location.hash !== `#${topVisibleElement}`)
    window.history.replaceState(null, "", `#${topVisibleElement}`);
};

/**
 * Observes  {@link updateURLHash}
 */
const observer = new IntersectionObserver(
  (registeredFragments) => {
    registeredFragments.forEach((fragment) => {
      const id = fragment.target.getAttribute("id");
      if (!id) return;
      if (fragment.isIntersecting) {
        visibleFragments.set(id, fragment.intersectionRatio);
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

export const sanitizeFragment = (name: string) => {
  return name.replace(/[^a-zA-Z0-9-_]/g, "");
};

/**
 * Remember to sanitize with {@link sanitizeFragment} if input is not URL friendly
 */
export const RegisterFragmentContext = createContext((id: string) => {
  return () => {};
});
export const MaintainURLHash = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Keep track of all registered fragments and provide the function
  // to register fragment
  const [fragmentCount, setFragmentCount] = useState<number>(0);
  const registerFragment = useCallback((id: string) => {
    registeredFragmentMap.set(id, true);
    setFragmentCount((f) => f + 1);
    return () => {
      registeredFragmentMap.delete(id);
      setFragmentCount((f) => f - 1);
    };
  }, []);

  // Makes the observer watch over all registered fragments
  useEffect(() => {
    const fragments = Array.from(registeredFragmentMap.keys());
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
