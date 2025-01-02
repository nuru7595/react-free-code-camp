import { useState } from "react";
import avatar from "../images/user.png";
import Star from "./Star";

export default function ComplexStateObjects() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false,
    });

    const toggleFavorite = () => {
        setContact((prev) => {
            return {
                ...prev,
                isFavorite: !prev.isFavorite,
            };
        });
    };

    return (
        <div className="slate-box flex items-center justify-center flex-col text-react">
            <img src={avatar} alt="User Profile Picture" width={"200px"} />
            <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
            <h2>
                {contact.firstName} {contact.lastName}
            </h2>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    );
}
