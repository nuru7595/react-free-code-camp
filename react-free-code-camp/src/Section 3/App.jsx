import ChangingStateQuiz from "./components/ChangingStateQuiz";
import ComplexStateArrays from "./components/ComplexStateArrays";
import ComplexStateObjects from "./components/ComplexStateObjects";
import ConditionalRendering from "./components/ConditionalRendering";
import ConditionalRenderingPractice from "./components/ConditionalRenderingPractice";
import ConditionalRenderingQuiz from "./components/ConditionalRenderingQuiz";
import EventListener from "./components/EventListener";
import FormBasics from "./components/FormBasics";
import Header from "./components/Header";
import Main from "./components/Main";
import MiniQuiz from "./components/MiniQuiz";
import PassingDataAroundReact from "./components/PassingDataAroundReact";
import SoundPad from "./components/SoundPad";
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
            <h4>Challenge: 1, 4, 5, 18, 25, 34, 35, 36, 37, 38, 39, 53, 54, 56, 16 (Section 4)</h4>
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
            <h4>Challenge: 8, 9, 10, 11, 40</h4>
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
            <h4>Challenge: 19, 20, 21, 22, 41</h4>
            <ComplexStateObjects />
            <hr />
            <hr />
            <h4>Challenge: 23, 24, 26, 27</h4>
            <FormBasics />
            <hr />
            <hr />
            <h4>Challenge: 28, 29</h4>
            <ConditionalRendering />
            <hr />
            <hr />
            <h4>Challenge: 30, 31, 32</h4>
            <ConditionalRenderingPractice />
            <hr />
            <hr />
            <h4>Challenge: 33 - Conditional Rendering Quiz</h4>
            <ConditionalRenderingQuiz />
            <hr />
            <hr />
            <h4>Challenge: 42</h4>
            <PassingDataAroundReact />
            <hr />
            <hr />
            <h4>Challenge: 43, 44, 45, 46, 47, 48, 49, 50, 51, 52</h4>
            <SoundPad />
            <hr />
            <hr />
            <h4>Challenge: 55 - Mini-Quiz</h4>
            <MiniQuiz />
        </>
    );
}
