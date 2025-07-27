'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MealSearchInput = () => {
    // const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url)
    }, [search]);
    return (
        <div>
            <input
                type="text"
                placeholder="Search meals..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border px-4 py-2 rounded mb-4 w-full max-w-sm"
            />
        </div>
    );
};

export default MealSearchInput;