import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const handleSubmit = (formData) => {
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

    const [recipe, setRecipe] = useState("");
    const getRecipe = async () => {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    };

    return (
        <main className="p-4">
            <form
                action={handleSubmit}
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
            {ingredients.length > 0 ? (
                <IngredientsList
                    ingredients={ingredients}
                    handleClick={getRecipe}
                />
            ) : null}
            {recipe ? <ClaudeRecipe recipe={recipe} /> : null}
        </main>
    );
}
