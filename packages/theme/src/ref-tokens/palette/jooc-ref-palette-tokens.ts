import { JoocRefPaletteDeepTealTokens } from "./deep-teal/jooc-ref-palette-deep-teal-tokens";
import { JoocRefPaletteMutedRoseTokens } from "./muted-rose/jooc-ref-palette-muted-rose-tokens";
import { JoocRefPaletteLightIvoryTokens } from "./light-ivory/jooc-ref-palette-light-ivory-tokens";
import { JoocRefPaletteSoftBeigeTokens } from "./soft-beige/jooc-ref-palette-soft-beige-tokens";
import { type JoocRefPaletteTokensType } from "./jooc-ref-palette-tokens.types";


export const JoocRefPaletteTokens = {
  inherit: "inherit",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  deepTeal: JoocRefPaletteDeepTealTokens,
  mutedRose: JoocRefPaletteMutedRoseTokens,
  lightIvory: JoocRefPaletteLightIvoryTokens,
  softBeige: JoocRefPaletteSoftBeigeTokens,
} as const satisfies JoocRefPaletteTokensType;

type HexCodes<T> = T extends string
  ? T extends `#${string}`
    ? T
    : never
  : {
      [K in keyof T]: HexCodes<T[K]>;
    }[keyof T];

export type JoocRefPaletteTokensHexCodes = HexCodes<typeof JoocRefPaletteTokens>;
