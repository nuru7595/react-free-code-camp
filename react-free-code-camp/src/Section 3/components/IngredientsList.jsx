export default function IngredientsList(props) {
    const items = props.ingredients.map((x) => {
        return <li key={x}>{x}</li>;
    });

    return (
        <>
            <h2 className="px-0">Ingredients on hand:</h2>
            <ol className="list-decimal list-inside">{items}</ol>
            {props.ingredients.length > 3 ? (
                <div className="flex flex-col sm:flex-row items-center justify-between bg-slate-300 px-8 py-4 rounded-md my-6">
                    <div>
                        <h2>Ready for a recipe?</h2>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button
                        onClick={props.handleClick}
                        className="bg-orange-400 text-white rounded-md p-2 text-nowrap"
                    >
                        Get a recipe
                    </button>
                </div>
            ) : null}
        </>
    );
}
