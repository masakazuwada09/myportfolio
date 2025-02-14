import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
            <p className="text-lg text-gray-600 mt-4">Feel free to reach out for collaboration or questions.</p>
            <a href="mailto:email@example.com" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Email Me
            </a>
        </section>
    );
};

export default Contact;
