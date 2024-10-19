import { type JoocSysElevationTokensType } from "./jooc-sys-elevation-tokens.types";
import { JoocSysElevationDeepTealTokens } from "./deep-teal";

export const AtlSysElevationTokens = {
  none: "0 0 #0000",
  deepTeal700: JoocSysElevationDeepTealTokens,
} as const satisfies JoocSysElevationTokensType;
