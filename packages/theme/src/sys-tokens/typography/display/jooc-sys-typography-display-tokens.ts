import {
  JoocRefTypographyFontSizeTokens,
  JoocRefTypographyFontStyleTokens,
  JoocRefTypographyFontWeightTokens,
  JoocRefTypographyLetterSpacingTokens,
  JoocRefTypographyLineHeightTokens,
} from "../../../ref-tokens/typography";
import { type JoocSysTypographyDisplayTokensType } from "./jooc-sys-typography-display-tokens.types";

export const JoocSysTypographyDisplayTokens = {
  l: {
    size: JoocRefTypographyFontSizeTokens.fontSize1400,
    lineHeight: JoocRefTypographyLineHeightTokens[50],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.xs,
    fontWeight: {
      regular: JoocRefTypographyFontWeightTokens.regular,
      extraBold: JoocRefTypographyFontWeightTokens.extraBold,
    },
  },
  m: {
    size: JoocRefTypographyFontSizeTokens.fontSize1200,
    lineHeight: JoocRefTypographyLineHeightTokens[50],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.xs,
    fontWeight: {
      regular: JoocRefTypographyFontWeightTokens.regular,
      extraBold: JoocRefTypographyFontWeightTokens.extraBold,
    },
  },
  s: {
    size: JoocRefTypographyFontSizeTokens.fontSize900,
    lineHeight: JoocRefTypographyLineHeightTokens[50],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.xs,
    fontWeight: {
      regular: JoocRefTypographyFontWeightTokens.regular,
      extraBold: JoocRefTypographyFontWeightTokens.extraBold,
    },
  },
} as const satisfies JoocSysTypographyDisplayTokensType;
