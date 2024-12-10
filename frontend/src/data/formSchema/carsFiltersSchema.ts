import { z } from "zod"

export const carsFiltersSchema = z.object({
	manufacturer: z.string(),
	type: z.string().min(1),
	year: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number().min(1900).max(new Date().getFullYear())),
})
