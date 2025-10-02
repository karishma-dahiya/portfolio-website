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
import dsawebsite from './assets/projects/dsawebsite.png'

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
      name: 'BooksApp',
      description: 'React.js-powered web application that simplifies book discovery, featuring search, filtering, saving, and customizable settings functionalities, all with a sleek Bootstrap interface',
      tech: ['ReactJS', 'Tailwind CSS', 'API'],
      live: 'https://booksearchapp40.web.app/',
      github: 'https://github.com/karishma-dahiya/BooksApp',
      img: booksapp,
    },
    {
      name: 'Student Faculty Dashboard',
      description: 'A user-friendly platform designed for student, faculty, and admin access. Faculty members can schedule classes and assign courses, while students can view their classes. Credentials: admin- abc@gmail.com abc1234, faculty- jack@gmail.com jack1234, student- james@gmail.com james1234 ',
      tech: ['ReactJS', 'Node.js', 'Express.js', 'Bootstrap', 'MongoDB'],
      live: 'https://classadmindashboard.web.app/login',
      github: '#',
      img: dashboard,
    },
    {
      name: 'Direct Selling Agency (DSA) Website',
      description: 'A simple website featuring Home, About, EMI Calculator, and Contact Us pages for a Direct Selling Agency.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      live: 'https://realturity.vercel.app/', // Add the live link if deployed
      github: '#', // Add GitHub repo link if available
      img: dsawebsite, // Replace with the actual image variable
    },
    {
      name: 'Landing Page for CA website',
      description: 'Landing page for CA website with a sleek Bootstrap and Tailwind interface',
      tech: ['ReactJS', 'Tailwind CSS', 'Bootstrap'],
      live: 'https://calandingpage.web.app/',
      github: '#',
      img: landing,
    },
    {
      name: 'Restaurant Web Application',
      description: 'React.js-powered web application with different food items to choose from and cart functionality and a sleek interface. ',
      tech: ['ReactJS', 'Tailwind CSS'],
      live: '#',
      github: 'https://github.com/karishma-dahiya/BooksApp',
      img: restaurant,
    },
   
    {
      name: 'Car Rental Website',
      description: 'Php-powered responsive website which allows users to find the best Paying Guest across major Indian cities.',
      tech: ['PHP', 'HTML5', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
      live: 'https://kaarzz.000webhostapp.com/',
      github: '#',
      img: carsapp,
    },
  ];
  return (
    <>
      <NavbarComp/>
      <div id='home' className='relative flex flex-col gap-6 sm:gap-0 sm:flex-row sm:justify-between sm:px-10 justify-center items-center bg-[#fff3ea] w-screen min-h-96  '>
      
        <div>
         <h1 className='mt-5 text-3xl font-bold sm:mt-0 sm:text-5xl '>Hey!, I'm Karishma</h1>
        <div className='my-3 text-2xl font-bold sm:text-3xl'>I am a <span className='text-secondaryclr'>{text}</span></div>
        </div>
        <div className=''>
          <img className='h-60 sm:h-full ' src={girl} alt='girl'/>
        </div>
      </div>
      <div id='about' className='flex justify-center py-10 bg-white sm:gap-20 max-w-screen'>
        <div className='hidden sm:flex'>
          <img className='' src={girl2} alt='girl'/>
        </div>
        <div className='px-10 sm:px-1 sm:me-10'>
          <h5 className='my-3 text-xl font-bold sm:text-start sm:text-3xl'>About Me</h5>
          <p className='text-sm sm:text-lg max-w-96'>As a full-stack developer, I offer more than just skills. I bring a commitment to excellence and a passion for innovation to every project. With a track record of turning ideas into impactful solutions, I'm ready to contribute my expertise to your team. Let's build something extraordinary together.</p>
          <a href='https://drive.google.com/file/d/1vhvLeJX_J-NYZBecUsOJ94SgR8yEBKqA/view?usp=drive_link' className='my-2'>
            <button className='p-2 my-3 text-lg font-medium text-white rounded-md hover:shadow-md hover:bg-orange-500 bg-secondaryclr'>Resume</button>
          </a>
        </div>
      </div>
      <hr/>
      <div id='skills' className='flex flex-col items-center justify-center p-8  max-w-screen'>
        <h5 className='my-3 text-xl font-bold sm:text-3xl'>Skills</h5>
        <div className='flex flex-wrap justify-center gap-3 my-3 sm:max-w-[60%]'>
          {skills.map((a,ind)=>(
            <button key={ind} className='p-2 font-medium text-gray-500 bg-white border rounded-md hover:shadow hover:bg-slate-50 hover:border-2 sm:text-lg'>{a}</button>
          ))}
        </div>
      </div>
      <hr/>
      <div id='projects' className='bg- p-5 flex justify-center items-center flex-col bg-[#fff3ea] max-w-screen'>
          <h5 className='my-3 text-xl font-bold sm:text-3xl'>Projects</h5>
          <div className='flex flex-wrap justify-center gap-4 my-3 '>
            {projects.map((a,ind)=>(
              <div key={ind} className='flex flex-col transition-all duration-150 ease-in-out bg-white border rounded-md sm:max-w-96 max-w-72 hover:translate-x-px hover:translate-y-1 '>
                <img className='sm:max-w-96 max-w-72' src={a.img} alt='img'/>
                <h3 className='my-2 font-bold text-center'>{a.name}</h3>
                <p className='mx-4 my-2 text-sm text-wrap'>{a.description}</p>
                <div className='flex flex-wrap gap-2 mx-4 text-sm text-blue-500'>
                  {a.tech.map((t,ind)=>(
                    <p key={ind} className='p-1 border rounded-sm'>{t}</p>
                  ))}
                </div>
                <div className='flex gap-3 mx-4 my-3'>
                <a href={a.github} target="_blank" rel="noopener noreferrer">
                 <p className='p-2 font-medium text-white border rounded-md hover:shadow-md hover:bg-orange-500 bg-secondaryclr'>GitHub</p>
                </a>
                <a href={a.live} target="_blank" rel="noopener noreferrer">
                 <p className='p-2 font-medium text-white border rounded-md hover:shadow-md hover:bg-orange-500 bg-secondaryclr'>Live</p>
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
