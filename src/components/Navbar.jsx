import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className="bg-green-600 p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
                <div className="text-2xl font-bold">
                    <Link to="/">Planto</Link>
                </div>
                <div className="space-x-6 text-lg">
                    <Link to="/features" className="hover:text-green-200 transition duration-300">Features</Link>
                    <Link to="/about" className="hover:text-green-200 transition duration-300">About</Link>
                    <Link to="/signup" className="hover:text-green-200 transition duration-300">Sign Up</Link>
                    <Link to="/login" className="hover:text-green-200 transition duration-300">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;