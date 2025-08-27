import { atom } from "jotai";

export const mobileBreakpointInPx = 480;
export const isMobileAtom = atom<boolean>(
  window.innerWidth < mobileBreakpointInPx
);
