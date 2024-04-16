import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Projects from '../Projects/Projects';
import ClientLogos from '../ClienLogos/ClientLogos';
import Portfolio from '../Portfolio/Portfolio';
import Statistics from '../Statistics/Statistics';
import MemberShip from '../MemberShip/MemberShip';
import AskQuestion from '../AskQuestion/AskQuestion';
import Footer from '../../components/Footer/Footer';
import Logo from '../../assets/images/tritech-logo1.png';
import '../../assets/style/style.css';

const Home = () => {
    const handleScrollToMembership = () => {
        const membershipSection = document.getElementById('member_ship');
        if (membershipSection) {
            window.scrollTo({
                top: membershipSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <Navbar />

            <div id='home'>
                <div className="flex flex-col items-center justify-start min-h-screen bg_image">
                    <div className="py-4 md:py-8 lg:py-8">
                        <img src={Logo} alt="logo" className="w-32 md:w-48 lg:w-80 h-auto" />
                    </div>

                    <div className="text-center py-12 md:py-12 lg:py-12">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-950 max-w-4xl mx-auto heading_style">
                            An Agency with Unlimited<br /> Possibilities
                        </h1>
                        <p className="text-sm md:text-lg lg:text-3xl text-gray-900 font-normal py-8 md:py-8 max-w-lg lg:max-w-4xl mx-auto">
                            Unlock Unlimited Development with a single monthly<br /> subscription
                        </p>
                        <div className="py-2 md:py-4">
                            <button className="bg-color1 hover:bg-blue-400 text-white text-xs md:text-sm lg:text-base font-bold py-1 md:py-2 lg:py-2 px-4 md:px-8 lg:px-16 rounded" onClick={handleScrollToMembership}>
                                See Plans
                            </button>
                        </div>
                    </div>
                </div>

                <Projects />
                <ClientLogos />
                <Statistics />
                <MemberShip />
                <Portfolio />
                <AskQuestion />
                <Footer />

            </div>
        </>
    );
}

export default Home;
