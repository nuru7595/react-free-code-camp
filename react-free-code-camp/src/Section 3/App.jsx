import ChangingStateQuiz from "./components/ChangingStateQuiz";
import ComplexStateArrays from "./components/ComplexStateArrays";
import EventListener from "./components/EventListener";
import Header from "./components/Header";
import Main from "./components/Main";
import StatePractice from "./components/StatePractice";
import Ternary from "./components/Ternary";
import UseState from "./components/UseState";

export default function App() {
    return (
        <>
            <h3 className="title">
                Section 3: React State <br /> Project: Chef Claude
            </h3>
            <hr />
            <hr />
            <h4>Challenge: 1, 4, 5, 18</h4>
            <Header />
            <Main />
            <hr />
            <hr />
            <h4>Challenge: 2, 3</h4>
            <EventListener />
            <hr />
            <hr />
            <h4>Challenge: 6, 7</h4>
            <UseState />
            <hr />
            <hr />
            <h4>Challenge: 8, 9, 10, 11</h4>
            <StatePractice />
            <hr />
            <hr />
            <h4>Challenge: 12 - Changing State Quiz</h4>
            <ChangingStateQuiz />
            <hr />
            <hr />
            <h4>Challenge: 13, 14, 15</h4>
            <Ternary />
            <hr />
            <hr />
            <h4>Challenge: 16, 17</h4>
            <ComplexStateArrays />
            <hr />
            <hr />
            <h4>Challenge: 19</h4>
            <div className="black-box p-4">
                <h2>Coming Soon . . .</h2>
            </div>
        </>
    );
}
