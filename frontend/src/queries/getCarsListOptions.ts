export const getCarsListOptions = (params: string[]) => ({
	queryKey: ["cars-list", params].flat(),
	queryFn: async () => {
		const response = await fetch("http://localhost:3000/vehicles.json")

		return response.json()
	},
})
