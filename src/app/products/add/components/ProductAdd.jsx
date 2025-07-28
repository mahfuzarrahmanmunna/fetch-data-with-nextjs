'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProductAdd = () => {
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const payload = { productName };

        try {
            const res = await fetch('http://localhost:3000/api/items', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await res.json();
            console.log(result);

            if (res.ok) {
                // alert("Product added successfully!");
                form.reset(); // clear the input field
                router.push('/products')
            } else {
                alert("Failed to add product.");
            }
        } catch (error) {
            console.error("Error submitting product:", error);
            alert("Error submitting product.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add product"
                    name="productName"
                    className="bg-gray-700 px-4 py-2 rounded mr-4"
                    required
                />
                <button
                    type="submit"
                    className="text-center px-4 py-2 bg-gray-700 rounded active:bg-gray-500 hover:bg-gray-900 cursor-pointer"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ProductAdd;
