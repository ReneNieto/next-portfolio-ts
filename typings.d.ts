interface SanityBody {
	_createdAt: string
	_id: string
	_rev: string
	_updatedAt: string
}

interface Image {
	_type: "image"
	asset: {
		_ref: string
		_type: "reference"
	}
}

export interface PageInfo extends SanityBody {
	_type: "pageInfo"
	address: string
	backgroundInfo: string
	email: string
	role: string
	heroImage: Image
	name: string
	phoneNumber: string
	profilePicture: Image
}

export interface Tecnology extends SanityBody {
	_type: "skill"
	image: Image
	progress: number
	title: string
}
export interface Skill extends SanityBody {
	_type: "skill"
	image: Image
	progress: number
	title: string
}

export interface Project extends SanityBody {
	_type: "project"
	title: string
	summary: string
	image: Image
	linkToBuild: string
	tecnologies: Tecnology[]
}

export interface Social extends SanityBody {
	_type: "social"
	title: string
	url: string
}

export interface Experience extends SanityBody {
	_type: "experience"
	companyName: string
	companyImg: Image
	dateStarted: string
	dateEnded: string
	isCurrentlyWorkingHere: boolean
	jobTitle: string
	points: string[]
	tecnologies: Tecnology[]
}
