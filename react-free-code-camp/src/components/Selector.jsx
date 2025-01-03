export default function Selector({ myProps }) {
    const newFunc = (x) => {
        myProps(x.target.value);
    };
    return (
        <section className="bg-cyan-500 px-3">
            <select
                className="w-full bg-cyan-500 py-3 outline-none cursor-pointer font-bold"
                onChange={newFunc}
                defaultValue={"Sec4"}
            >
                <option value="Details">Information</option>
                <option value="Sec1">Section 1: Static Pages</option>
                <option value="Sec2">Section 2: Data-Driven React</option>
                <option value="Sec3">Section 3: React State</option>
                <option value="Sec4">Section 4: Side Effects</option>
            </select>
        </section>
    );
}
