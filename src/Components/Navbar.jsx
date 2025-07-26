'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Post', path: '/post' },
    { name: 'Meals', path: '/meals' },
    { name: 'Services', path: '/services' },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    MyBrand
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-gray-200 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.path} className="hover:text-blue-600 transition">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        className="focus:outline-none"
                    >
                        {/* SVG Icon */}
                        <svg
                            className="w-6 h-6 text-gray-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-gray-950 shadow-md px-4 pb-4">
                    <ul className="space-y-2 text-gray-200 mx-6 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.path}
                                    className="block py-2 hover:text-blue-600 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
