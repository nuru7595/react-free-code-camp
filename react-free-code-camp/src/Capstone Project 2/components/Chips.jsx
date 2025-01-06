import { languages } from "./language";

export default function Chips() {
    const lang = languages.map((x, i) => (
        <span
            key={i}
            style={{ backgroundColor: x.backgroundColor, color: x.color }}
        >
            {x.name}
        </span>
    ));

    return (
        <div className="flex items-center flex-wrap justify-center gap-1">{lang}</div>
    );
}
