// Experience.jsx

import React from 'react';

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import php from "../assets/php.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import tailwindcss from "../assets/tailwindcss.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import laravel from "../assets/laravel.png";
import github from "../assets/github.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: 'HTML', style: 'bg-gray-700', link: 'https://www.w3schools.com/html/default.asp' },
    { id: 2, src: css, title: 'CSS', style: 'bg-gray-700', link: 'https://www.w3schools.com/css/default.asp' },
    { id: 3, src: javascript, title: 'JavaScript', style: 'bg-gray-700', link: 'https://www.w3schools.com/js/default.asp' },
    { id: 4, src: php, title: 'PHP', style: 'bg-gray-700', link: 'https://www.w3schools.com/php/default.asp' },
    { id: 5, src: mongodb, title: 'MongoDB', style: 'bg-gray-700', link: 'https://www.w3schools.com/mongodb/index.php' },
    { id: 6, src: mysql, title: 'MySQL', style: 'bg-gray-700', link: 'https://www.w3schools.com/mysql/default.asp' },
    { id: 7, src: bootstrap, title: 'Bootstrap', style: 'bg-gray-700', link: 'https://www.w3schools.com/bootstrap/bootstrap_ver.asp' },
    { id: 8, src: tailwindcss, title: 'Tailwind CSS', style: 'bg-gray-700', link: 'https://tailwindcss.com/' },
    { id: 9, src: react, title: 'React', style: 'bg-gray-700', link: 'https://reactjs.org/' },
    { id: 10, src: laravel, title: 'Laravel', style: 'bg-gray-700', link: 'https://laravel.com/' },
    { id: 11, src: git, title: 'Git', style: 'bg-gray-700', link: 'https://www.w3schools.com/git/default.asp' },
    { id: 12, src: github, title: 'GitHub', style: 'bg-gray-700', link: 'https://github.com/' },
  ];
  const openTechLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white mb-8'>
        <div>
          <b className='text-4xl font-bold border-b-4 p-2 border-blue-500 inline mb-2 md:mb-8'>Experience</b>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style, link }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style} bg-white`}>
              <img src={src} alt="" className='w-20 mx-auto mb-4' />
              <div className="flex flex-col items-center">
                <b className='mb-2'>{title}</b>
                <button
                  onClick={() => openTechLink(link)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                >
                  Learn
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
