import { useState } from "react";
import avatar from "../images/user.png";
import emptyStar from "../images/star-empty.png";
import filledStar from "../images/star-filled.png";

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
            <button
                onClick={toggleFavorite}
                aria-pressed={contact.isFavorite}
                aria-label={
                    contact.isFavorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                }
                className="mt-2 rounded-xl bg-white"
            >
                <img
                    src={contact.isFavorite ? filledStar : emptyStar}
                    alt={
                        contact.isFavorite
                            ? "Filled Star Icon"
                            : "Empty Star Icon"
                    }
                    width={"50px"}
                />
            </button>
            <h2>
                {contact.firstName} {contact.lastName}
            </h2>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    );
}
