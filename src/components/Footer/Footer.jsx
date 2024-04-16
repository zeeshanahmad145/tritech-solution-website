import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Logo from '../..//assets/images/tritech-logo-vertical.png';

const footerData = [
    {
        title: "About",
        links: [
            "Privacy Policy",
            "Term of Use",
            "Our Company",
            "Careers",
            "Work with us"
        ]
    },
    {
        title: "Contact",
        links: [
            "Customer Service",
            "Live Chat"
        ]
    },
    {
        title: "Connect",
        links: [
            "Facebook",
            "LinkdIn",
            "Instagram",
            "TikTok"
        ]
    },
    {
        title: "Subscribe",
        links: [
            "Design Subscription",
            "Development Subscription",
            "Design+Development Subscription",
            "Customer Offer Request"
        ]
    },
    {
        title: "Affiliate",
        links: [
            "Register as Affiliate",
            "FAQS"
        ]
    }
];

const Footer = () => {
    const scrollToTop = () => {
        const home_page = document.getElementById('home');
        if (home_page) {
            home_page.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-color1 text-white py-10">
            <div className="flex justify-between items-center px-4 mb-2">
                <div>
                    <img src={Logo} alt="logo" className="h-12" />
                </div>
                <div className="text-right flex items-center cursor-pointer" onClick={scrollToTop}>
                    <h6 className="inline-block text-sm font-medium">
                        Return to top
                    </h6>
                    <span className="ml-1 text-sm"><FaArrowUp /></span>
                </div>
            </div>

            <hr className="mx-6" />

            <div className="mx-auto max-w-screen-lg text-gray-300 mt-4 mb-4">
                <div className="flex flex-wrap justify-center">
                    {footerData.map((column, index) => (
                        <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/5 px-4 mb-4">
                            <h3 className="mb-4 text-xl font-bold">{column.title}</h3>
                            <ul>
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="mb-2">
                                        <a href="#" className="text-sm font-medium">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="mx-6" />

            <div className="flex flex-col items-start h-full text-gray-300 mt-4 pl-6">
                <p className="text-xs">Copyright &copy; 2024, Tritech Solution (Pvt) Ltd</p>
                <p className="text-xs">Copyright &copy; 2024, Tritech Solution LLC</p>
            </div>
        </div>
    );
}

export default Footer;
