import { useCallback, useEffect, useRef, useState } from "react";

const useScrollRestoration = () => {
  const element = useRef(document.getElementById("scrollable-content"));

  const [scrollPosition, setScrollPosition] = useState(0);

  const saveScrollPosition = useCallback(() => {
    localStorage.setItem("scrollPosition", `${scrollPosition}`);
  }, [scrollPosition]);

  const loadScrollPosition = () => {
    const storedScrollPosition = localStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      element.current?.scrollTo(0, parseInt(storedScrollPosition, 10));
    }
  };

  const handleScroll = () => {
    setScrollPosition(element.current?.scrollTop || 0);
  };

  useEffect(() => {
    element.current?.addEventListener("scroll", handleScroll);
    return () => {
      element.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Load scroll position from local storage when the component mounts
  useEffect(() => {
    loadScrollPosition();
  }, []);

  // Save scroll position to local storage when it changes
  useEffect(() => {
    saveScrollPosition();
  }, [saveScrollPosition, scrollPosition]);
};

export default useScrollRestoration;
