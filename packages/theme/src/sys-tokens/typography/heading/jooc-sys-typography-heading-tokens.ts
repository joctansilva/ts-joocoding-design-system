import {
  JoocRefTypographyFontSizeTokens,
  JoocRefTypographyFontStyleTokens,
  JoocRefTypographyFontWeightTokens,
  JoocRefTypographyLetterSpacingTokens,
  JoocRefTypographyLineHeightTokens,
} from "../../../ref-tokens/typography";
import { type JoocSysTypographyHeadingTokensType } from "./jooc-sys-typography-heading-tokens.types";

export const JoocSysTypographyHeadingTokens = {
  l: {
    size: JoocRefTypographyFontSizeTokens.fontSize700,
    lineHeight: JoocRefTypographyLineHeightTokens[50],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.xs,
    fontWeight: {
      bold: JoocRefTypographyFontWeightTokens.bold,
    },
  },
  m: {
    size: JoocRefTypographyFontSizeTokens.fontSize500,
    lineHeight: JoocRefTypographyLineHeightTokens[50],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.xs,
    fontWeight: {
      bold: JoocRefTypographyFontWeightTokens.bold,
    },
  },
  s: {
    size: JoocRefTypographyFontSizeTokens.fontSize200,
    lineHeight: JoocRefTypographyLineHeightTokens[50],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.xs,
    fontWeight: {
      bold: JoocRefTypographyFontWeightTokens.bold,
    },
  },
  xs: {
    size: JoocRefTypographyFontSizeTokens.fontSize75,
    lineHeight: JoocRefTypographyLineHeightTokens[50],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.xs,
    fontWeight: {
      bold: JoocRefTypographyFontWeightTokens.bold,
    },
  },
} as const satisfies JoocSysTypographyHeadingTokensType;
