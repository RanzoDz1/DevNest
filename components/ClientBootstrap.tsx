"use client";

import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);
  return null;
}

function BackInterceptor() {
  useEffect(() => {
    history.pushState({ __devnest: true }, "");
    const onPopState = () => {
      if (window.scrollY > 50) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.pushState({ __devnest: true }, "");
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  return null;
}

export default function ClientBootstrap() {
  return (
    <>
      <ScrollToTop />
      <BackInterceptor />
    </>
  );
}
