export default function Pad(props) {
    return (
        <button
            onClick={props.handleClick}
            style={{ backgroundColor: props.color }}
            className={props.isOn ? "!opacity-100" : null}
        ></button>
    );
}
