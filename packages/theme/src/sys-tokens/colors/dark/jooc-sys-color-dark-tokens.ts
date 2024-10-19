import { type JoocSysColorTokensType } from "../jooc-sys-color-tokens.types";

export const JoocSysColorDarkTokens = {
  background: "#000", // Pure Black
  onBackground: "#ded5cb", // Soft Beige
  surface: "#095d6a", // Deep Teal
  onSurface: "#fff", // Pure White
  surfaceVariant: "#b86161", // Muted Rose
  onSurfaceVariant: "#f6f1ec", // Light Ivory
  surfacePrimary: "#095d6a", // Deep Teal
  onSurfacePrimary: "#fff", // Pure White
  surfacePrimaryVariant: "#074e59", // Deep Teal Darker
  onSurfacePrimaryVariant: "#b86161", // Muted Rose
  surfaceError: "#6f4141", // Muted Rose Darker
  onSurfaceError: "#fff", // Pure White
  surfaceSuccess: "#042c35", // Deep Teal Darkest
  onSurfaceSuccess: "#f6f1ec", // Light Ivory
  primary: "#095d6a", // Deep Teal
  primaryHover: "#074e59", // Deep Teal Darker
  primaryPress: "#063d47", // Deep Teal Press
  onPrimary: "#fff", // Pure White
  secondary: "#b86161", // Muted Rose
  secondaryHover: "#945151", // Muted Rose Darker
  secondaryPress: "#6f4141", // Muted Rose Press
  onSecondary: "#fff", // Pure White
  terciary: "#ded5cb", // Soft Beige
  terciaryHover: "#b3b0a8", // Soft Beige Darker
  terciaryPress: "#918f87", // Soft Beige Press
  onTerciary: "#000", // Pure Black
  critical: "#b86161", // Muted Rose (Critical)
  criticalHover: "#945151", // Muted Rose Darker (Critical)
  criticalPress: "#6f4141", // Muted Rose Press (Critical)
  onCritical: "#fff", // Pure White
  alert: "#ded5cb", // Soft Beige (Alert)
  onAlert: "#000", // Pure Black
  success: "#095d6a", // Deep Teal (Success)
  onSuccess: "#fff", // Pure White
  disabled: "#5c4c45", // Dark Grey (Disabled)
  onDisabled: "#ded5cb", // Soft Beige
} as const satisfies JoocSysColorTokensType;
