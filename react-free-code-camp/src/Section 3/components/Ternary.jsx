import { useState } from "react";

export default function Ternary() {
    const [isGoingOut, setIsGoingOut] = useState(false);
    const handleClick = (prev) => {
        setIsGoingOut((prev) => !prev);
    };

    return (
        <div className="black-box p-4">
            <h2 className="text-center">Do I feel like going out tonight?</h2>
            <button
                onClick={handleClick}
                aria-label={`Current answer is ${
                    isGoingOut ? "Yes" : "No"
                }. Click to change it.`}
                className="h-16 w-16 bg-slate-700 rounded-full block mx-auto font-bold text-xl"
            >
                {isGoingOut ? "Yes" : "No"}
            </button>
        </div>
    );
}
