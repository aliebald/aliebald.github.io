/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true, // TODO
	},
	// Support MDX files as pages:
	pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
};

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		jsxImportSource: "@emotion/react",
	},
});

module.exports = withMDX(nextConfig);
