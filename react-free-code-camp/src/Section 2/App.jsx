import Header from "./components/Header";
import Entry from "./components/Entry";
import NotReusable from "./components/NotReusable";
import Contact from "./components/Contact";

export default function App() {
    return (
        <>
            <h3 className="title">
                Section 2: Data-Driven React <br /> Project: Travel Journal
            </h3>
            <hr />
            <hr />
            <h4>Challenge: 1, 2</h4>
            <div>
                <Header />
                <Entry />
            </div>
            <hr />
            <hr />
            <h4>Challenge: 3, 4</h4>
            <NotReusable />
            <hr />
            <hr />
            <h4>Challenge: 5</h4>
            <Contact />
        </>
    );
}
