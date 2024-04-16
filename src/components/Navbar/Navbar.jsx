import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { navigation } from '../../assets/data';
import { FaArrowUp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const handleScrollTo = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="bg-color1 py-1 fixed bottom-8 left-0 right-0 z-10 w-11/12 sm:w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 mx-auto rounded-full border-2">
            <nav className="flex justify-center">
                <ul className="flex w-full rounded-lg overflow-hidden">
                    {navigation.map((item, index) => (
                        <li key={index} className={`flex-1 ${index === 0 || index === navigation.length - 1 ?
                            'rounded-full' : ''} ${index === 0 || index === navigation.length - 1 ?
                                'bg-blue-200 bg-opacity-20' : 'bg-color1'} flex justify-center items-center mx-1 hover:bg-blue-400 rounded-full cursor-pointer`} onClick={() => handleScrollTo(item.href)}>
                            {item.name === "Home" ? (
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className={`text-white flex items-center text-xs sm:text-xs md:text-sm lg:text-sm font-bold justify-center py-1 
                                    ${index === 0 ? 'font-bold' : ''}`}
                                >
                                    <FaArrowUp />
                                </Link>
                            ) : item.name === "Login" ? (
                                <RouterLink
                                    to={item.href}
                                    className={`text-white block py-1 text-xs sm:text-xs md:text-sm lg:text-sm font-bold
                                    ${index === 0 ? 'font-semibold' : ''}`}
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    {item.name}
                                </RouterLink>
                            ) : (

                                <Link
                                    activeClass="active"
                                    to={item.href}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className={`text-white block py-2 text-xs sm:text-xs md:text-sm lg:text-sm font-bold
                                    ${index === 0 ? 'font-semibold' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
