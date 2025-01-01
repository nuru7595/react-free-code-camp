import { useState } from "react";

export default function Joke(props) {
    const [isShown, setIsShown] = useState(false);
    const togglePunchline = () => {
        setIsShown((prev) => (prev = !prev));
    };

    return (
        <>
            {props.setup && <p>Setup: {props.setup}</p>}
            {isShown && <p className="bg-slate-700">{props.punchline}</p>}
            {props.punchline && (
                <button
                    className="m-2 bg-slate-700 p-2 rounded-lg"
                    onClick={togglePunchline}
                >
                    {isShown ? "Hide" : "Show"} the punchline
                </button>
            )}
        </>
    );
}
