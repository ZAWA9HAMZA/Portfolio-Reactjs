//About.jsx

import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h4 className='text-4xl font-bold inline border-b-4 border-blue-900'>About</h4>
        </div>
        <b className='text-xl mt-20'>   
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores, harum vel in, quia delectus
          error minus, commodi blanditiis ratione 
          similique laudantium omnis expedita cumque quaerat quo 
          eius illo ipsam. At.
        </b>

        <br />

        <b className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos aperiam itaque, vitae impedit odio recusandae accusantium.
          Commodi voluptas vitae adipisci enim illo numquam vero quos, 
          libero odio deserunt, at esse magnam. Autem alias impedit eum ut.
          Itaque nisi voluptas eaque.
        </b>
      </div>
    </div>
  );
}

export default About;
