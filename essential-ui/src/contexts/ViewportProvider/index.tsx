import React, { useState, useEffect } from "react";
import useThrottle from "../../hooks/useThrottle";
import ViewportContext, { ViewportSize } from "../../hooks/useViewportSize";

interface ViewportProviderProps {
  children: React.ReactNode;
}

function ViewportProvider({ children }: ViewportProviderProps) {
  const [size, setSize] = useState<ViewportSize | null>(null);
  const breakPoints = {
    small: 576,
    medium: 768,
    large: 992,
  };

  function handleWindowResize() {
    const windowWidth = window.innerWidth;

    if (windowWidth < breakPoints.small) {
      setSize("small");
    } else if (windowWidth < breakPoints.medium) {
      setSize("medium");
    } else {
      setSize("large");
    }
  }

  const throttledHandleWindowResize = useThrottle(handleWindowResize, 500);

  useEffect(() => {
    handleWindowResize(); // Calculates initial viewport size

    window.addEventListener("resize", throttledHandleWindowResize);

    return () =>
      window.removeEventListener("resize", throttledHandleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ size }}>
      {children}
    </ViewportContext.Provider>
  );
}

export default ViewportProvider;
