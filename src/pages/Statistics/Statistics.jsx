import React from 'react';
import { statistics } from '../../assets/data';
import '../../assets/style/style.css';

const Statistics = () => {
    return (
        <div id='statistic' className="mx-auto max-w-screen-lg">
            <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 heading_style'>Numbers that actually matter</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center py-8'>
                {statistics.map((statistic, index) => (
                    <div key={index} className="flex flex-col">
                        <img src={statistic.img} alt="image" className="w-24 h-24 mb-4 bg-blue-100 rounded-full" />
                        <h6 className="text-lg font-bold mb-2">{statistic.title}</h6>
                        <p className="text-base font-medium text-gray-400 w-full">{statistic.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Statistics;
