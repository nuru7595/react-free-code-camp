import { useState } from "react";

export default function ComplexStateArrays() {
    const allFavThings = [
        "💦🌹",
        "😺",
        "💡🫖",
        "🔥🧤",
        "🟤🎁",
        "🐴",
        "🍎🥧",
        "🚪🔔",
        "🛷🔔",
        "🥩🍝",
    ];
    const [myFavThings, setMyFavThings] = useState([]);
    const handleClick = () => {
        setMyFavThings((prev) => {
            if (prev.length < allFavThings.length) {
                return [...prev, allFavThings[prev.length]];
            } else {
                return [...prev];
            }
        });
    };
    const elements = myFavThings.map((x) => {
        return <p key={x}>{x}</p>;
    });

    return (
        <div className="black-box py-4">
            <button
                onClick={handleClick}
                className="block mx-auto bg-slate-700 py-3 px-6 my-3"
            >
                Add Item
            </button>
            <div className="text-xl flex flex-col gap-2 items-center">
                {elements}
            </div>
        </div>
    );
}
