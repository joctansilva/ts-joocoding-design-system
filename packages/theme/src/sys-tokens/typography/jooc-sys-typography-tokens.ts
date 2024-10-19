import { type JoocSysTypographyTokensType } from "./jooc-sys-typography-tokens.types";
import { JoocSysTypographyDisplayTokens } from "./display";
import { JoocSysTypographyHeadingTokens } from "./heading";
import { JoocSysTypographyLabelTokens } from "./label";
import { JoocSysTypographyParagraphTokens } from "./paragraph";
import { JoocSysTypographySubheadingTokens } from "./subheading";

export const JoocSysTypographyTokens = {
  display: JoocSysTypographyDisplayTokens,
  heading: JoocSysTypographyHeadingTokens,
  label: JoocSysTypographyLabelTokens,
  paragraph: JoocSysTypographyParagraphTokens,
  subheading: JoocSysTypographySubheadingTokens,
} as const satisfies JoocSysTypographyTokensType;
