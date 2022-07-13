import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import SkillCard from '../components/SkillCard/SkillCard'
import { skills } from '../data'
import { fadeInUp, routeAnimation } from "../animations"
const resume = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        document.querySelector('.resume-container').scrollIntoView({ behavior: "smooth" })
    }, [])
    return (
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className='px-6 py-2 overflow-x-hidden overflow-y-scroll resume-container' style={{ maxHeight: "68.5vh" }}>
            {/* Education and Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className='my-3 text-2xl font-bold'>Education</h5>
                    <div className=''>
                        <div className="education">
                            <h5 className='my-2 text-xl font-bold'>B.E. Computer Science Engineering</h5>
                            <p className='font-semibold'>Sarvajanik College of Engineering and Technology{"(2021-2024)"}</p>
                            <p className='my-3'>CPI: 8.7{"(Till Sem-4)"}</p>
                        </div>
                        <div className="education">
                            <h5 className='my-2 text-xl font-bold'>Diploma in Computer Engineering</h5>
                            <p className='font-semibold'>Tapi Diploma Engineering College{"(2018-2021)"}</p>
                            <p className='my-3'>CPI: 9.8</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className='my-3 text-2xl font-bold'>Experience</h5>
                    <div>
                        <div className="education">
                            <h5 className='my-2 text-xl font-bold'>Website Development</h5>
                            <p className='font-semibold'>Personal Projects</p>
                            <p className='my-3'>Self taught developer. I have been building websites for more than 2 years now!</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* languages and tools */}
            <div >
                <div>
                    <h5 className="my-3 text-2xl font-bold">
                        Languages & Frameworks
                    </h5>
                    <div className="flex flex-col flex-wrap items-center justify-around p-2 mx-4 sm:flex-row md:mx-0 lg:-mx-5 sm:items-center" style={{ maxWidth: "750px", marginRight: "auto", "marginLeft": "auto" }}>
                        {/*eslint-disable-next-line react/jsx-no-undef */}
                        {skills.map(skill => <SkillCard skill={skill} key={skill.name} ></SkillCard>)}
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default resume