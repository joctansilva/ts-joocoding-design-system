import { type JoocSysElevationTokenSizesType } from "../jooc-sys-elevation-tokens.types";

export const JoocSysElevationDeepTealTokens = {
  xs: {
    top: "0px -1px 2px 0px #095d6a0A",   // Deep Teal
    right: "1px 0px 2px 0px #095d6a0A",
    bottom: "0px 1px 2px 0px #095d6a0A",
    left: "-1px 0px 2px 0px #095d6a0A",
  },
  s: {
    top: "0px -1px 2px 0px #095d6a0F, 0px -1px 3px 0px #095d6a1A",
    right: "1px 0px 2px 0px #095d6a0F, 1px 0px 3px 0px #095d6a1A",
    bottom: "0px 1px 2px 0px #095d6a0F, 0px 1px 3px 0px #095d6a1A",
    left: "-1px 0px 2px 0px #095d6a0F, -1px 0px 3px 0px #095d6a1A",
  },
  m: {
    top: "0px -2px 4px -1px #095d6a0F, 0px -4px 6px -1px #095d6a1A",
    right: "2px 0px 4px -1px #095d6a0F, 4px 0px 6px -1px #095d6a1A",
    bottom: "0px 2px 4px -1px #095d6a0F, 0px 4px 6px -1px #095d6a1A",
    left: "-2px 0px 4px -1px #095d6a0F, -4px 0px 6px -1px #095d6a1A",
  },
  l: {
    top: "0px -4px 6px -2px #095d6a0D, 0px -10px 15px -3px #095d6a1A",
    right: "4px 0px 6px -2px #095d6a0D, 10px 0px 15px -3px #095d6a1A",
    bottom: "0px 4px 6px -2px #095d6a0D, 0px 10px 15px -3px #095d6a1A",
    left: "-4px 0px 6px -2px #095d6a0D, -10px 0px 15px -3px #095d6a1A",
  },
  xl: {
    top: "0px -10px 10px -5px #095d6a0A, 0px -20px 25px -5px #095d6a1A",
    right: "10px 0px 10px -5px #095d6a0A, 20px 0px 25px -5px #095d6a1A",
    bottom: "0px 10px 10px -5px #095d6a0A, 0px 20px 25px -5px #095d6a1A",
    left: "-10px 0px 10px -5px #095d6a0A, -20px 0px 25px -5px #095d6a1A",
  },
} as const satisfies JoocSysElevationTokenSizesType;