"use client";

export const projectSelectionEvent = "portfolio:select-service";

export function selectServiceForPlanner(serviceId: string) {
  window.dispatchEvent(new CustomEvent<string>(projectSelectionEvent, { detail: serviceId }));
}
