import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

    const handleNav = () => {
        setNav(!nav);
    };

    const scrollToSection = (id) => {
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById(id);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setNav(false);
    };

    return (
        <div>
            <AiOutlineMenu 
                onClick={handleNav} 
                className='absolute top-4 right-5 z-[50] md:hidden cursor-pointer'
            />
            
            {nav && (
                <div className='fixed w-full h-screen bg-white/50 flex flex-col justify-center items-center z-20 ease-in duration-200'>
                    <button 
                        onClick={() => scrollToSection('/')} 
                        className='text-xl py-2 px-4 flex items-center hover:bg-gray-200 rounded-lg'
                    >
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </button>
                    <button 
                        onClick={() => scrollToSection('work')} 
                        className='text-xl py-2 px-4 flex items-center hover:bg-gray-200 rounded-lg'
                    >
                        <GrProjects size={20} />
                        <span className='pl-4'>Work</span>
                    </button>
                    <button 
                        onClick={() => scrollToSection('projects')} 
                        className='text-xl py-2 px-4 flex items-center hover:bg-gray-200 rounded-lg'
                    >
                        <AiOutlineProject size={20} />
                        <span className='pl-4'>Projects</span>
                    </button>
                    <button 
                        onClick={() => scrollToSection('resume')} 
                        className='text-xl py-2 px-4 flex items-center hover:bg-gray-200 rounded-lg'
                    >
                        <BsPerson size={20} />
                        <span className='pl-4'>Resume</span>
                    </button>
                    <button 
                        onClick={() => scrollToSection('contact')} 
                        className='text-xl py-2 px-4 flex items-center hover:bg-gray-200 rounded-lg'
                    >
                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Contact</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Sidenav;
