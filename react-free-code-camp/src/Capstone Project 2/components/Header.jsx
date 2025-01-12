export default function Header({ number }) {
    return (
        <header>
            <h2 className="pt-0">Assembly: Endgame</h2>
            <p className="pb-0">
                Guess the word in under {number} attempts to keep the
                programming world safe from Assembly!
            </p>
        </header>
    );
}
