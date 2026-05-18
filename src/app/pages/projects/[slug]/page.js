import { notFound } from 'next/navigation'
import { projectsData } from '@/lib/fackData/projectsData'
import ProjectDetails from '@/components/section/projectSingle/ProjectDetails'

export function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }))
}

export function generateMetadata({ params }) {
    const project = projectsData.find((item) => item.slug === params.slug)

    if (!project) {
        return {
            title: 'Plant Lady -- Project Not Found',
        }
    }

    return {
        title: `Plant Lady -- ${project.project_name}`,
        description: project.project_desc,
    }
}

export default async function ProjectDetailsPage({ params }) {
    const { slug } = await params
    const project = projectsData.find((item) => item.slug === slug)

    if (!project) {
        notFound()
    }

    return <ProjectDetails project={project} />
}