import { useState } from "react";
import Header from "./components/Header";
import clsx from "clsx";
import { languages } from "./components/language";
import { getFarewellText, randomWord } from "./components/utils";
import ReactConfetti from "react-confetti";

export default function Game() {
    const [pressedKey, setPressedKey] = useState([]);
    const [word, setWord] = useState(() => randomWord());
    // States;

    const wrongGuessCount = pressedKey.filter((x) => !word.includes(x)).length;
    const isGameOver = wrongGuessCount > languages.length - 1;
    const isGameWon = word.split("").every((x) => pressedKey.includes(x));
    const lastPressedKey = pressedKey[pressedKey.length - 1];
    const isLastKeyWrong = lastPressedKey && !word.includes(lastPressedKey);
    // Derived;

    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Static;

    const renderGameStatus = () => {
        if (isGameWon) {
            return (
                <>
                    <h3>You won!</h3>
                    <p>Well done! 🎉</p>
                </>
            );
        } else if (isGameOver) {
            return (
                <>
                    <h3>Game over!</h3>
                    <p>You lose! Better start learning Assembly 🙂</p>
                </>
            );
        } else if (isLastKeyWrong) {
            return (
                <h3>{getFarewellText(languages[wrongGuessCount - 1].name)}</h3>
            );
        }
    };
    const statusClsx = clsx("status-box", {
        "!bg-green-600": isGameWon,
        "!bg-red-600": isGameOver,
        "bg-orange-600": isLastKeyWrong,
    });
    // Status Part;

    const lang = languages.map((x, i) => {
        const isLost = i < wrongGuessCount;
        const styles = {
            backgroundColor: x.backgroundColor,
            color: x.color,
        };
        return (
            <span
                className={isLost ? "wrong" : null}
                style={styles}
                key={x.name}
            >
                {x.name}
            </span>
        );
    });
    // Language Part;

    const handleClick = (key) => {
        setPressedKey((prevKeys) =>
            prevKeys.includes(key) ? prevKeys : [...prevKeys, key]
        );
    };
    const keys = alpha.split("").map((x) => {
        const isPressed = pressedKey.includes(x);
        const isCorrect = isPressed && word.includes(x);
        const isWrong = isPressed && !word.includes(x);
        const classNames = clsx({
            "!bg-green-600": isCorrect,
            "!bg-red-600": isWrong,
        });
        return (
            <button
                disabled={isGameOver || isGameWon}
                className={classNames}
                onClick={() => handleClick(x)}
                key={x}
            >
                {x}
            </button>
        );
    });
    // Keyboard Part;

    const letters = word.split("").map((x, i) => {
        const letterClsx = clsx(
            isGameOver && !pressedKey.includes(x) && "text-red-600"
        );
        return (
            <span key={i} className={letterClsx}>
                {pressedKey.includes(x) || isGameOver ? x.toUpperCase() : ""}
            </span>
        );
    });
    // Word Part;

    const newGame = () => {
        setWord(randomWord());
        setPressedKey([]);
    };
    // New Game Button Part;

    return (
        <div className="bg-gray-900 text-white px-4 py-8 relative">
            {isGameWon ? (
                <ReactConfetti recycle={false} numberOfPieces={1000} />
            ) : null}
            <div className="game-box">
                <Header number={languages.length} />
                {/* Header Part */}
                <div className={statusClsx}>{renderGameStatus()}</div>
                {/* Status Part */}
                <div className="lang-box">{lang}</div>
                {/* Languages Part */}
                <div className="word-box">{letters}</div>
                {/* Word Part */}
                <div className="keyboard-box !gap-2">{keys}</div>
                {/* Keyboard Part */}
                {isGameOver || isGameWon ? (
                    <button onClick={newGame}>New Game</button>
                ) : (
                    <button className="invisible">New Game</button>
                )}
                {/* New Game Button */}
            </div>
        </div>
    );
}
