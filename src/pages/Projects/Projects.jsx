import React, { useState, useEffect } from 'react';
import { projects } from '../../assets/data';

const Projects = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollDirection(currentScrollY > scrollPosition ? 'down' : 'up');
            setScrollPosition(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    const imageWidth = 200;
    const totalImages = projects.length;
    const containerWidth = totalImages * imageWidth;

    let translateXValue;
    if (scrollDirection === 'down') {
        translateXValue = -containerWidth / 3;
    } else {
        translateXValue = 0;
    }

    return (
        <div id='projects'>
            <div className="overflow-hidden">
                <div className={`flex justify-between transition-transform duration-1000 transform`} style={{ transform: `translateX(${translateXValue}px)` }}>
                    {projects.map((project, index) => (
                        <img
                            key={index}
                            src={project.image}
                            alt={`Project ${index + 1}`}
                            className="object-cover mx-2 hover:scale-110 transition-transform duration-200 sm:w-32 md:w-32 lg:w-48 xl:w-64"
                            style={{ width: window.innerWidth < 600 ? '7rem' : window.innerWidth <= 700 ? '9rem' : '' }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
