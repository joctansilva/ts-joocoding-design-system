import { JoocRefTypographyFontSizeTokens } from "./font-size";
import { type JoocRefTypographyTokensType } from "./jooc-ref-typography-tokens.types";
import { JoocRefTypographyFontStyleTokens } from "./font-style";
import { JoocRefTypographyFontWeightTokens } from "./font-weight";
import { JoocRefTypographyLetterSpacingTokens } from "./letter-spacing";
import { JoocRefTypographyLineHeightTokens } from "./line-height";

export const JoocRefTypographyTokens = {
  fontSize: JoocRefTypographyFontSizeTokens,
  fontStyle: JoocRefTypographyFontStyleTokens,
  fontWeight: JoocRefTypographyFontWeightTokens,
  letterSpacing: JoocRefTypographyLetterSpacingTokens,
  lineHeight: JoocRefTypographyLineHeightTokens,
} as const satisfies JoocRefTypographyTokensType;
