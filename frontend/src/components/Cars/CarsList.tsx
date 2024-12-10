"use client"

import useSortStore from "@/data/store/carsSort"
import { Car } from "@/data/types"
import { getCarsListOptions } from "@/queries"
import Box from "@mui/material/Box"
import { useSuspenseQuery } from "@tanstack/react-query"
import * as React from "react"
import CarCard from "./CarCard"

export default function CarsList() {
	const { data: cars } = useSuspenseQuery(getCarsListOptions(["1"]))

	const { price, year } = useSortStore()

	const sortedCars = [...cars]

	const sortCarsByYear = (a: Car, b: Car) => {
		if (year === "asc") {
			return (a.year ?? 0) - (b.year ?? 0)
		} else if (year === "desc") {
			return (b.year ?? 0) - (a.year ?? 0)
		}
		return 0
	}

	const sortCarsByPrice = (a: Car, b: Car) => {
		if (price === "asc") {
			return (a.price ?? 0) - (b.price ?? 0)
		} else if (price === "desc") {
			return (b.price ?? 0) - (a.price ?? 0)
		}
		return 0
	}

	if (year) {
		sortedCars.sort((a, b) => sortCarsByYear(a, b))
	}

	if (price) {
		sortedCars.sort((a, b) => sortCarsByPrice(a, b))
	}

	return (
		<Box>
			<Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
				{sortedCars.map((c) => (
					<CarCard car={c} key={c.id} />
				))}
			</Box>
		</Box>
	)
}
