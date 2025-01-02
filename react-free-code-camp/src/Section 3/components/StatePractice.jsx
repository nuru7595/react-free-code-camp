import { useState } from "react";
import Count from "./Count";

export default function StatePractice() {
    const [count, setCount] = useState(0);
    const subtract = () => {
        setCount((prevCount) => prevCount - 1);
    };
    const add = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div className="black-box py-6">
            <h2 className="text-center">Counter</h2>
            <div className="flex justify-center items-end">
                <button
                    onClick={subtract}
                    className="bg-slate-700 w-10 h-10 rounded-full text-3xl font-extrabold select-none border-none outline-none absolute mr-24"
                >
                    -
                </button>
                <Count number={count} />
                <button
                    onClick={add}
                    className="bg-slate-700 w-10 h-10 rounded-full text-3xl font-extrabold select-none border-none outline-none absolute ml-24"
                >
                    +
                </button>
            </div>
        </div>
    );
}
