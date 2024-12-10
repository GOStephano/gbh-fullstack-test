import { Box } from "@mui/material"

export default function CarsLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <Box>{children}</Box>
}
