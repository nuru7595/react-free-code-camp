export default function UseEffectQuiz() {
    return (
        <div className="black-box">
            <p>
                Q1: In what way are React components meant to be "pure
                functions"?
            </p>
            <p className="bg-slate-700">
                A1: React components are meant to be pure functions because they
                return the same output for the same input (props) and do not
                produce side effects during rendering. This makes components
                predictable, reusable, and easier to test.
            </p>
            <p>Q2: What is a "side effect" in React? What are some examples?</p>
            <p className="bg-slate-700">
                A2: Any code that affects or interacts with an outside system.
                Examples: LocalStorage, API, Websockets, DOM manipulation etc.
            </p>
            <p>Q3: What is NOT a "side effect" in React? Examples?</p>
            <p className="bg-slate-700">
                A3: Anything that React is in charge of. Examples: DOM Element,
                State etc.
            </p>
            <p>
                Q4: When does React run your useEffect function? When does it
                NOT run the effect function?
            </p>
            <p className="bg-slate-700">
                A4: 1. As soon as the component renders for the first time.{" "}
                <br />
                2. On every re-render of the component. <br />
                3. If you use dependencies it will not run on every re-render of
                the component, instead only when the dependencies will change.
            </p>
            <p>Q5: How would you explain what the "dependencies array" is?</p>
            <p className="bg-slate-700">
                A5: The second parameter of the useEffect().
            </p>
        </div>
    );
}
