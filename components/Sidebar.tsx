import React, { useEffect } from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BsStackOverflow } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { GiTie } from "react-icons/gi"
import ToggleSwitch from "./toggleSwitch/toggleSwitch"
import { useTheme } from "next-themes"
import Image from 'next/image'
const Sidebar = ({ toggled, handleClick }) => {
    const { theme, setTheme } = useTheme();
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    useEffect(() => {
        setTheme('light');
    }, [])
    return (
        <div className='font-poppins'>
            <Image
                width="130"
                height="130"
                className="w-32 h-32 mx-auto rounded-full min-w-30 min-h-30"
                style={{ objectFit: "cover", borderRadius: "50% !important" }}
                src="/images/Uzair/profile.jpg"
                alt="Profile Picture"
                quality="75"
            />
            <h3 className='my-4 text-3xl font-extrabold tracking-wider font-kaushan'>
                <span className='text-green'>Uzair</span> Saiyed
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>CSE 24{"'"} Sarvajanik College of Engineering and Technology</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200" href="" download="name"><GiTie className="w-6 h-6" />Download Resume</a>
            {/* Social Icons */}
            <div className="flex items-center justify-around w-9/12 mx-auto my-5 md:w-full">
                <a href="https://www.github.com/JustUzair" target="blank"><AiFillGithub className={`transition ease-in-out duration-75 w-8 h-8 cursor-pointer ${toggled ? '!text-white' : '!text-gray-800'}`} /></a>
                <a href="https://www.linkedin.com/in/uzair-saiyed-8805us/" target="blank"><AiFillLinkedin className="w-8 h-8 cursor-pointer !text-blue-500" /></a>
                <a href="https://stackoverflow.com/users/12886806/uzair-saiyed" target="blank"><BsStackOverflow className="w-8 h-8 cursor-pointer !text-orange-500" /></a>
            </div>
            {/* Address */}
            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200' style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Gujarat, India</span>
                </div>
                <p className='my-2'>uzairhajra76330@gmail.com</p>
                <p className='my-2'><span className="ml-1">+91</span> 6354441851</p>
            </div>
            {/* Email */}
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
                onClick={(e) => { window.open('mailto:uzairhajra76330@gmail.com') }}>Email me</button>
            {/* <button className="w-8/12 px-5 py-2 my-2 text-white bg-gray-500 rounded-full">Email me</button> */}
            {/* toggle button */}
            <ToggleSwitch toggled={toggled} changeTheme={changeTheme} handleClick={handleClick}></ToggleSwitch>

        </div>
    )
}

export default Sidebar