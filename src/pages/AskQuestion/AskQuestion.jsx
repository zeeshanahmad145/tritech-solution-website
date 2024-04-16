import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { faqs } from '../../assets/data';
import '../../assets/style/style.css';

const AskQuestion = () => {
    const [hoveredFaq, setHoveredFaq] = useState(null);
    const [selectedFaq, setSelectedFaq] = useState(null);

    const toggleAnswer = (index) => {
        setSelectedFaq(selectedFaq === index ? null : index);
    };

    return (
        <div id='faqs'>

            <div className="flex justify-center items-center py-12 mb-8">
                <div className="text-center w-5/6">
                    <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-12 heading_style">Frequently Asked Questions (FAQs)</h2>
                    <div className="max-w-screen-xl mx-auto px-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b">
                                <div
                                    className={`py-2 ${selectedFaq === index || hoveredFaq === index ? 'bg-gray-50' : ''}`} /* className={`py-2 ${selectedFaq === index ? 'bg-gray-50' : (hoveredFaq === index ? 'bg-gray-50' : '')}`} */
                                    onClick={() => toggleAnswer(index)}
                                    onMouseEnter={() => setHoveredFaq(index)}
                                    onMouseLeave={() => setHoveredFaq(null)}
                                >
                                    <div className="flex justify-between items-center cursor-pointer px-2">
                                        <h3 className="text-lg font-bold">{faq.question}</h3>
                                        {selectedFaq === index ? (
                                            <IoIosArrowUp className="text-blue-500" />
                                        ) : (
                                            <IoIosArrowDown className="text-gray-500" />
                                        )}
                                    </div>
                                    {faq.question_1 && ( /* Show question_1 below the question without space */
                                        <div className={`text-left cursor-pointer px-2`}>
                                            <h4 className="mb-2 text-sm font-normal">{faq.question_1}</h4>
                                        </div>
                                    )}
                                </div>
                                {faq.answer && selectedFaq === index && ( /* Show answer only when question is clicked */
                                    <div>
                                        <p className="mb-4 text-sm font-normal text-gray-500 text-left px-2">{faq.answer}</p>
                                    </div>
                                )}
                                {faq.answer_1 && selectedFaq === index && ( /* Show answer_1 only when question is clicked */
                                    <div>
                                        <p className="mb-4 text-sm font-normal text-gray-500 text-left px-2">{faq.answer_1}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AskQuestion;
