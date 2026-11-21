module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { primary: "#1a1a1a", accent: "#25D366" } } },
  // Preserve the existing site's global element styles while enabling utility classes.
  corePlugins: { preflight: false },
  plugins: [],
};
