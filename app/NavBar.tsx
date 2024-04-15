import React from 'react';
import Link from 'next/link';
import { FcTodoList } from "react-icons/fc";


const NavBar = () => {
    
    // In this example, the links variable is an array of objects 
    // where each object has a label property of type string 
    //and an href property of type string.
    const links: { label: string, href: string }[] = [
        { label: 'Home', href: '/' },
        { label: 'Tasks', href: '/tasks' },
        { label: 'New Task', href: '/newTask' },
    ]; 

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
        <Link href="/"><FcTodoList /></Link>
        <ul className="flex space-x-6">
            {links.map( link => 
                <Link 
                key={link.href} 
                className='text-zinc-500 hover:text-blue-500 transision-colors' 
                href={ link.href }>{ link.label }</Link>
            )}
            
        </ul>
    </nav>
  )
}

export default NavBar