"use client"

import { SxProps } from "@mui/material"
import TextField, { TextFieldProps } from "@mui/material/TextField"
import { Control, Controller } from "react-hook-form"

interface FormTextProps {
	name: string
	control?: Control<any, any>
	label?: string
	sx?: SxProps
	type?: TextFieldProps["type"]
}

export const FormText = ({ name, control, label, sx, type }: FormTextProps) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					helperText={error ? error.message : null}
					size="small"
					type={type}
					error={!!error}
					sx={sx}
					onChange={(e) => {
						onChange(type === "number" ? Number(e.target.value) : e.target.value)
					}}
					value={value}
					fullWidth
					label={label}
					variant="outlined"
				/>
			)}
		/>
	)
}
