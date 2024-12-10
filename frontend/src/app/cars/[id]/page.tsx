import { Car } from "@/data/types"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Image from "next/image"
import { notFound } from "next/navigation"

export default async function CarsDetails({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id
	const res = await fetch("http://localhost:3000/vehicles.json")
	const cars: Car[] = await res.json()
	const car = cars.find((c) => c.id === id)

	if (!car) {
		notFound()
	}

	return (
		<Box>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr 1fr 1fr",
					gap: 2,
					backgroundColor: "#ECF0FF",
					border: "2px solid #ccceee",
					borderRadius: "4px",
					padding: "10px",
					flexGrow: 1,
				}}
			>
				<Box>
					<Image src={car?.images} alt={"Car image"} width={300} height={300} style={{ borderRadius: "4px" }} />
				</Box>
				<Box>
					<Typography>{car?.manufacturer}</Typography>
					<Typography>{car?.model}</Typography>
					<Typography>{car?.year}</Typography>
					<Typography>{car?.features}</Typography>
				</Box>
				<Box>
					<Typography>{car?.fuelType}</Typography>
					<Typography>{car?.transmission}</Typography>
					<Typography>{car?.type}</Typography>
					<Typography>{car?.description}</Typography>
					<Typography>{car?.mileage && `${car?.mileage} KM`}</Typography>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "flex-end" }}>
					<Typography fontSize={"24px"}>${car?.price}</Typography>
				</Box>
			</Box>
		</Box>
	)
}
