import React from 'react';
import AgapeAct from './components/AgapeActs';
import AutoMaximizer from './components/AutoMaximizer';
import GreenWend from './components/GreenWend';
import '../../assets/style/style.css';

const Portfolio = () => {
    return (
        <div id='portfolio' className='py-8'>
            <div className='flex justify-center'>
                <div className='text-center'>
                    <h2 className='text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-8 heading_style'>Recent Projects</h2>
                </div>
            </div>

            <AgapeAct />
            <AutoMaximizer />
            <GreenWend />
        </div>

    );
}

export default Portfolio;
