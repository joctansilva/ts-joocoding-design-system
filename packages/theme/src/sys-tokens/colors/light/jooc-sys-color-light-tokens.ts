import { type JoocSysColorTokensType } from "../jooc-sys-color-tokens.types";

export const JoocSysColorLightTokens = {
  background: "#f6f1ec", // Light Ivory
  onBackground: "#000", // Pure Black
  surface: "#fff", // Pure White
  onSurface: "#095d6a", // Deep Teal
  surfaceVariant: "#ded5cb", // Soft Beige
  onSurfaceVariant: "#b86161", // Muted Rose
  surfacePrimary: "#095d6a", // Deep Teal
  onSurfacePrimary: "#fff", // Pure White
  surfacePrimaryVariant: "#b86161", // Muted Rose
  onSurfacePrimaryVariant: "#f6f1ec", // Light Ivory
  surfaceError: "#b86161", // Muted Rose
  onSurfaceError: "#fff", // Pure White
  surfaceSuccess: "#095d6a", // Deep Teal
  onSurfaceSuccess: "#fff", // Pure White
  primary: "#095d6a", // Deep Teal
  primaryHover: "#074e59", // Deep Teal Darker
  primaryPress: "#063d47", // Deep Teal Press
  onPrimary: "#fff", // White
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
  alert: "#f6f1ec", // Light Ivory (Alert)
  onAlert: "#000", // Pure Black
  success: "#095d6a", // Deep Teal (Success)
  onSuccess: "#fff", // Pure White
  disabled: "#ded5cb", // Soft Beige (Disabled)
  onDisabled: "#000", // Pure Black
} as const satisfies JoocSysColorTokensType;
