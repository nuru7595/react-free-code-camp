import { useState } from "react";
import UserBody from "./UserBody";
import UserHeader from "./UserHeader";

export default function PassingDataAroundReact() {
    const [user, setUser] = useState("Joe");

    return (
        <div>
            <UserHeader userName={user} />
            <UserBody userName={user} />
        </div>
    );
}
