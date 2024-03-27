import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center justify-end">
      <div className="cursor-pointer" onClick={toggleMenu}>
        <AiOutlineMenu className="w-6 h-6 text-gray-800" />
      </div>
      {isOpen && (
        <div className="absolute top-0 right-0 mt-8 w-40 bg-white shadow-lg rounded">
          <ul>
            <li className="py-2 px-4 border-b border-gray-200">Menu Item 1</li>
            <li className="py-2 px-4 border-b border-gray-200">Menu Item 2</li>
            <li className="py-2 px-4 border-b border-gray-200">Menu Item 3</li>
            <li className="py-2 px-4">Menu Item 4</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
