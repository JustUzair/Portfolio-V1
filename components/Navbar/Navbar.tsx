import React, { FunctionComponent, useEffect, useState } from 'react'
import resume from '../../pages/resume'
import projects from '../../pages/projects'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}> = ({ activeItem, name, route, setActiveItem }) => {
    return (activeItem !== name ? <Link href={route}>
        <a className="nav-link" onClick={(e) => { setActiveItem(name) }}>
            <span className="transition duration-200 ease-out hover:text-green" >{name}</span>
        </a>
    </Link> : null)
}
const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('');
    const { pathname } = useRouter();
    useEffect(() => {
        if (pathname === '/') {
            setActiveItem('About')
            Router.push({
                pathname: '/'
            })
        }
        else if (pathname === '/projects') {
            setActiveItem('Projects')
            Router.push({
                pathname: '/projects'
            })
        }
        else if (pathname === '/resume') {
            setActiveItem('Resume')
            Router.push({
                pathname: '/resume'
            })
        }


    }, [])
    return (
        <div className='flex justify-between px-5 py-3 my-3 '>
            <span className="text-xl font-bold border-b-4 border-green text-green md:text-2xl">{activeItem}</span>
            <div className='flex space-x-5 text-lg '>
                {activeItem !== "About" && <NavItem activeItem={activeItem} setActiveItem={setActiveItem} route="/" name="About" ></NavItem>}
                {activeItem !== "Projects" && <NavItem activeItem={activeItem} setActiveItem={setActiveItem} route="/projects" name="Project" ></NavItem>}
                {activeItem !== "Resume" && <NavItem activeItem={activeItem} setActiveItem={setActiveItem} route="/resume" name="Resume" ></NavItem>}

            </div>
        </div >
    )
}

export default Navbar