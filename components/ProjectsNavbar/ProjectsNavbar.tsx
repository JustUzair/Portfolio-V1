import React, { FunctionComponent, useEffect } from 'react'
import { Category } from '../../type'


const NavItem: FunctionComponent<{ value: Category | "all", handleFilterCategory: Function }> = ({ value, handleFilterCategory }) => {
    useEffect(() => {
        document.querySelector('.nav-item').classList.add('active')

    }, [])
    const clearNavItems = () => {
        document.querySelectorAll('.nav-item').forEach(el => { el.classList.remove('active') })
    }
    return (
        <li className='capitalize transition ease-in-out cursor-pointer duration-250 hover:text-green nav-item' onClick={e => { clearNavItems(); (e.target as HTMLElement).closest('.nav-item').classList.add('active'); handleFilterCategory(value) }}>
            <span>{value}</span>
        </li>
    )
}

// export default NavItem
const ProjectsNavbar: FunctionComponent<{ handleFilterCategory: Function }> = (props) => {
    return (
        <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none '>
            <NavItem value="all"  {...props} />
            <NavItem value="react" {...props}></NavItem>
            <NavItem value="node" {...props}></NavItem>
            <NavItem value="express" {...props}></NavItem>
            {/* <NavItem value="django" {...props}></NavItem> */}
            <NavItem value="mongo" {...props}></NavItem>
            <NavItem value="next.js" {...props}></NavItem>
            <NavItem value="firebase" {...props}></NavItem>
            <NavItem value="firestore" {...props}></NavItem>


        </div>
    )
}


export default ProjectsNavbar