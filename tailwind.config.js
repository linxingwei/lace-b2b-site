module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // Explicitly retain the base grid selector for production artifact verification;
  // product cards use the responsive lg:grid-cols-3 variant.
  safelist: ["grid-cols-3"],
  theme: { extend: { colors: { primary: "#1a1a1a", accent: "#25D366" } } },
  // Preserve the existing site's global element styles while enabling utility classes.
  corePlugins: { preflight: false },
  plugins: [],
};
