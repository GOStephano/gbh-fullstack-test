import { Car } from "@/data/types"
import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

interface CardCardProps {
	car: Car
}

export default function CarCard({ car }: CardCardProps) {
	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: "1fr 1fr 1fr",
				gap: 2,
				backgroundColor: "#ECF0FF",
				border: "2px solid #ccceee",
				borderRadius: "4px",
				padding: "10px",
				flexGrow: 1,
			}}
		>
			<Box>
				<Image src={car.images[0]} alt={car.model} width={200} height={200} style={{ borderRadius: "4px" }} />
			</Box>
			<Box>
				<Typography>{car.manufacturer}</Typography>
				<Typography>{car.model}</Typography>
				<Typography>{car.year}</Typography>
				<Typography>{car?.mileage && `${car?.mileage} KM`}</Typography>
			</Box>
			<Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "flex-end" }}>
				<Typography>${car.price}</Typography>
				<Link href={`/cars/${car.id}`} prefetch={true}>
					<Button variant="contained" color="primary">
						View details
					</Button>
				</Link>
			</Box>
		</Box>
	)
}
