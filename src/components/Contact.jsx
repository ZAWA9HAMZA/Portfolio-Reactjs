//Contact.jsx

import React from 'react'
import Footer from './Footer';
const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black 
    to-gray-800 p-4 text-white' >
      <div className='flex flex-col p-4 justify-center
      max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4
          border-blue-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/74c18d19-0bc8-4479-8313-eadcffe01bd5" 
            method='POST'
            className='flex flex-col w-full md:w-1/2'>
            <input type="text" name="name" placeholder='Enter your full name' className='p-2 bg-transparent border-2 rounded-md text-white
            focus:outline-none' />

            <input type="text" name="email" placeholder='Enter your email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white
            focus:outline-none' />

            <textarea name="message"  placeholder="Enter your message:" rows="10" className='p-2
            bg-transparent border-2 rounded-md text-white focus:outline-none
            '></textarea>

            <button className='text-white bg-gradient-to-b from-blue-950 to-blue-500 px-3 my-8 mx-auto flex
            items-center rounded-md hover:scale-110 duration-300'>
             Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
   
  )
  
}

export default Contact