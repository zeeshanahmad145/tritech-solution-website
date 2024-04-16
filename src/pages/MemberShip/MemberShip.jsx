import React from 'react';
import { Link } from 'react-router-dom';
import { member_ship } from '../../assets/data';
import { LuPencilRuler } from "react-icons/lu";
import { RiInfinityLine } from "react-icons/ri";
import { TbDeviceMobileCode } from "react-icons/tb";
import { IoIosCheckmark } from "react-icons/io";
import '../../assets/style/style.css';

const MemberShip = () => {
    return (
        <div id='member_ship' className="mx-auto max-w-screen-lg py-8">
            <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 heading_style'>Membership Plans</h2>
            <p className='text-base font-medium text-gray-600 mb-4'>Choose a plan that's right for you.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center py-8 px-0.5 sm:px-0.5'>
                {member_ship.map((member, index) => (
                    <div key={index} className='bg-white rounded shadow-md p-2 relative border'>
                        <div className="flex items-center justify-between">
                            <h4 className='text-xl font-normal'>{member.title}</h4>
                            <div className="flex flex-col items-center relative">
                                {index === 0 ? <LuPencilRuler className='text-color1 text-2xl' /> : index === 1 ? <TbDeviceMobileCode className='text-color1 text-2xl' /> : <RiInfinityLine className='text-color1 text-2xl' />}
                                {index === member_ship.length - 1 && (
                                    <div className="bg-orange-600 absolute text-white font-medium px-1 rounded-full text-xs -mt-3 mr-2" style={{ whiteSpace: 'nowrap' }}>
                                        15% off
                                    </div>
                                )}
                            </div>
                        </div>


                        <h2 className='text-2xl font-bold mb-2 heading_style'>{member.price}</h2>

                        <div className="flex justify-center mb-2">
                            <Link to={member.subscribeLink} target="_blank" rel="noopener noreferrer">
                                <button className='bg-color1 hover:bg-blue-400 text-white text-sm font-bold py-2 px-16 rounded'>
                                    Subscribe
                                </button>
                            </Link>
                        </div>

                        <Link to="https://calendly.com/tritech-solutions/onboard?month=2024-03" target="_blank" rel="noopener noreferrer"
                            className='text-center text-sm font-normal block underline mb-4 curser-pointer'>Book a call
                        </Link>

                        <hr className="w-full my-4 border-t-1 border-gray-300" />

                        <div className='p-4'>
                            <h4 className='text-base font-semibold'>{member.sub_title}</h4>
                            {member.desc.map((line, index) => (
                                <div key={index} className='flex items-center'>
                                    <div className="flex-shrink-0 mr-2">
                                        <IoIosCheckmark className='text-base text-gray-500' />
                                    </div>
                                    <p className='text-lg font-normal text-gray-500'>{line}</p>
                                </div>

                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MemberShip;
