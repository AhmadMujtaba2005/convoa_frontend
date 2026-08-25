export const theme = {
  colors: {
    background: "var(--background, #030305)",
    backgroundElevated: "var(--background-elevated, #0a0a0d)",
    surface: "var(--surface, #0d0d12)",
    surfaceBorder: "var(--surface-border, rgba(255,255,255,0.06))",
    textPrimary: "var(--text-primary, #f5f5f7)",
    textMuted: "var(--text-muted, #9a9aa5)",
    textDim: "var(--text-dim, #55555f)",
    brandTeal: "var(--brand-teal, #4ECDA0)",
    brandIndigo: "var(--brand-indigo, #3D4A9B)",
    brandGradient: "var(--brand-gradient, linear-gradient(135deg, #4ECDA0 0%, #3D4A9B 100%))",
    brandGradientText: "var(--brand-gradient-text, linear-gradient(135deg, #3DBF91 0%, #3D4A9B 100%))",
  },
  fonts: {
    heading: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif",
    body: "var(--font-inter), 'Inter', system-ui, sans-serif",
  },
  // kept for backward compat with footer imports
  get colors_compat() {
    return {
      background: this.colors.background,
      surface: this.colors.surface,
      border: this.colors.surfaceBorder,
      text: { primary: this.colors.textPrimary, muted: this.colors.textMuted, dim: this.colors.textDim },
      brand: { teal: this.colors.brandTeal, indigo: this.colors.brandIndigo, gradient: this.colors.brandGradient, gradientText: this.colors.brandGradientText },
    };
  },
};
