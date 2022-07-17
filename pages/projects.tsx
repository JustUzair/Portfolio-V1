import React, { FunctionComponent, useEffect, useState } from 'react'
import { projects as projectsData } from '../data'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import ProjectsNavbar from '../components/ProjectsNavbar/ProjectsNavbar'
import { Category } from '../type'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'

const Projects = () => {
    const [projects, setProjects] = useState(projectsData.reverse());
    const [active, setActive] = useState("all")
    const [showDetail, setShowDetail] = useState<number | null>(null);
    useEffect(() => {
        handleFilterCategory("all");
        document.querySelector('.projects-container').scrollIntoView({ behavior: "smooth" })
    }, [])
    const handleFilterCategory = (category: Category | "all") => {
        if (category === "all") {
            setProjects(projectsData)
            setActive(category)
            return
        }

        const filteredProjects = projectsData.filter(project => project.category.includes(category));
        setProjects(filteredProjects);
        setActive(category)

    }

    //active inactive state

    return (
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className='px-5 py-2 overflow-y-scroll projects-container' style={{ height: '65vh' }}>
            <ProjectsNavbar handleFilterCategory={handleFilterCategory} />
            <motion.div variants={stagger} initial="initial" animate="animate" className='relative grid grid-cols-12 gap-4 my-3'>
                {projects.map((project) => <motion.div variants={fadeInUp} className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200' key={project.name}>
                    <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
                </motion.div>)}
            </motion.div>
        </motion.div>

    )
}

export default Projects