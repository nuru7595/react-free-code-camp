export default function UserBody(props) {
    return (
        <div className="text-center bg-zinc-400 py-6">
            <h2>Welcome Back, {props.userName}!</h2>
        </div>
    )
}