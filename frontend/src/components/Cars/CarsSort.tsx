"use client"

import useSortStore from "@/data/store/carsSort"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { Button } from "@mui/material"
import Box from "@mui/material/Box"

type Sort = {
	year: "asc" | "desc" | null
	price: "asc" | "desc" | null
}

export default function CarsSort() {
	const { price, setPrice, year, setYear } = useSortStore()

	const getIcon = (property: keyof Sort) => {
		const value = property === "price" ? price : year
		if (value === "asc") return <KeyboardArrowUpIcon />
		if (value === "desc") return <KeyboardArrowDownIcon />
		return null
	}

	const handleSortChange = (property: keyof Sort) => {
		const currentValue = property === "price" ? price : year
		let newValue: "asc" | "desc" | null
		if (currentValue === "asc") {
			newValue = "desc"
		} else if (currentValue === "desc") {
			newValue = null
		} else {
			newValue = "asc"
		}

		if (property === "year") setYear(newValue)
		else setPrice(newValue)
	}

	return (
		<Box sx={{ display: "flex", gap: "10px", alignItems: "start" }}>
			<Button startIcon={getIcon("year")} onClick={() => handleSortChange("year")} variant="contained" sx={{ width: "100px" }}>
				Year
			</Button>

			<Button startIcon={getIcon("price")} onClick={() => handleSortChange("price")} variant="contained" sx={{ width: "100px" }}>
				Price
			</Button>
		</Box>
	)
}
