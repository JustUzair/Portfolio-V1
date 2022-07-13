import React, { useEffect } from 'react'
import { services } from "../data"
import ServiceCard from '../components/ServiceCard/ServiceCard';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';
const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className='flex flex-col flex-grow px-6 pt-1' >
      <h5 className="px-6 my-3 text-base font-medium" style={{ wordWrap: "break-word" }}>
        <p>I solve problems in creative ways. At Sarvajanik college of engineering and technology , where I am completing my 3<sup>rd</sup> year in the Computer Engineering, I have learned the importance of applying classical strategies to modern-day projects.</p>
        <p>{"Determined towards my coding skills and striving hard every day for its excellence. Confident enough in my problem-solving skills. Better team partner and believe in teamwork."}</p>
        <p>{"Passion for innovation, prototyping, and high-quality manufacturing."}</p>
      </h5>
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100' style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
        <h6 className="my-3 text-xl font-bold tracking-wider" >Skills</h6>
        <motion.div className='grid gap-6 lg:grid-cols-2' variants={stagger} initial="initial" animate="animate">
          {
            services.map((service, id) => <motion.div variants={fadeInUp} className='bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200' key={id}><ServiceCard service={service} /></motion.div>)
          }
        </motion.div>
      </div>
    </motion.div >
  )
}

export default index
// 3:10