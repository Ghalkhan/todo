import { Query } from "$/utils/design";

export type MediaQueryMode = "min" | "max";

export const breakpoints = {
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1184,
  xl: 1440,
};

export const breakpointsRem = {
  xs: "30rem",
  sm: "48rem",
  md: "64rem",
  lg: "74rem",
  xl: "90rem",
};

export function device(mode: MediaQueryMode, query: Query): string {
  return `${mode}-width: ${breakpointsRem[query]}`;
}
