import whiskerson from "../images/mr-whiskerson.png";
import phone from "../images/phone-icon.png";
import mail from "../images/mail-icon.png";

export default function ContactCard() {
    return (
        <div className="border-2 border-dark shadow-lg rounded-lg p-1 m-2">
            <div className="rounded-t-md overflow-hidden">
                <img
                    src={whiskerson}
                    alt="Mr. Whiskerson"
                    className="w-full"
                />
            </div>
            <div className="py-2">
                <h2>Mr. Whiskerson</h2>

                <div className="flex items-center px-2 gap-3">
                    <img
                        src={phone}
                        alt="Phone Icon"
                        width={"18px"}
                    />
                    <span>(212) 555-1234</span>
                </div>

                <div className="flex items-center px-2 gap-3">
                    <img
                        src={mail}
                        alt="Mail Icon"
                        width={"18px"}
                    />
                    <span>mr.whiskaz@catnap.meow</span>
                </div>
            </div>
        </div>
    );
}
