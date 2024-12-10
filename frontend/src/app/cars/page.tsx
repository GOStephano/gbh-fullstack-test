import { CarsFilters } from "@/components/Cars/CarsFilters"
import CarsList from "@/components/Cars/CarsList"
import CarsSort from "@/components/Cars/CarsSort"
import { Car } from "@/data/types"
import { Box } from "@mui/material"

export default async function Home() {
	const res = await fetch("http://localhost:3000/vehicles.json")
	const cars: Car[] = await res.json()

	return (
		<Box>
			<Box sx={{ display: "flex", gap: "30px", alignItems: "center", marginBottom: "30px", justifyContent: "space-between" }}>
				<CarsFilters />
				<CarsSort />
			</Box>
			<CarsList cars={cars} />
		</Box>
	)
}
