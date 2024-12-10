import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/cars",
				permanent: false,
			},
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
				port: "",
			},
		],
	},
}

export default nextConfig
