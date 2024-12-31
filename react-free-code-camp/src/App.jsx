import Header from "./components/Header";
import Footer from "./components/Footer";
import Selector from "./components/Selector";
import { useEffect, useState } from "react";
import Details from "./components/Details";
import Loader from "./components/Loader";
import ReactFacts from "./Section 1/ReactFacts";
import TravelJournal from "./Section 2/TravelJournal";
import ReactState from "./Section 3/ReactState";

export default function App() {
    // Selector...
    const [active, setActive] = useState("Sec3");
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
                <Selector myProps={myFunc} />

                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {active === "Details" && <Details />}
                        {active === "Sec1" && <ReactFacts />}
                        {active === "Sec2" && <TravelJournal />}
                        {active === "Sec3" && <ReactState />}
                    </>
                )}
            </main>
            <Footer />
        </>
    );
}
