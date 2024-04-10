import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header(){
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex justify-between px-3 py-2 bg-primary">
            <a className="flex text-2xl text-primary2" href="#">
                VSBEC
            </a> 
            <nav className="hidden md:block">
                <ul className="flex text-lg text-primary2">
                    <li>
                        <a className="mr-5" href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="mr-5" href="#about">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a className="mr-5" href="#place">
                            Placement details
                        </a>
                    </li>
                    <li>
                        <a className="mr-5" href="#courses">
                            Our Courses
                        </a>
                    </li>
                    <li>
                        <a className="mr-5" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
    
            {toggleMenu && 
                <nav className="block md:hidden">
                    <ul className="flex flex-col text-primary mobile-nav">
                        <li>
                            <a className="mr-5" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="mr-5" href="#about">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a className="mr-5" href="#place">
                            Placement details
                            </a>
                        </li>
                        <li>
                            <a className="mr-5" href="#courses">
                                Our Courses
                            </a>
                        </li>
                        <li>
                            <a className="mr-5" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            }
            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
                <Bars3Icon className='text-primary2 h-5'/>
            </button>
        </header>
    );
} 