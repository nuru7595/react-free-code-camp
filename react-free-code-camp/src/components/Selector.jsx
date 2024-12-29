export default function Selector({ myProps }) {
    const newFunc = (x) => {
        myProps(x.target.value);
    }
    return (
        <section className="bg-cyan-500 px-3">
            <select className="w-full bg-cyan-500 text-dark py-3 outline-none cursor-pointer font-bold" onChange={newFunc}>
                <option value="Details">Information</option>
                <option value="Sec1">Section 1: Static Pages</option>
            </select>
        </section>
    );
}
