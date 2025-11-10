"use client";

import { useEffect, useState } from "react";

/**
 * Hook untuk memantau kecocokan media query di browser.
 * Mengembalikan nilai awal yang aman saat SSR agar terhindar dari mismatch hydrasi.
 *
 * @param query Media query string, contoh: `(min-width: 640px)`
 * @param defaultState Nilai fallback saat server-render atau ketika matchMedia tidak tersedia.
 */
export function useMediaQuery(query: string, defaultState = false) {
  const getInitialState = () => {
    if (typeof window === "undefined") return defaultState;

    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(getInitialState);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent) =>
      setMatches(event.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
