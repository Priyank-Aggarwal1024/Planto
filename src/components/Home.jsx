import React from 'react';
import Features from './Features';
import About from './About';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <>
            <section className="hero-section">
                <div className="max-w-4xl mx-auto text-center">
                    <h1>Grow and Care Your Plants with Ease</h1>
                    <p>A simple web application to track, manage, and care for your plants. Grow a greener tomorrow!</p>
                    <Link to="/signup" className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300">Get Started</Link>
                </div>
            </section>
            <Features />
            <About />
        </>
    );
}

export default Home;