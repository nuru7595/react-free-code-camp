import { useState } from "react";

export default function Main() {
    const [ingredients, setIngredients] = useState([
        "Beef",
        "Onion",
        "Oregano",
        "Tomato",
    ]);
    const items = ingredients.map((x) => {
        return <li key={x}>{x}</li>;
    });
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
    //
    const [recipeShown, setRecipeShown] = useState(false);
    const handleClick = () => {
        setRecipeShown((prev) => !prev);
    };

    return (
        <main className="p-4">
            <h2 className="text-center text-red-500">In Development!</h2>
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
                <>
                    <h2 className="px-0">Ingredients on hand:</h2>
                    <ol className="list-decimal list-inside">{items}</ol>
                    {ingredients.length > 3 ? (
                        <div className="flex flex-col sm:flex-row items-center bg-slate-300 p-3 rounded-md mt-8 gap-2">
                            <div>
                                <h2>Ready for a recipe?</h2>
                                <p>
                                    Generate a recipe from your list of
                                    ingredients.
                                </p>
                            </div>
                            <button
                                onClick={handleClick}
                                className="bg-orange-400 text-white rounded-md p-2"
                            >
                                Get a recipe
                            </button>
                        </div>
                    ) : null}
                </>
            ) : null}
            {/* Getting a recipe */}
            {recipeShown ? (
                <div>
                    <h2 className="px-0">Suggested recipe:</h2>
                    <p className="px-0">
                        Based on the ingredients you have available, I would
                        recommend making a simple a delicious Beef Bolognese
                        Pasta. Here is the recipe:
                    </p>
                    <h3 className="px-0">Ingredients:</h3>
                    <ul className="list-disc list-inside">
                        <li>1 lb. ground beef</li>
                        <li>1 onion, diced</li>
                        <li>3 cloves garlic, minced</li>
                        <li>2 tablespoons tomato paste</li>
                        <li>1 (28 oz) can crushed tomatoes</li>
                        <li>1 cup beef broth</li>
                        <li>1 teaspoon dried oregano</li>
                        <li>1 teaspoon dried basil</li>
                        <li>Salt and pepper to taste</li>
                        <li>
                            8 oz pasta of your choice (e.g., spaghetti, penne,
                            or linguine)
                        </li>
                    </ul>
                    <h3 className="px-0">Instructions:</h3>
                    <ol className="list-decimal list-inside">
                        <li>
                            Bring a large pot of salted water to a boil for the
                            pasta.
                        </li>
                        <li>
                            In a large skillet or Dutch oven, cook the ground
                            beef over medium-high heat, breaking it up with a
                            wooden spoon, until browned and cooked through,
                            about 5-7 minutes.
                        </li>
                        <li>
                            Add the diced onion and minced garlic to the skillet
                            and cook for 2-3 minutes, until the onion is
                            translucent.
                        </li>
                        <li>Stir in the tomato paste and cook for 1 minute.</li>
                        <li>
                            Add the crushed tomatoes, beef broth, oregano, and
                            basil. Season with salt and pepper to taste.
                        </li>
                        <li>
                            Reduce the heat to low and let the sauce simmer for
                            15-20 minutes, stirring occasionally, to allow the
                            flavors to meld.
                        </li>
                        <li>
                            While the sauce is simmering, cook the pasta
                            according to the package instructions. Drain the
                            pasta and return it to the pot.
                        </li>
                        <li>
                            Add the Bolognese sauce to the cooked pasta and toss
                            to combine.
                        </li>
                        <li>
                            Serve hot, garnished with additional fresh basil or
                            grated Parmesan cheese if desired.
                        </li>
                    </ol>
                </div>
            ) : null}
        </main>
    );
}
