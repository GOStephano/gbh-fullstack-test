"use client"

import { FormControl, InputLabel, MenuItem, Select, SxProps } from "@mui/material"
import { Control, Controller } from "react-hook-form"

interface FormSelectProps {
	name: string
	control?: Control<any, any>
	label?: string
	options: { label: string; value: string }[]
	sx?: SxProps
}

export function FormSelect({ name, control, label, options, sx }: FormSelectProps) {
	return (
		<FormControl size={"small"}>
			<InputLabel>{label}</InputLabel>
			<Controller
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<Select onChange={onChange} value={value} sx={sx} error={Boolean(error)}>
						{options.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</Select>
				)}
				control={control}
				name={name}
			/>
		</FormControl>
	)
}
