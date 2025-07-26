'use client';
import React, { useEffect, useState } from 'react';

const MealsPage = () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState(''); // default value to show some results

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json(); // ✅ await here
            setMeals(data?.meals || []);
            return data?.meals || [];
        } catch (error) {
            console.error('Failed to fetch meals:', error);
            return [];
        }
    };

    useEffect(() => {
        fetchMeals();
    }, [search]);

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search meals..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border px-4 py-2 rounded mb-4 w-full max-w-sm"
            />

            {meals?.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="border p-4 rounded shadow">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded mb-2" />
                            <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
                            <p className="text-sm text-gray-600">{meal.strArea} - {meal.strCategory}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No meals found for "{search}"</p>
            )}
        </div>
    );
};

export default MealsPage;
