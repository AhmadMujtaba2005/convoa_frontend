export const theme = {
  colors: {
    background: "#030305",
    backgroundElevated: "#0a0a0d",
    surface: "#0d0d12",
    surfaceBorder: "rgba(255,255,255,0.06)",
    textPrimary: "#f5f5f7",
    textMuted: "#9a9aa5",
    textDim: "#55555f",
    brandTeal: "#4ECDA0",
    brandIndigo: "#3D4A9B",
    brandGradient: "linear-gradient(135deg, #4ECDA0 0%, #3D4A9B 100%)",
    brandGradientText: "linear-gradient(135deg, #3DBF91 0%, #3D4A9B 100%)",
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
