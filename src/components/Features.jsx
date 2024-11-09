import React from 'react';
import { Link } from 'react-router-dom';
function Features(props) {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-green-800 mb-8">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

                    <div className="feature-card">
                        <img src="/api/placeholder/100/100" alt="Care Plant" className="mb-4" />
                        <h3 className="text-xl font-bold text-green-700 mb-4">Care Plant</h3>
                        <p className="text-gray-700">From Seed to Bloom - Track Your Plants with Planto</p>
                    </div>
                    <div className="feature-card">
                        <img src="/api/placeholder/100/100" alt="Plant Encyclopedia" className="mb-4" />
                        <h3 className="text-xl font-bold text-green-700 mb-4">Plant Encyclopedia</h3>
                        <p className="text-gray-700">Access a comprehensive database of plants and their care needs</p>
                    </div>
                    <Link to={"/add-plant"} className="feature-card">
                        <img src="/api/placeholder/100/100" alt="Scan Plant" className="mb-4" />
                        <h3 className="text-xl font-bold text-green-700 mb-4">Scan Plant</h3>
                        <p className="text-gray-700">Scan any plant to instantly unlock detailed information and care tips</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Features;