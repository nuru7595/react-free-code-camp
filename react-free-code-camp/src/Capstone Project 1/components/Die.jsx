export default function Die(props) {
    return (
        <button
            aria-label={`This is a die with the value of ${props.value}`}
            aria-pressed={props.clicked}
            onClick={props.hold}
            className={props.clicked ? "die bg-green-400" : "die"}
        >
            {props.value}
        </button>
    );
}
