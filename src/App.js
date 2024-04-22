import React, { useState, useEffect } from 'react';
import './App.css';
import NavbarComp from './components/Navbar';

import Footer from './components/Footer';

import girl2 from './assets/girl2.png'
import girl from './assets/girl.gif'
import booksapp from './assets/projects/booksapp.png'
import restaurant from './assets/projects/restaurant.png'
import landing from './assets/projects/landing.png'
import dashboard from './assets/projects/admin.png'
import carsapp from './assets/projects/carweb.png'

function App() {
  const [text, setText] = useState('');

  const typingSpeed = 100;
  const pauseBeforeNextPhrase = 3000; 

  useEffect(() => {
    const phrases = ['Full Stack Developer', 'Programmer']; 
    let currentIndex = 0;
    let currentText = '';
    let intervalId;
  
    const type = () => {
      if (currentIndex < phrases.length) {
        if (currentText.length < phrases[currentIndex].length) {
          currentText += phrases[currentIndex].charAt(currentText.length);
          setText(currentText);
          intervalId = setTimeout(type, typingSpeed);
        } else {
          currentIndex++;
          currentText = '';
          setTimeout(type, pauseBeforeNextPhrase);
        }
      } else {
        currentIndex = 0; 
        setTimeout(type, 5000);
      }
    };
  
    type();
  
    return () => clearTimeout(intervalId);
  }, []);

  const skills = ['JavaScript','HTML','CSS','React.js','React Native','Node.js','Express','Redux','MongoDB','MySQL','Git','Tailwind']
  const projects = [
    {
      name:'BooksApp',
      description:'React.js-powered web application that simplifies book discovery, featuring search, filtering, saving, and customizable settings functionalities, all with a sleek Bootstrap interface',
      tech:['ReactJS','Tailwind CSS','API'],
      live:'https://booksearchapp40.web.app/',
      github:'https://github.com/karishma-dahiya/BooksApp',
      img:booksapp,
    },
    {
      name:'Student Faculty Dashboard',
      description:'A user-friendly platform designed for student, faculty, and admin access. Faculty members can schedule classes and assign courses, while students can view their classes. Credentials: admin- abc@gmail.com abc1234, faculty- jack@gmail.com jack1234, student- james@gmail.com james1234 ',
      tech:['ReactJS','Node.js','Express.js','Bootstrap','MongoDB'],
      live:'https://classadmindashboard.web.app/login',
      github:'#',
      img:dashboard,
    },
    {
      name:'Restaurant Web Application',
      description:'React.js-powered web application with different food items to choose from and cart functionality and a sleek interface. ',
      tech:['ReactJS','Tailwind CSS'],
      live:'#',
      github:'https://github.com/karishma-dahiya/BooksApp',
      img:restaurant,
    },
    {
      name:'Landing Page for CA website',
      description:'Landing page for CA website with a sleek Bootstrap and Tailwind interface',
      tech:['ReactJS','Tailwind CSS','Bootstrap'],
      live:'https://calandingpage.web.app/',
      github:'#',
      img:landing,
    },
    {
      name:'Car Rental Website',
      description:'Php-powered responsive website which allows users to find the best Paying Guest across major Indian cities.',
      tech:['PHP','HTML5','CSS','Bootstrap','JavaScript','MySQL'],
      live:'https://kaarzz.000webhostapp.com/',
      github:'#',
      img:carsapp,
    },
  ]
  return (
    <>
      <NavbarComp/>
      <div id='home' className='relative flex flex-col gap-6 sm:gap-0 sm:flex-row sm:justify-between sm:px-10 justify-center items-center bg-[#fff3ea] w-full min-h-96  '>
      
        <div>
         <h1 className='text-3xl mt-5 sm:mt-0 sm:text-5xl font-bold '>Hey!, I'm Karishma</h1>
        <div className='my-3 text-2xl sm:text-3xl font-bold'>I am a <span className='text-secondaryclr'>{text}</span></div>
        </div>
        <div className=''>
          <img className='h-60 sm:h-full ' src={girl} alt='girl'/>
        </div>
      </div>
      <div id='about' className='flex bg-white py-10 justify-center sm:gap-20'>
        <div className='hidden sm:flex'>
          <img className=' ' src={girl2} alt='girl'/>
        </div>
        <div className='px-10 sm:px-1 sm:me-10'>
          <h5 className='text-xl  sm:text-start font-bold sm:text-3xl my-3'>About Me</h5>
          <p className='text-sm sm:text-lg max-w-96'>As a full-stack developer, I offer more than just skills. I bring a commitment to excellence and a passion for innovation to every project. With a track record of turning ideas into impactful solutions, I'm ready to contribute my expertise to your team. Let's build something extraordinary together.</p>
          <a href='https://drive.google.com/file/d/14CvqeHY-K_ZWydLEs6i3ZY2sSee9GZwg/view?usp=sharing' className='my-2'>
            <button className='my-3 text-lg font-medium text-white hover:shadow-md hover:bg-orange-500 bg-secondaryclr p-2 rounded-md'>Resume</button>
          </a>
        </div>
      </div>
      <hr/>
      <div id='skills' className=' flex flex-col justify-center items-center p-8'>
        <h5 className='text-xl sm:text-3xl my-3 font-bold'>Skills</h5>
        <div className='flex flex-wrap justify-center gap-3 my-3 sm:max-w-[60%]'>
          {skills.map((a,ind)=>(
            <button key={ind} className='border hover:shadow hover:bg-slate-50 hover:border-2 sm:text-lg bg-white font-medium rounded-md p-2 text-gray-500'>{a}</button>
          ))}
        </div>
      </div>
      <hr/>
      <div id='projects' className='bg- p-5 flex justify-center items-center flex-col bg-[#fff3ea]'>
          <h5 className='text-xl sm:text-3xl my-3 font-bold'>Projects</h5>
          <div className=' flex my-3 flex-wrap justify-center gap-4 '>
            {projects.map((a,ind)=>(
              <div key={ind} className='border bg-white sm:max-w-96 max-w-72 flex flex-col rounded-md hover:translate-x-px hover:translate-y-1 duration-150 transition-all ease-in-out '>
                <img className='sm:max-w-96 max-w-72' src={a.img} alt='img'/>
                <h3 className='my-2 text-center font-bold'>{a.name}</h3>
                <p className='text-wrap   text-sm mx-4 my-2'>{a.description}</p>
                <div className='flex mx-4 gap-2 text-blue-500 text-sm'>
                  {a.tech.map((t,ind)=>(
                    <p key={ind} className='border p-1 rounded-sm'>{t}</p>
                  ))}
                </div>
                <div className='my-3 gap-3 flex mx-4'>
                <a href={a.github} target="_blank" rel="noopener noreferrer">
                 <p className='rounded-md border hover:shadow-md hover:bg-orange-500 p-2 bg-secondaryclr font-medium text-white'>GitHub</p>
                </a>
                <a href={a.live} target="_blank" rel="noopener noreferrer">
                 <p className='rounded-md border hover:shadow-md hover:bg-orange-500 p-2 bg-secondaryclr font-medium text-white'>Live</p>
                </a>
                </div>
              </div>
            ))}
          </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
