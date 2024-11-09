import React from 'react';

function About(props) {
    return (
        <section id="about" className="bg-green-100 py-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-green-800 mb-8">About Planto</h2>
                <p className="text-lg text-gray-700 mb-8">
                    At Planto, we believe that nurturing and caring plants brings joy and fulfillment. Our app is designed to make plant care accessible, easy, and fun for everyone, from beginners to expert gardeners.
                </p>
                <a href="#contact" className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300">Contact Us</a>
            </div>
        </section>
    );
}

export default About;