import Header from "./components/Header";
import Footer from "./components/Footer";
import Selector from "./components/Selector";
import { useEffect, useState } from "react";
import Details from "./components/Details";
import Loader from "./components/Loader";
import ReactFacts from "./Section 1/ReactFacts";
import TravelJournal from "./Section 2/TravelJournal";
import ReactState from "./Section 3/ReactState";
import SideEffects from "./Section 4/SideEffects";
import TenziesGame from "./Capstone Project 1/TenziesGame";
import EndGame from "./Capstone Project 2/EndGame";

export default function App() {
    // Selector...
    const defaultSelection = "Details";
    const [active, setActive] = useState(defaultSelection);
    const myFunc = (x) => {
        setActive(x);
        setLoading(true);
    };

    // Animator...
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [active]);

    return (
        <>
            <Header />
            <main className="container">
                <Selector selector={myFunc} default={defaultSelection} />

                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {active === "Details" && <Details />}
                        {active === "Sec1" && <ReactFacts />}
                        {active === "Sec2" && <TravelJournal />}
                        {active === "Sec3" && <ReactState />}
                        {active === "Sec4" && <SideEffects />}
                        {active === "Sec5" && <TenziesGame />}
                        {active === "Sec6" && <EndGame />}
                    </>
                )}
            </main>
            <Footer />
        </>
    );
}
