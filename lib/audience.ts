"use client";

import { useSyncExternalStore } from "react";

export type AudienceMode = "client" | "recruiter" | "all";
const navigationEvent = "portfolio:navigate";

function modeForUrl(url: URL): AudienceMode {
  const requested = url.searchParams.get("view");
  if (requested === "all") return "all";
  if (["#services", "#studio"].includes(url.hash)) return "client";
  if (url.hash === "#dossier") return "recruiter";
  return requested === "recruiter" ? "recruiter" : "client";
}

function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener("hashchange", onChange);
  window.addEventListener(navigationEvent, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener(navigationEvent, onChange);
  };
}

export function useAudienceMode() {
  return useSyncExternalStore(subscribe, () => modeForUrl(new URL(window.location.href)), () => "client" as AudienceMode);
}

export function setAudienceMode(mode: AudienceMode) {
  const url = new URL(window.location.href);
  url.searchParams.set("view", mode);
  url.hash = "";
  window.history.pushState(null, "", url);
  window.dispatchEvent(new Event(navigationEvent));
  requestAnimationFrame(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("audience-content")?.scrollIntoView({ behavior: reduced ? "instant" : "smooth", block: "start" });
  });
}

export function navigateToSection(hash: string) {
  const url = new URL(window.location.href);
  url.hash = hash;
  url.searchParams.set("view", modeForUrl(url));
  window.history.pushState(null, "", url);
  window.dispatchEvent(new Event(navigationEvent));
}
