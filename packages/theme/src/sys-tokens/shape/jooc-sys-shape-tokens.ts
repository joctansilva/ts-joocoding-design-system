import { JoocSysShapeBorderRadiusTokens } from "./border-radius";
import { JoocSysShapeBorderWidthTokens } from "./border-width";
import { type JoocSysShapeTokensType } from "./jooc-sys-shape-tokens.types";

export const JoocSysShapeTokens = {
  borderRadius: JoocSysShapeBorderRadiusTokens,
  borderWidth: JoocSysShapeBorderWidthTokens,
} as const satisfies JoocSysShapeTokensType;
