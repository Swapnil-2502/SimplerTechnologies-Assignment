import { Link } from "react-router-dom";
import logo from "../assets/3.webp";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* This is the Company logo & Name */}
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="image" className="w-10 h-10 object-contain"/>
                        <span className="font-bold">Simpler Technologies</span>
                    </div>

                    {/* Navbar in Desktop View */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
                        <Link to="/about" className="hover:text-blue-400 transition">About</Link>
                        <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
                        <Link to="/signup" className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition">Sign Up</Link>
                    </div>

                    {/* Mobile View of Navbar */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-gray-400 focus:outline-none"
                        >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* This is the Drop Down menu for Mobile View */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2">
                    <Link to="/" className="block hover:text-blue-400 transition">Home</Link>
                    <Link to="/about" className="block hover:text-blue-400 transition">About</Link>
                    <Link to="/contact" className="block hover:text-blue-400 transition">Contact</Link>
                    <Link to="/signup" className="block bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition w-fit">Sign Up</Link>
                </div>
            )}
        </div>
    )
}

export default Navbar