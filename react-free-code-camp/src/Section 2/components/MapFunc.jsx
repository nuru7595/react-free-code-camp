export default function MapFunc() {
    const num = [1, 2, 3, 4, 5];
    const square = num.map((x) => x * x + " ");
    // Next;
    const names = ["alice", "bob", "charlie", "danielle"];
    const capitalized = names.map((x) => x[0].toUpperCase() + x.slice(1) + " ");
    // Next;
    const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
    const bolded = pokemon.map((x) => `<b>${x}</b> `);

    return (
        <div className="black-box">
            <p>Given Array: 1 2 3 4 5</p>
            <p className="bg-slate-700">Square of the Array: {square}</p>
            <p>Given Names: alice bob charlie danielle</p>
            <p className="bg-slate-700">
                Capitalized first letter of the Names: {capitalized}
            </p>
            <p>Given Pokemon: Bulbasaur Charmander Squirtle</p>
            <p className="bg-slate-700">Covered with b tag: {bolded}</p>
        </div>
    );
}
