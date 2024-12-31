import { useState } from "react";

export default function UseState() {
    const [isImportant, setIsImportant] = useState("Yes");
    const handleClick = () => {
        setIsImportant("Definitely!")
    };
    return (
        <div className="black-box py-6">
            <h2 className="text-center">Is state important to know?</h2>
            <button
                className="mx-auto block bg-slate-700 rounded-full h-16 min-w-16 font-bold text-xl px-2"
                onClick={handleClick}
            >
                {isImportant}
            </button>
        </div>
    );
}
