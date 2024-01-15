// NavBar.jsx

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-6 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2 text-white hover:text-blue-900">Z-code</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium text-white hover:text-white hover:bg-blue-900 transition-colors duration-300 ${
              nav ? 'bg-blue-900' : ''
            }`}
            style={{ borderRadius: '8px' }}
          >
            <ScrollLink to={link} smooth duration={500}>
              {link}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-blue-900 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl hover:underline transition-all duration-300`}
              style={{ borderRadius: '8px' }}
            >
              <ScrollLink onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
