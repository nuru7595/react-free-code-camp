import { useState } from "react";
import padsData from "./pads";
import Pad from "./Pad";

export default function SoundPad() {
    const [pads, setPads] = useState(padsData);

    const toggle = (id) => {
        setPads((prev) => {
            return prev.map((x) => {
                return x.id == id ? { ...x, on: !x.on } : x;
            });
        });
    };

    const buttonElements = pads.map((x) => {
        return (
            <Pad
                key={x.id}
                color={x.color}
                isOn={x.on}
                handleClick={() => {
                    toggle(x.id);
                }}
            />
        );
    });

    return (
        <div className="sound-pad black-box grid grid-cols-2 gap-4 p-4">
            {buttonElements}
        </div>
    );
}
