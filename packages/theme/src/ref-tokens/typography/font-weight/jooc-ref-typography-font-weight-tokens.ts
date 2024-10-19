import { type JoocRefTypographyFontWeightTokensType } from "./jooc-ref-typography-font-weight-tokens.types";

export const JoocRefTypographyFontWeightTokens = {
  light: "300",
  regular: "400",
  medium: "500",
  bold: "700",
  extraBold: "800",
  black: "900",
} as const satisfies JoocRefTypographyFontWeightTokensType;
