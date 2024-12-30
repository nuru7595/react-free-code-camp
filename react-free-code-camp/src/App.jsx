import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Selector from "./components/Selector.jsx";
import { useEffect, useState } from "react";
import Details from "./components/Details.jsx";
import Loader from "./components/Loader.jsx";
import ReactFacts from "./Section 1/ReactFacts.jsx";
import TravelJournal from "./Section 2/TravelJournal.jsx";

export default function App() {
    // Selector...
    const [active, setActive] = useState("Sec2");
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
                    </>
                )}
            </main>
            <Footer />
        </>
    );
}
