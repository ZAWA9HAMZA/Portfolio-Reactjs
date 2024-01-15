// Home.jsx

import React from 'react';
import HamzaImage from '../assets/hamzapic2.jpeg';
import { LuArrowRightCircle } from 'react-icons/lu';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full flex-grow">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-8">
            I'm a <span className="text-blue-500">Full Stack Developer</span>
          </h2>
          <b className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ut odit maxime animi? Corporis, laudantium!
          </b>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-7 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-800 to-blue-300 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <LuArrowRightCircle size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src={HamzaImage}
            alt="my profile"
            className="ro-2xl mx-auto hover:transform hover:scale-110 transition-transform duration-300 border border-white rounded-md"
            style={{ width: '100%', height: 'auto', maxWidth: '280px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
