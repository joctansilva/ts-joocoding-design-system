import { type JoocSysBlurTokensType } from "./jooc-sys-blur-tokens.types";

export const JoocSysBlurTokens = {
  none: "0",
  s: "4px",
  default: "8px",
  m: "12px",
  l: "16px",
  xl: "24px",
  xxl: "40px",
  xxxl: "64px",
} as const satisfies JoocSysBlurTokensType;
