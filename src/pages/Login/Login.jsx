import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../../assets/images/tritech-logo2.png';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col sm:flex-row h-screen">
            <div className="bg-color1 flex justify-center items-center sm:w-2/5 py-4">
                <img src={Logo} alt="logo" className='w-60 h-auto'/>
            </div>

            <div className="flex justify-center items-center sm:w-3/5 p-8">
                <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">Login to manage your account</h3>
                    <p className="text-base font-normal mb-4">Enter your email and we will send you a link directly<br/> to your customer portal.</p>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <input type="email" placeholder="Enter Email" className="block w-full border-2 rounded px-3 py-2" />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block mb-1">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} placeholder="Enter Password" className="block w-full border-2 rounded px-3 py-2" />
                            <button type="button" className="absolute inset-y-0 right-0 px-3 py-2" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEye className="h-6 w-6 text-gray-400" /> : <FaEyeSlash className="h-6 w-6 text-gray-400" />}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <button className="bg-color1 hover:bg-blue-400 text-white font-bold py-2 px-3 rounded w-full">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
