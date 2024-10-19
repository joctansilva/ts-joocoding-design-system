import {
  JoocRefTypographyFontSizeTokens,
  JoocRefTypographyFontStyleTokens,
  JoocRefTypographyFontWeightTokens,
  JoocRefTypographyLetterSpacingTokens,
  JoocRefTypographyLineHeightTokens,
} from "../../../ref-tokens/typography";
import { type JoocSysTypographyParagraphTokensType } from "./jooc-sys-typography-paragraph-tokens.types";

export const JoocSysTypographyParagraphTokens = {
  l: {
    size: JoocRefTypographyFontSizeTokens.fontSize500,
    lineHeight: JoocRefTypographyLineHeightTokens[75],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.xs,
    fontWeight: {
      regular: JoocRefTypographyFontWeightTokens.regular,
      extraBold: JoocRefTypographyFontWeightTokens.extraBold,
    },
  },
  m: {
    size: JoocRefTypographyFontSizeTokens.fontSize400,
    lineHeight: JoocRefTypographyLineHeightTokens[75],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.s,
    fontWeight: {
      regular: JoocRefTypographyFontWeightTokens.regular,
      extraBold: JoocRefTypographyFontWeightTokens.extraBold,
    },
  },
  s: {
    size: JoocRefTypographyFontSizeTokens.fontSize100,
    lineHeight: JoocRefTypographyLineHeightTokens[75],
    fontStyle: JoocRefTypographyFontStyleTokens.regular,
    letterSpacing: JoocRefTypographyLetterSpacingTokens.s,
    fontWeight: {
      regular: JoocRefTypographyFontWeightTokens.regular,
      extraBold: JoocRefTypographyFontWeightTokens.extraBold,
    },
  },
} as const satisfies JoocSysTypographyParagraphTokensType;
