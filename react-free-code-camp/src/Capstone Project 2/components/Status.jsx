export default function Status(props) {
    return (
        <div
            className={props.game ? "bg-green-600 status" : "bg-red-600 status"}
        >
            <h3>{props.game ? "You won!" : "Game over!"}</h3>
            <p>
                {props.game
                    ? "Well done! 🎉"
                    : "You lose! Better start learning Assembly 🙂"}
            </p>
        </div>
    );
}
