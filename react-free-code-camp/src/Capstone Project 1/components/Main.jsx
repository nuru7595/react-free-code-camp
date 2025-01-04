import Die from "./Die";

export default function Main() {
    const generateNewDice = () => {
        //make it again;
    };
    console.log(generateNewDice());

    return (
        <div className="bg-gray-900 p-6">
            <div className="tenzies-box">
                <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-8">
                    <Die value={1} />
                    <Die value={2} />
                    <Die value={3} />
                    <Die value={4} />
                    <Die value={4} />
                    <Die value={5} />
                    <Die value={6} />
                    <Die value={4} />
                    <Die value={6} />
                    <Die value={2} />
                </div>
            </div>
        </div>
    );
}
