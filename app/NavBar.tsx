'use client';
import React from 'react';
import Link from 'next/link';
import { FcTodoList } from "react-icons/fc";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';


const NavBar = () => {
    const currentPath = usePathname();
    
    // In this example, the links variable is an array of objects 
    // where each object has a label property of type string 
    //and an href property of type string.
    const links: { label: string, href: string }[] = [
        { label: 'Home', href: '/' },
        { label: 'Tasks', href: '/tasks' },
        { label: 'New Task', href: '/newtask' },
    ]; 

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
        <Link href="/"><FcTodoList /></Link>
        <ul className="flex space-x-6">
            {links.map( link => 
                <Link 
                key={link.href}
                // if link.href === currentPath, set the class to 'text-green-500', otherwise set it to 'text-zinc-500'
                // className={`${link.href === currentPath ? 'text-green-500' : 'text-zinc-500'} text-zinc-500 hover:text-blue-500 transision-colors` }
                className={classNames({
                    'text-green-500': link.href === currentPath,
                    'text-zinc-500': link.href !== currentPath,
                    'hover:text-blue-500 transition-colors': true 
                })}
                href={ link.href }>{ link.label }</Link>
            )}
            
        </ul>
    </nav>
  )
}

export default NavBar