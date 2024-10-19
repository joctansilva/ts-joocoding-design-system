import { type JoocSysBreakpointTokensType } from "./jooc-sys-breakpoint-tokens.types";

export const JoocSysBreakpointTokens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const satisfies JoocSysBreakpointTokensType;
