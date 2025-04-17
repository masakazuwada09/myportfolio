import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Resume</h1>
            <a href="/resume.pdf" download className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Download Resume
            </a>
        </section>
    );
};

export default Resume;
