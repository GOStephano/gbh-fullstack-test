export interface Car {
	id: string
	manufacturer: string
	model: string
	year: number
	type: string
	price: number
	fuelType: string
	transmission: string
	mileage?: number
	features: string[]
	images: string[]
	description: string
	createdAt: string
	updatedAt: string
}
