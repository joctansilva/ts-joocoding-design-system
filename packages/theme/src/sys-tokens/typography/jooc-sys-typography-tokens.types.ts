import {
  type JoocRefTypographyFontSizeTokens,
  type JoocRefTypographyFontStyleTokens,
  type JoocRefTypographyFontWeightTokens,
  type JoocRefTypographyFontWeightTokensType,
  type JoocRefTypographyLetterSpacingTokens,
  type JoocRefTypographyLineHeightTokens,
} from "../../ref-tokens/typography";
import type { ValueOf } from "../../utils/ValueOf/valueOf";

import { type JoocSysTypographyDisplayTokensType } from "./display";
import { type JoocSysTypographyHeadingTokensType } from "./heading";
import { type JoocSysTypographyLabelTokensType } from "./label";
import { type JoocSysTypographyParagraphTokensType } from "./paragraph";
import { type JoocSysTypographySubHeadingTokensType } from "./subheading";

export type JoocSysTypographyTokensType = {
  display: JoocSysTypographyDisplayTokensType;
  heading: JoocSysTypographyHeadingTokensType;
  label: JoocSysTypographyLabelTokensType;
  paragraph: JoocSysTypographyParagraphTokensType;
  subheading: JoocSysTypographySubHeadingTokensType;
};

export type JoocSysTypographyFontWeightTokenType = Partial<{
  [key in keyof JoocRefTypographyFontWeightTokensType]: ValueOf<
    typeof JoocRefTypographyFontWeightTokens
  >;
}>;

export type JoocSysTypographyTokenType = {
  size: ValueOf<typeof JoocRefTypographyFontSizeTokens>;
  lineHeight: ValueOf<typeof JoocRefTypographyLineHeightTokens>;
  fontStyle: ValueOf<typeof JoocRefTypographyFontStyleTokens>;
  letterSpacing: ValueOf<typeof JoocRefTypographyLetterSpacingTokens>;
  fontWeight: JoocSysTypographyFontWeightTokenType;
};
