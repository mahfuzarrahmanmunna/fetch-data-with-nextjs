'use client';
import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-bold text-blue-600">404</h1>
            <p className="mt-4 text-xl text-gray-700">Oops! Page not found.</p>
            <p className="text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
            <Link href="/">
                <span className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Go Home
                </span>
            </Link>
        </div>
    );
};

export default Custom404;
