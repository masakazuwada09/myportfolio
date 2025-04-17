import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-bold">Doctor-Patient App</h3>
                    <p className="text-gray-600">A hospital management system with prescription and lab features.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-bold">Portfolio Website</h3>
                    <p className="text-gray-600">A modern portfolio built with React and Tailwind CSS.</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
