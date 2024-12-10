import { Box, Typography } from "@mui/material"

export default function CarsDetailsNotFound() {
	return (
		<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
			<Box>
				<Typography variant="h1">404</Typography>
				<Typography variant="h4">Car not found</Typography>
			</Box>
		</Box>
	)
}
