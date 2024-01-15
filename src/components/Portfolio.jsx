// Portfolio.jsx

import React from 'react';
import pp from '../assets/portfolio/pp.png';
import todolist from '../assets/portfolio/todolist.png';
import webshop from '../assets/portfolio/webshop.png';
import weatherapp from '../assets/portfolio/weather.png';
import prj1 from '../assets/portfolio/prj1.png';
import figma from '../assets/portfolio/figma.png';

const Portfolio = () => {
  const portfolio = [
    { id: 1, src: pp },
    { id: 2, src: todolist },
    { id: 3, src: webshop },
    { id: 4, src: weatherapp },
    { id: 5, src: prj1 },
    { id: 6, src: figma },
  ];

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white md:h-screen '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <b className='text-4xl font-bold border-b-4 p-2  border-blue-500 inline mb-4 md:mb-8'>Portfolio</b>
          <p className='py-6'>Check my projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolio.map(({ id, src }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
