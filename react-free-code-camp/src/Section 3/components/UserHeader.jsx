import userIcon from "../images/userIcon.png";

export default function UserHeader(props) {
    return (
        <header className="flex justify-end items-center px-12 py-1 bg-neutral-500 gap-1">
            <img src={userIcon} alt="User Icon" width={"24px"} />
            <h3>{props.userName}</h3>
        </header>
    );
}
