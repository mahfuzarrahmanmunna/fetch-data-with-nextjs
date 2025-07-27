import MealSearchInput from "./components/MealSearchInput";

const MealsPage = async ({ searchParams }) => {
    const query = await searchParams;
    console.log(query);

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
            const data = await res.json(); // ✅ await here
            // setMeals(data?.meals || []);
            return data?.meals || [];
        } catch (error) {
            console.error('Failed to fetch meals:', error);
            return [];
        }
    };

    const meals = await fetchMeals();


    return (
        <div className="p-4">
            <div className="flex justify-center">
                <MealSearchInput />
            </div>

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
                <p>No meals found for</p>
            )}
        </div>
    );
};

export default MealsPage;
