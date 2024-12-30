import phone from "../images/phone-icon.png";
import mail from "../images/mail-icon.png";

export default function ContactCard(props) {
    return (
        <div className="border-2 border-dark shadow-lg rounded-lg p-1 m-2">
            <div className="rounded-t-md overflow-hidden">
                <img
                    src={props.img}
                    alt={props.name}
                    className="w-full"
                />
            </div>
            <div className="py-2">
                <h2>{props.name}</h2>

                <div className="flex items-center px-2 gap-3">
                    <img
                        src={phone}
                        alt="Phone Icon"
                        width={"18px"}
                    />
                    <span>{props.cell}</span>
                </div>

                <div className="flex items-center px-2 gap-3">
                    <img
                        src={mail}
                        alt="Mail Icon"
                        width={"18px"}
                    />
                    <span>{props.email}</span>
                </div>
            </div>
        </div>
    );
}
