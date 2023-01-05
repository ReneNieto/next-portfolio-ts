import Head from "next/head"
import { Inter } from "@next/font/google"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import WorkExperience from "../components/WorkExperience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import ContactMe from "../components/ContactMe"
import Link from "next/link"
import Image from "next/image"
import { GetStaticProps } from "next"
import { Experience, PageInfo, Project, Skill, Social } from "../typings"
import { fecthSocials } from '../utils/fetchSocials';
import { fecthProjects } from '../utils/fetchProjects';
import { fecthExperience } from '../utils/fetchExperience';
import { fecthPageInfo } from "../utils/fetchPageInfo"
import { fetchSkills } from "../utils/fetchSkills"

type Props = {
	pageInfo : PageInfo
	experience : Experience[]
	skills: Skill[]
	projects : Project[]
	socials : Social[]
}

const inter = Inter({ subsets: ["latin"] })

export default function Home({ pageInfo, experience, projects, skills, socials } : Props) {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-500 scrollbar-thumb-[#800080]/70 scrollbar-thin overflow-x-hidden">
			<Head>
				<title>Rene Nieto</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header socials={socials} />
			<section id="hero" className="snap-start">
				<Hero pageInfo={pageInfo}/>
			</section>
			<section id="about" className="snap-center">
				<About pageInfo={pageInfo}/>
			</section>
			<section id="workExperience" className="snap-center">
				<WorkExperience experiences={experience} />
			</section>
			<section id="skills" className="snap-start">
				<Skills skills={skills}/>
			</section>
			<section id="projects" className="snap-start">
				<Projects projects={projects} />
			</section>
			<section id="contact" className="snap-start">
				<ContactMe pageInfo={pageInfo} />
			</section>

			<footer className="sticky bottom-5 w-full ">
				<div className="flex justify-center items-center">
					<Link href="#hero">
						<img
							className="w-10 h-10 rounded-full grayscale hover:grayscale-0 cursor-pointer"
							src="https://images.unsplash.com/photo-1671127310220-509dcf216e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
						/>
					</Link>
				</div>
			</footer>
		</div>
	)
}

export const getStaticProps : GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fecthPageInfo()
	const experience: Experience[] = await fecthExperience()
	const skills: Skill[] = await fetchSkills()
	const projects: Project[] = await fecthProjects()
	const socials: Social[] = await fecthSocials()

	return {
		props: {
			pageInfo,
			experience,
			skills,
			projects,
			socials
		},
		revalidate: 10,
	}
}