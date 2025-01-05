import { useEffect, useRef, useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";

export default function Main() {
    const generateNewDice = () => {
        return new Array(10).fill({}).map(() => ({
            num: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        }));
    };
    const [dice, setDice] = useState(() => generateNewDice());
    const dices = dice.map((x) => (
        <Die
            key={x.id}
            value={x.num}
            clicked={x.isHeld}
            hold={() => {
                hold(x.id);
            }}
        />
    ));
    const rollDice = () => {
        if (!gameWon) {
            setDice((prev) =>
                prev.map((obj) =>
                    obj.isHeld
                        ? obj
                        : { ...obj, num: Math.ceil(Math.random() * 6) }
                )
            );
        } else {
            setDice(generateNewDice());
        }
    };
    const hold = (id) => {
        setDice((prev) =>
            prev.map((obj) =>
                obj.id === id ? { ...obj, isHeld: !obj.isHeld } : obj
            )
        );
    };
    const gameWon =
        dice.every((die) => die.isHeld) &&
        dice.every((die) => die.num === dice[0].num);

    const btnElement = useRef(null);
    useEffect(() => {
        btnElement.current.focus();
    }, [gameWon]);

    return (
        <div className="bg-gray-900 p-6">
            <div className="tenzies-box">
                {gameWon ? (
                    <ReactConfetti
                        width="500"
                        height="500"
                        numberOfPieces={200}
                    />
                ) : null}
                <div className="text-center">
                    <h2 className="text-4xl">Tenzies</h2>
                    <p className="px-5">
                        Roll until all die are the same. Click each die to
                        freeze it at its current value between rolls.
                    </p>
                </div>
                <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-8">
                    {dices}
                </div>
                <button
                    onClick={rollDice}
                    ref={btnElement}
                    className="roll-btn"
                >
                    {gameWon ? "New Game" : "Roll"}
                </button>
            </div>
        </div>
    );
}
