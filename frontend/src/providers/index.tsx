"use client"
import MuiAppRouterCacheProvider from "./MuiAppRouterCacheProvider"
import QueryProvider from "./QueryClientProvider"

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<QueryProvider>
			<MuiAppRouterCacheProvider>{children}</MuiAppRouterCacheProvider>
		</QueryProvider>
	)
}
