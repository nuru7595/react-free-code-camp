export default function Selector(props) {
    const newFunc = (x) => {
        props.selector(x.target.value);
    };
    return (
        <section className="bg-cyan-500 px-3">
            <select
                className="w-full bg-cyan-500 py-3 outline-none cursor-pointer font-bold"
                onChange={newFunc}
                defaultValue={props.default}
            >
                <option value="Details">Information</option>
                <option value="Sec1">Section 1: Static Pages</option>
                <option value="Sec2">Section 2: Data-Driven React</option>
                <option value="Sec3">Section 3: React State</option>
                <option value="Sec4">Section 4: Side Effects</option>
                <option value="Sec5">Capstone Project 1: Tenzies Game</option>
                <option value="Sec6">
                    Capstone Project 2: Assembly: End Game
                </option>
            </select>
        </section>
    );
}
