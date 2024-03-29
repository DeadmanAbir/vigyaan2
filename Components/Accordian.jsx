import React, { useState } from 'react';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const questions = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces.",
        },
        {
            question: "What is JSX?",
            answer: "JSX is a syntax extension for JavaScript which allows writing HTML-like structures in your JavaScript code.",
        },
        {
            question: "What is state in React?",
            answer: "State is a built-in object in React used for containing the local state of a component.",
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
