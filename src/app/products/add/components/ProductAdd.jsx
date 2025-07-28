'use client'
import React from 'react';

const ProductAdd = () => {
    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target;
        const productName = form.value;
        const payload = { productName };
        const res = await fetch('http://localhost:3000/api/items', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            }
        });
        const result = await res.json();
        console.log(result);
        console.log(e.target.productName.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='add-product' name="productName" id="" className='bg-gray-700 px-4 py-2 rounded mr-4' />
                <button type='submit' className='text-center px-4 py-2 bg-gray-700 rounded active:bg-gray-500 hover:bg-gray-900 cursor-pointer'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ProductAdd;