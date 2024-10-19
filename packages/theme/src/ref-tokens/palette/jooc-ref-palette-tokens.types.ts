export type JoocRefPaletteShadeType = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

const JoocRefPaletteTokensKeys = [
  "deepTeal",
  "mutedRose",
  "lightIvory",
  "softBeige",
] as const;

export type JoocRefPaletteTokensType = {
  [key in (typeof JoocRefPaletteTokensKeys)[number]]: JoocRefPaletteShadeType;
} & {
  inherit: string;
  transparent: string;
  black: string;
  white: string;
};
