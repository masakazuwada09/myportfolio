import React from 'react';

const Home = () => {
    return (
        <section id="/" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to My Portfolioz</h1>
            <p className="text-lg text-gray-600 mt-4">Software Developer specializing in React & Laravel</p>
            <a href="/projects" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                View My Work
            </a>
        </section>
    );
};

export default Home;
