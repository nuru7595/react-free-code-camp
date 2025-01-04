import "./App.css";
import FetchingData from "./components/FetchingData";
import Header from "./components/Header";
import Main from "./components/Main";
import StateAndEffectPractices from "./components/StateAndEffectPractices";
import UseEffectQuiz from "./components/UseEffectQuiz";

export default function App() {
    return (
        <>
            <h3 className="title">
                Section 4: Side Effects <br /> Project: Meme Generator
            </h3>
            <hr />
            <hr />
            <h4>Challenge: 1, 2, 8, 15</h4>
            <Header />
            <Main />
            <hr />
            <hr />
            <h4>Challenge: 3, 4, 6, 7</h4>
            <FetchingData />
            <hr />
            <hr />
            <h4>Challenge: 5 - Use Effect Quiz</h4>
            <UseEffectQuiz />
            <hr />
            <hr />
            <h4>Challenge: 9, 10, 11, 12, 13, 14</h4>
            <StateAndEffectPractices />
        </>
    );
}
