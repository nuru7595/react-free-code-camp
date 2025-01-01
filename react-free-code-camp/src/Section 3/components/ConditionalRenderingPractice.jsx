import { useState } from "react";

export default function ConditionalRenderingPractice() {
    const [unreadMsg, setUnreadMsg] = useState(["msg1", "msg2"]);
    const msgAlert = () => {
        if (unreadMsg.length === 0) {
            return "You're all caught up!";
        } else if (unreadMsg.length === 1) {
            return "You have 1 unread message.";
        } else {
            return `You have ${unreadMsg.length} unread messages.`;
        }
    };

    return (
        <div className="black-box">
            <h2>{msgAlert()}</h2>
        </div>
    );
}
