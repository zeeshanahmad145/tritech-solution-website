import React from 'react';
import image from "../../../assets/images/portfolio/Greenwend.png";
import '../../../assets/style/style.css';

const GreenWind = () => {
    return (
        <div className="bg-color4 py-10 px-10 md:px-0">
            <div className="mx-auto md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center text-white md:text-left md:w-3/4 sm:w-full leading-normal">
                        <h4 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-black mb-4 heading_style">Green Wend Energy</h4>
                        <p className="text-xl sm:text-lg md:text-xl lg:text-xl font-medium py-2">
                            GreenWendEnergy is a Pakistan based Solar Energy Solytions provider.
                            Titech Solutions (Private) Limited is a digital technolog 
                            partern and provides all software development services ranging 
                            from Website Development, Mobile App Development to providing support 
                            in Business Processes Outsourcing and so on.
                        </p>
                    </div>
                    <div className="relative overflow-hidden">
                        <img src={image} alt="image" className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 h-auto mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GreenWind;
