import App from "./App";
import FunFacts from "./components/FunFacts";
import MainContent from "./components/MainContent";
import Page from "./components/Page";

export default function ReactFacts() {
    return (
        <section>
            <h3 className="title">
                Section 1: Static Pages <br /> Project: ReactFacts Site
            </h3>
            <hr />
            <h4>Challenge: 1</h4>
            <div className="black-box">
                <p>Hello React!</p>
            </div>
            <hr />
            <h4>Challenge: 2</h4>
            <div className="black-box">
                <p className="pb-0">Why I am excited to be learning React:</p>
                <div className="p-2">
                    <ul className="slate-box">
                        <li>
                            React is widely used by top companies, making it a
                            valuable skill.
                        </li>
                        <li>
                            Build apps faster with modular, reusable components.
                        </li>
                        <li>
                            React’s Virtual DOM makes your apps fast and
                            responsive.
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <h4>Challenge: 3</h4>
            <MainContent />
            <hr />
            <h4>Challenge: 4</h4>
            <div className="black-box">
                <p>Skipped! This can't be shown here.</p>
            </div>
            <hr />
            <h4>Challenge: 5</h4>
            <FunFacts />
            <hr />
            <h4>Challenge: 6 - Pop Quiz</h4>
            <div className="black-box">
                <p>
                    Q1: Where does React put all of the elements I create in JSX
                    when I call 'root.render()'?
                </p>
                <p className="bg-slate-700">
                    A1: Well, it's depend where I set the location. By default
                    it is in a 'div' with id name 'root'.
                </p>
                <p>
                    Q2: What would show up in my console if I were to run this
                    line of code:
                    <br />
                    console.log(&lt;h1&gt;Hello world!&lt;/h1&gt;)
                </p>
                <p className="bg-slate-700">A2: An Object!</p>
                <p>
                    Q3: What's wrong with this code:
                    <br />
                    root.render(
                    <br />
                    &lt;h1&gt;Hi there&lt;/h1&gt;
                    <br />
                    &lt;p&gt;This is my website!&lt;/p&gt;
                    <br />)
                </p>
                <p className="bg-slate-700">
                    A3: React can't render multiple elements. We always have to
                    wrap our all elements into a single element.
                </p>
                <p>
                    Q4: What does it mean for something to be "declarative"
                    instead of "imperative"?
                </p>
                <p className="bg-slate-700">
                    A4: Imperative means we need to give step-by-step
                    instructions to complete a task.
                    <br />
                    On the other hand, Declarative means we just need to tell
                    what we want to show, the tool or React will handle the
                    progress on how to do that.
                </p>
                <p>Q5: What does it mean for something to be "composable"?</p>
                <p className="bg-slate-700">
                    A5: Composable means some small pieces of reusable codes or
                    something that could be join together to make a large
                    application.
                </p>
            </div>
            <hr />
            <h4>Challenge: 7, 9, 10, 11, 12</h4>
            <Page />
            <hr />
            <h4>Challenge: 8 - Custom Components Quiz</h4>
            <div className="black-box">
                <p>Q1: What is a React Component?</p>
                <p className="bg-slate-700">
                    React Component is a Function that returns React Elements.
                </p>
                <p>
                    Q2: What's wrong with this code?
                    <br />
                    function myComponent() {"{"}
                    <br />
                    return (<br />
                    &lt;small&gt;I'm tiny text!&lt;/small&gt;
                    <br />){"}"}
                </p>
                <p className="bg-slate-700">
                    A2: Function name or Component Name should start with
                    Capital Letter.
                </p>
                <p>
                    Q3: What's wrong with this code?
                    <br />
                    function Header() {"{"}
                    <br />
                    return (
                    <br />
                    &lt;header&gt;
                    <br />
                    &lt;img src="./react-logo.png" width="40px" alt="React Logo"
                    /&gt;
                    <br />
                    &lt;/header&gt;
                    <br />){"}"}
                    <br />
                    root.render(Header())
                </p>
                <p className="bg-slate-700">
                    A3: In JSX we need to call a function like a Self Closing
                    HTML Tag.
                </p>
            </div>
            <hr />
            <h4>Challenge: Final Project</h4>
            <App />
        </section>
    );
}
