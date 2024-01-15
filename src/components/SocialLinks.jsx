// SocialLinks.jsx

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={20} /> <span className="logo-text">Linkedin</span>
        </>
      ),
      href: 'https://www.linkedin.com/in/hamza-ezzouek-a99aa327a/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={20} /> <span className="logo-text">GitHub</span>
        </>
      ),
      href: 'https://github.com/ZAWA9HAMZA',
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={20} /> <span className="logo-text">Mail</span>
        </>
      ),
      href: 'mailto:hamzazawak2003@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={20} /> <span className="logo-text">Resume</span>
        </>
      ),
      href: '/hamza zawak cv.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className='hidden md:flex flex-col top-[35%] left-0 fixed'>
      <ul className="md:mr-6">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              `flex justify-start items-center h-14 px-1 bg-gradient-to-r from-blue-800 to-blue-300 px-0 hover:mr-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`
            }
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-white p-4 relative transition-transform transform-gpu hover:translate-x-2'
              download={download}
              target='_blank'
              rel="noreferrer"
            >
              <span className="logo-only">
                {child.props.children[0]} {/* Afficher uniquement le logo */}
              </span>
              <span className="logo-text">
                {child.props.children[1]} {/* Afficher le texte du logo au survol */}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
