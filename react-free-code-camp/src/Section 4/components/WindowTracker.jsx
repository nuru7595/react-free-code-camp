import { useEffect, useState } from "react";

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const tracker = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", tracker);
        return () => {
            console.log("Turned Off Event Listener!");
            window.removeEventListener("resize", tracker);
        }
    }, []);

    return (
        <div>
            <h2 className="text-center mt-1">Window width: {windowWidth}</h2>
        </div>
    );
}
