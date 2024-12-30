export default function PopQuiz() {
    return (
        <div className="black-box">
            <p>Q1: What do props help us accomplish?</p>
            <p className="bg-slate-700">Make a component more reusable.</p>
            <p>Q2: How do you pass a prop into a component?</p>
            <p className="bg-slate-700">Just like an attribute in html tag.</p>
            <p>
                Q3: Can I pass a custom prop (e.g. blahblahblah={"{"}true{"}"})
                to a native DOM element? (e.g. {"<div blahblahblah={true}>"})
                Why or why not?
            </p>
            <p className="bg-slate-700">
                No, because a native DOM element transforms into a real DOM
                element by React and Real DOM element only have the specified
                attributes provided by HTML.
            </p>
            <p>
                Q4: How do I receive props in a component?
                <br />
                function Navbar() {"{ return ("}
                <br />
                {"<header>"}
                <br />
                ...
                <br />
                {"</header>"}
                <br />
                {")}"}
            </p>
            <p className="bg-slate-700">By using a parameter like 'Navbar(props)'. And access it using a . like 'props.name'.</p>
            <p>Q5: What data type is props when the component receives it?</p>
            <p className="bg-slate-700">An Object!</p>
        </div>
    );
}
