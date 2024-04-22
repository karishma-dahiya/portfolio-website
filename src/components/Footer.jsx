import React from 'react'
import git from '../assets/githublogo.png'
import linkedin from '../assets/linkedin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='bg-[#101010] w-full py-5 '>
      <div className='flex flex-col px-10 sm:justify-between'>
        <div className='flex justify-center flex-wrap gap-3'>
          <a className='text-white hover:underline' href='#home'>Home</a>
          <a className='text-white hover:underline' href='#about'>About</a>
          <a className='text-white hover:underline' href='#skills'>Skills</a>
          <a className='text-white hover:underline' href='#projects'>Projects</a>

        </div>
        <div className='flex flex-wrap mt-5 gap-2 flex-col items-center '>
           
              <div className='text-gray-500 hover:underline'><FontAwesomeIcon className='me-1 text-xl' style={{color:'#6b7280'}} icon={faEnvelope} /> 9992248920</div>
              <div className='text-gray-500 hover:underline'><FontAwesomeIcon className='me-1 text-xl' style={{color:'#6b7280'}} icon={faPhone} /> karishma.dahiya22@gmail.com</div>
           
              <div className='flex gap-3 justify-center'>
                <a href='https://github.com/karishma-dahiya' target="_blank" rel="noopener noreferrer">
                  <img className='h-10 hover:h-[42px]' src={git} alt='github'/>
                </a>
                <a href='https://www.linkedin.com/in/karishma-dahiya-310199219/' target="_blank" rel="noopener noreferrer">
                  <img className='h-6 mt-2 hover:h-[26px]' src={linkedin} alt='linkedin'/>
                </a>
              </div>
           
        </div>
      </div>
        
        <hr className='text-white w-full my-3 mt-5'/>
        <p className='text-center text-gray-500 '>&copy; Copyright Karishma | All Rights Reserved</p>
    </div>
  )
}

export default Footer