"use client";
import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const item = window?.localStorage.getItem(key);
    if (item === null) {
      return initialValue;
    } else {
      return JSON.parse(item) as T;
    }
  });

  useEffect(() => {
    if (storedValue === undefined) {
      window.localStorage.removeItem(key);
    } else {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue]);

  return { storedValue, setStoredValue };
}
