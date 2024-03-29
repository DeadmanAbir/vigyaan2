import React, { useState } from 'react';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const questions = [
        {
            question: "What is Vigyaan 2024?",
            answer: "Vigyaan 2024 is a science fest organised at GGSIPU Dwarka Campus.",
        },
        {
            question: "How to register and participate in Vigyaan Hackathon?",
            answer: "To participate in Vigyaan Hackathon register on devfolio.",
        },
        {
            question: "When is the Vigyaan Hackathon?",
            answer: "The Vigyaan hackathon is in Mid of April.",
        },
    ];

    return (
        <>
            <div className="bg-black text-white py-5 px-4 text-center">
                <h3 className="text-5xl font-bold mb-4">FAQs</h3>
            </div>
            <div className="w-full bg-black space-y-2">
                {questions.map((item, index) => (
                    <div key={index} className="border mx-40 border-gray-600 rounded">
                        <div
                            className="px-4 py-2 flex justify-between items-center cursor-pointer bg-gray-800"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="text-gray-200 pl-5">{item.question}</span>
                            <span className={`transform transition-transform ${index === activeIndex ? 'rotate-180' : ''} text-white w-8 h-8 flex items-center justify-center`}>
                                &#8964;
                            </span>
                        </div>
                        {index === activeIndex && (
                            <div className="px-4 py-2 bg-gray-700">
                                <p className="text-gray-200 pl-5">{item.answer}</p>
                            </div>
                        )}
                    </div>

                ))}
            </div>
            <div className="h-3 bg-black"></div>


        </>
    );
};

export default Accordion;
