import { PageInfo } from "../typings"

export const fecthPageInfo = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
	)
	const data = await response.json()
	const pageInfo: PageInfo = data.pageInfo
	return pageInfo
}
