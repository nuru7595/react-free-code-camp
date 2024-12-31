import { useState } from "react";

export default function ComplexStateObjects() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    });

    return (
        <div>
            <img src={avatar} alt="User Profile Picture" />
        </div>
    );
}
