import React, { Children } from 'react';
import Head from 'next/head';
import '../styles/globals.css'
import "../styles/toggleSwitch.css"
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar/Navbar';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
  };
  // const name = document.querySelector('.resume-container');
  const router = useRouter();
  return <ThemeProvider attribute='class'>
    <Head>
      <title>Portfolio | Uzair Saiyed</title>
    </Head>
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
      <div className="col-span-12 p-4 text-center transition duration-75 ease-in-out bg-white lg:col-span-3 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark"><Sidebar toggled={toggled} handleClick={handleClick} /></div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
        <Navbar />
        {/* <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence> */}
        <AnimatePresence exitBeforeEnter />
        <motion.div initial={{ opacity: 0 }} animate={{
          opacity: 1, transition: {
            delay: 0.25,
            duration: 0.5
          }
        }} exit={{
          opacity: 0, transition: {
            delay: 0.25,
            ease: 'easeInOut'
          }
        }} key={router.route} className="content">
          <Component {...pageProps} />
        </motion.div>
        {/* </AnimatePresence> */}
      </div>
    </div>
  </ThemeProvider>

}

export default MyApp
