import Image from 'next/image';
import React, { FunctionComponent, useEffect } from 'react'
import { skills } from '../../data';
import { ISkill } from '../../type'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ skill: { Icon, name, } }) => {

    const squareVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: .55, type: 'spring', velocity: 1, damping: 10, stiffness: 100 } },
        hidden: { opacity: 0, scale: 0 },
    };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
            className="square"
        >
            <Image height="150" width="150" quality="75" src={Icon.src} alt={name} />
        </motion.div>
    );
}
// return <motion.div
//     // variants={variants}
//     // initial="initial"
//     // animate="animate"
//     variants={squareVariants}
//     animate={{ scale: 2 }}
//     initial="hidden"



// ><Image height="150" width="150" quality="100" src={Icon.src} alt={name} /></motion.div>

// }

export default ServiceCard
// height={Icon.height} width={Icon.width}