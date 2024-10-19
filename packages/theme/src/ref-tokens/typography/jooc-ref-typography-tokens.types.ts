import { type JoocRefTypographyFontStyleTokensType } from "./font-style";
import { type JoocRefTypographyFontSizeTokensType } from "./font-size";
import { type JoocRefTypographyFontWeightTokensType } from "./font-weight";
import { type JoocRefTypographyLetterSpacingTokensType } from "./letter-spacing";
import { type JoocRefTypographyLineHeightTokensType } from "./line-height";

export type JoocRefTypographyTokensType = {
  fontSize: JoocRefTypographyFontSizeTokensType;
  fontStyle: JoocRefTypographyFontStyleTokensType;
  fontWeight: JoocRefTypographyFontWeightTokensType;
  letterSpacing: JoocRefTypographyLetterSpacingTokensType;
  lineHeight: JoocRefTypographyLineHeightTokensType;
};
