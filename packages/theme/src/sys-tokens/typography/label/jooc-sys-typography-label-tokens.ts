import {
  JoocRefTypographyFontSizeTokens,
  JoocRefTypographyFontStyleTokens,
  JoocRefTypographyFontWeightTokens,
  JoocRefTypographyLetterSpacingTokens,
  JoocRefTypographyLineHeightTokens,
} from "../../../ref-tokens/typography";
import { type JoocSysTypographyLabelTokensType } from "./jooc-sys-typography-label-tokens.types";

export const JoocSysTypographyLabelTokens = {
  l: {
    size: JoocRefTypographyFontSizeTokens.fontSize200,
    lineHeight: JoocRefTypographyLineHeightTokens[75],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.xs,
    fontWeight: {
      medium: JoocRefTypographyFontWeightTokens.medium,
    },
  },
  m: {
    size: JoocRefTypographyFontSizeTokens.fontSize100,
    lineHeight: JoocRefTypographyLineHeightTokens[75],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.s,
    fontWeight: {
      medium: JoocRefTypographyFontWeightTokens.medium,
    },
  },
  s: {
    size: JoocRefTypographyFontSizeTokens.fontSize75,
    lineHeight: JoocRefTypographyLineHeightTokens[75],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.s,
    fontWeight: {
      medium: JoocRefTypographyFontWeightTokens.medium,
    },
  },
} as const satisfies JoocSysTypographyLabelTokensType;
