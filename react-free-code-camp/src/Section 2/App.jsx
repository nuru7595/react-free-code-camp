import Header from "./components/Header";
import Entry from "./components/Entry";
import NotReusable from "./components/NotReusable";
import Contact from "./components/Contact";
import PopQuiz from "./components/PopQuiz";
import Jokes from "./components/Jokes";
import MapFunc from "./components/MapFunc";
import Arrays from "./components/Arrays";
import MapQuiz from "./components/MapQuiz";
import data from "./components/Data";

export default function App() {
    const entryComponents = data.map((x) => {
        return <Entry key={x.id} {...x} />;
    });

    return (
        <>
            <h3 className="title">
                Section 2: Data-Driven React <br /> Project: Travel Journal
            </h3>
            <hr />
            <hr />
            <h4>Challenge: 1, 2, 12, 19, 20</h4>
            <div>
                <Header />
                {entryComponents}
            </div>
            <hr />
            <hr />
            <h4>Challenge: 3, 4</h4>
            <NotReusable />
            <hr />
            <hr />
            <h4>Challenge: 5, 6, 7, 9</h4>
            <Contact />
            <hr />
            <hr />
            <h4>Challenge: 8 - Pop Quiz</h4>
            <PopQuiz />
            <hr />
            <hr />
            <h4>Challenge: 10, 11</h4>
            <Jokes />
            <hr />
            <hr />
            <h4>Challenge: 13, 14, 15</h4>
            <MapFunc />
            <hr />
            <hr />
            <h4>Challenge: 16, 17</h4>
            <Arrays />
            <hr />
            <hr />
            <h4>Challenge: 18 - Map Quiz</h4>
            <MapQuiz />
        </>
    );
}
