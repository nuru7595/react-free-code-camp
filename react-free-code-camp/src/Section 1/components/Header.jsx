import src from "../../assets/favicon.ico";

export default function Header() {
    return (
        <header className="flex items-center justify-between">
            <img src={src} alt="React Logo" width={'55px'} />
            <nav>
                <ul className="flex gap-6">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
