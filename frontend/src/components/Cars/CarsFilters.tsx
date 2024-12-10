"use client"
import { carsFiltersSchema } from "@/data/formSchema/carsFiltersSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Box, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { FormSelect } from "../Form/FormSelect"
import { FormText } from "../Form/FormText"
interface IFormInput {
	manufacturer: string
	type: string
	year: number
}

const defaultValues: IFormInput = {
	manufacturer: "",
	type: "",
	year: 0,
}

const carTypeOptions = [
	{ label: "SUV", value: "SUV" },
	{ label: "SEDAN", value: "SEDAN" },
	{ label: "ELECTRIC", value: "ELECTRIC" },
	{ label: "SPORTS", value: "SPORTS" },
	{ label: "LUXURY", value: "LUXURY" },
	{ label: "TRUCK", value: "TRUCK" },
]

export function CarsFilters() {
	const { handleSubmit, reset, control, getValues } = useForm<IFormInput>({
		defaultValues: defaultValues,
		resolver: zodResolver(carsFiltersSchema),
		mode: "onChange",
	})

	console.log({ value: getValues() })
	const onSubmit = (data: IFormInput) => {
		console.log(data)
		reset()
	}

	return (
		<Box sx={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
			<FormText name="manufacturer" control={control} label="Manufacturer" sx={{ width: "200px" }} />
			<FormText name="year" control={control} label="Year" sx={{ width: "300px" }} />
			<FormSelect name="type" control={control} label="Type" options={carTypeOptions} sx={{ width: "200px" }} />
			<Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
				Submit
			</Button>
		</Box>
	)
}
