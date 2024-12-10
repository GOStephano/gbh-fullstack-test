import { create } from "zustand"

export type SortState = {
	year: "asc" | "desc" | null
	price: "asc" | "desc" | null
}

export type SortActions = {
	setYear: (sort: SortState["year"]) => void
	setPrice: (sort: SortState["price"]) => void
}

const useSortStore = create<SortState & SortActions>()((set) => ({
	year: null,
	setYear: (year) => set({ year }),

	price: null,
	setPrice: (price) => set({ price }),
}))

export default useSortStore
