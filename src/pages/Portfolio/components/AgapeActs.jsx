import React from "react";
import image from "../../../assets/images/portfolio/agape-acts.png";
import '../../../assets/style/style.css';

const AgapeAct = () => {
    return (
        <div className="bg-color2 py-10 px-10 md:px-0">
            <div className="mx-auto md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center text-white md:text-left md:w-3/4 sm:w-full leading-normal">
                        <h4 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-black mb-4 heading_style">Agape Acts</h4>
                        <p className="text-xl sm:text-xl md:text-lg lg:text-xl font-medium py-2">
                            AgapeActs: Connect with charities and make a difference. From
                            volunteering to donating, you can easily support causes that
                            align with your values. Make an impact with AgapeActs.
                        </p>
                    </div>
                    <div className="relative overflow-hidden">
                        <img src={image} alt="image" className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 h-auto mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgapeAct;
