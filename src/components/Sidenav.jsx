import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import {GrLogin} from 'react-icons/gr'
import Login from './Login'

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    const toggleLinks = () => {
        setShowLinks(!showLinks);
      };

  return (
    <div>
        <AiOutlineMenu 
        onClick={handleNav} 
        className='absolute top-4 right-5 z-[50] md:hidden '/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/50 flex flex-col justify-center items-center z-20 filter: blur(64px) ease-in duration-200'>
                    <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Homez</span>
                    </a>
                    <a href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20} />
                        <span className='pl-4'>Work</span>
                    </a>
                    <a href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20} />
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsPerson size={20} />
                        <span className='pl-4'>Resume</span>
                    </a>
                    <a href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Contact</span>
                    </a>
                    <a href="#login" className='w-[75%] flex justify-center items-center rounded-none shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer ease-in duration-200'>
                        <GrLogin size={20} />
                        <span className='pl-4' onClick={toggleLinks}><Login /></span>
                        </a>
                </div>
                    ) 
                
                    :('')}
                    
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrProjects size={20} />
                    </a>
                    <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={20} />
                    </a>
                    <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPerson size={20} />
                    </a>
                    <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={20} />
                    </a>
                </div>
                <div>
                </div>
            </div>
    </div>
  )
}

export default Sidenav
