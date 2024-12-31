export default function EventListener() {
    const handleClick = () => {
        console.log("You Hurt Me!");
    };
    const handleHover = () => {
        console.log("You Touched Me!");
    };
    return (
        <div className="black-box p-6">
            <div
                className="bg-slate-700 cursor-pointer text-center py-10 font-bold text-xl select-none"
                onClick={handleClick}
                onMouseOver={handleHover}
            >
                Mouse Pad
            </div>
        </div>
    );
}
