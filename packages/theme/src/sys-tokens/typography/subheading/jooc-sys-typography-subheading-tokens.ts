import {
  JoocRefTypographyFontSizeTokens,
  JoocRefTypographyFontStyleTokens,
  JoocRefTypographyFontWeightTokens,
  JoocRefTypographyLetterSpacingTokens,
  JoocRefTypographyLineHeightTokens,
} from "../../../ref-tokens/typography";
import { type JoocSysTypographySubHeadingTokensType } from "./jooc-sys-typography-subheading-tokens.types";

export const JoocSysTypographySubheadingTokens = {
  l: {
    size: JoocRefTypographyFontSizeTokens.fontSize500,
    lineHeight: JoocRefTypographyLineHeightTokens[75],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.xs,
    fontWeight: {
      extraBold: JoocRefTypographyFontWeightTokens.extraBold,
      medium: JoocRefTypographyFontWeightTokens.medium,
    },
  },
  m: {
    size: JoocRefTypographyFontSizeTokens.fontSize400,
    lineHeight: JoocRefTypographyLineHeightTokens[75],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.s,
    fontWeight: {
      extraBold: JoocRefTypographyFontWeightTokens.extraBold,
      medium: JoocRefTypographyFontWeightTokens.medium,
    },
  },
  s: {
    size: JoocRefTypographyFontSizeTokens.fontSize100,
    lineHeight: JoocRefTypographyLineHeightTokens[75],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.s,
    fontWeight: {
      extraBold: JoocRefTypographyFontWeightTokens.extraBold,
      medium: JoocRefTypographyFontWeightTokens.medium,
    },
  },
} as const satisfies JoocSysTypographySubHeadingTokensType;
