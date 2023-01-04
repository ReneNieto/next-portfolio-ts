import { Project } from "../typings"

export const fecthProjects = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
	)
	const data = await response.json()
	const projects: Project[] = data.projects
	return projects
}
