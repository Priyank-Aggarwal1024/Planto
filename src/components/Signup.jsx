import React from 'react';

function Signup(props) {
    return (
        <section id="signup" className="bg-white py-20">
            <div className="max-w-md mx-auto form-container">
                <h2 className="text-3xl font-bold text-green-800 mb-8">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input type="text" id="name" name="name" className="bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:outline-none focus:ring focus:border-green-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" className="bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:outline-none focus:ring focus:border-green-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                        <input type="password" id="password" name="password" className="bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:outline-none focus:ring focus:border-green-500" required />
                    </div>
                    <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300 w-full">Sign Up</button>
                </form>
            </div>
        </section>
    );
}

export default Signup;