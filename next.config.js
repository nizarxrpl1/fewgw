module.exports = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  // Atur biar Next.js nyari pages di src/pages
  experimental: {
    appDir: true, // Kalo pake App Router
  },
  // Kalo pake Pages Router, tambahin ini:
  dir: {
    pages: "src/pages",
  },
};
