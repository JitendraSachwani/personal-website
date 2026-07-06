"use client";

import { useEffect } from "react";

export default function Debug() {
  useEffect(() => {
    alert(`HTML class: ${document.documentElement.className}`);
    alert(`Body bg: ${getComputedStyle(document.body).backgroundColor}`);
  }, []);

  return null;
}