import { useState } from "react";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const items = ingredients.map((x) => {
        return <li key={x}>{x}</li>;
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        setIngredients((prev) => {
            if (newIngredient !== "") {
                return [
                    ...prev,
                    newIngredient[0].toUpperCase() + newIngredient.slice(1),
                ];
            } else {
                return [...prev];
            }
        });
    };

    return (
        <main className="p-4">
            <form
                onSubmit={handleSubmit}
                className="flex-col sm:flex-row flex justify-center items-center gap-3 py-10"
            >
                <input
                    className="bg-white border-2 border-slate-300 rounded-lg p-2 flex-grow max-w-96"
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    aria-label="Add Ingredient"
                />
                <button className="bg-dark text-white border-2 border-dark p-2 rounded-lg text-nowrap flex-grow max-w-56">
                    + Add Ingredient
                </button>
            </form>
            <h2 className="px-0">Ingredients on hand:</h2>
            <ol className="list-decimal list-inside">{items}</ol>
        </main>
    );
}
