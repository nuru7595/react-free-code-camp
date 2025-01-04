import { useState } from "react";
import WindowTracker from "./WindowTracker";

export default function StateAndEffectPractices() {
    const [show, setShow] = useState(true);
    const toggle = () => {
        setShow((prev) => !prev);
    };

    return (
        <div className="black-box py-4 px-2">
            <button
                onClick={toggle}
                className="text-dark bg-react font-bold text-xl py-2 rounded-md block w-full hover:bg-cyan-500"
            >
                Toggle Window Tracker
            </button>
            {show ? <WindowTracker /> : null}
        </div>
    );
}
