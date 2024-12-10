import { Pagination } from "@mui/material"
import { useState } from "react"

export default function CarsListPagination() {
	const [page, setPage] = useState(1)

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value)
	}

	return <Pagination count={10} onChange={handleChange} page={page} defaultPage={1} boundaryCount={2} color="primary" />
}
