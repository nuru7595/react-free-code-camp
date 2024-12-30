export default function Joke(props) {
    return (
        <>
            {props.setup && <p>Setup: {props.setup}</p>}
            {props.punchline && <p className="bg-slate-700">Punchline: {props.punchline}</p>}
        </>
    )
}