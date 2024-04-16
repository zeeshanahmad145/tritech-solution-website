import React from 'react';
import { client_logos } from '../../assets/data';

const ClientLogos = () => {
    return (
        <div id='clientLogos' className='overflow-hidden my-32 bg-color1'>
            <div className='flex animate-marquee'>
                {client_logos.map((item, index) => (
                    <img
                        key={index}
                        src={item.logo}
                        alt={`Logo ${index}`}
                        className="w-20 h-20 object-contain mx-8 filter brightness-0 invert"
                    />
                ))}
            </div>
        </div>
    );
};

export default ClientLogos;
