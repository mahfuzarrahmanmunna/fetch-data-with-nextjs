"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export const fetchSingleMeals = async (id) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        return data?.meals || [];
    } catch (error) {
        console.error("Failed to fetch meals:", error);
        return [];
    }
};

export async function generateMetadatas({ params }) {
    // read route params
    const { id } = await params

    // fetch data
    const product = await fetchSingleMeals(id)
    console.log(product);

    return {
        title: product.strMeal,
    }
}

const SingleMealsPage = () => {
    const params = useParams();
    const id = params?.id;
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const loadMeal = async () => {
            const data = await fetchSingleMeals(id);
            setMeals(data);
            setLoading(false);
        };

        loadMeal();
    }, [id]);

    if (!id || loading) {
        return <div className="text-center p-10 text-blue-600 font-semibold">Loading...</div>;
    }

    if (meals.length === 0) {
        return <div className="text-center p-10 text-red-500 font-semibold">No meal found for ID "{id}".</div>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">{meals[0]?.strMeal}</h1>
            <div className="rounded-xl shadow-lg p-4 bg-white hover:shadow-2xl transition">
                <img
                    src={meals[0]?.strMealThumb}
                    alt={meals[0]?.strMeal}
                    className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{meals[0]?.strMeal}</h2>
                <p className="text-sm text-gray-600">{meals[0]?.strCategory} - {meals[0]?.strArea}</p>
                <p className="text-sm mt-2 text-gray-700">{meals[0]?.strInstructions}</p>
            </div>
        </div>
    );
};

export default SingleMealsPage;
