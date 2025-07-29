'use client'

import React, { useEffect, useState } from 'react';

// export const dynamic = "force-dynamic"

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://nextjs-data-fetching-wine.vercel.app/api/items');
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        console.log("Deleting product:", id);
        try {
            await fetch(`https://nextjs-data-fetching-wine.vercel.app/api/items/${id}`, {
                method: 'DELETE',
            });
            setProducts(prev => prev.filter(p => p._id !== id));
        } catch (error) {
            console.error('Failed to delete:', error);
        }
    };

    return (
        <div>
            <h1>Products Page</h1>
            <ul>
                {products.map(item => (
                    <li key={item._id}>
                        {item.productName}
                        <button
                            onClick={() => handleDelete(item._id)}
                            className='ms-10 mx-2 my-1 bg-gray-800 px-4 rounded active:bg-gray-400 active:text-gray-900 cursor-pointer'
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;
