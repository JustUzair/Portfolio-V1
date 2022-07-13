import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { fadeInUp, stagger } from '../../animations';
import { IProject } from '../../type'

const ProjectCard: FunctionComponent<{ project: IProject; showDetail: null | number, setShowDetail: (id: null | number) => void }> = ({ project: { id, name, category, deployed_url, description, github_url, image_path, key_techs }, showDetail, setShowDetail }) => {
    const cover_image = image_path[0];

    return (
        <div className='project-intro'>
            <Image quality="75" layout="responsive" width="300" height="150" className="cursor-pointer" src={cover_image} alt={name} onClick={async (e) => {

                e.preventDefault();
                e.persist();
                await setShowDetail(id);
                const el = (e.target as HTMLElement).closest('.project-intro').lastElementChild.closest('.project-info')
                el.scrollIntoView()
            }} />
            <p className='my-2 text-center'>{name}</p>
            {showDetail === id &&
                <div className="absolute top-0 left-0 z-10 grid h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 w-ull gap-x-12 dark:text-white dark:bg-dark-100 project-info">
                    <motion.div variants={stagger} initial="initial" animate="animate">
                        <motion.div variants={fadeInUp} transition={{ delay: .15 }} className="border-4 border-gray-100">
                            <Image quality="100" layout="responsive" width="300" height="150" src={image_path[1] ? image_path[1] : cover_image} alt={name} />
                        </motion.div>
                        <motion.div variants={fadeInUp} className='flex justify-center my-4 space-x-3'>
                            <a href={github_url} target="_blank" className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200" rel="noreferrer"> <AiFillGithub /> <span>Gtihub</span></a>
                            <a href={deployed_url} target="_blank" className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200" rel="noreferrer"> <AiFillProject /> <span>Project</span></a>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={stagger} initial="initial" animate="animate">
                        <motion.h2 variants={fadeInUp} className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
                        <motion.h3 variants={fadeInUp} className='mb-3 font-medium'>{description}</motion.h3>
                        <motion.div variants={fadeInUp} className='flex flex-wrap mt-5 mb-5 text-sm tracking-wider justify-evenly md:justify-self-stretch sm:justify-self-stretch'>
                            {
                                key_techs.map(tech => <span className='px-2 py-1 my-1 bg-gray-200 rounded dark:bg-dark-200 ' key={tech}>{tech}</span>)
                            }
                        </motion.div>
                    </motion.div>

                    <button onClick={() => setShowDetail(null)} className='absolute bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200'>
                        <MdClose size={30}></MdClose>
                    </button>
                </div>
            }
        </div>
    )
}

export default ProjectCard