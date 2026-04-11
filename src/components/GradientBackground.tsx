import { useTheme } from "./ThemeProvider";

export default function GradientBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10"
      style={{
        background: isDark
          ? "radial-gradient(circle at 20% 20%, #1a1a3a, #0a0a1a 40%, #050510 80%), linear-gradient(120deg, #0f172a, #1e1b4b, #0f172a)"
          : "linear-gradient(120deg, #f8fafc, #e0e7ff, #fdf2f8)",
        minHeight: "100vh",
      }}
    />
  );
}
