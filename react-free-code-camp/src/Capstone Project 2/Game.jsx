import Chips from "./components/Chips";
import Header from "./components/Header";
import Status from "./components/Status";

export default function Game() {
    return (
        <div className="bg-gray-900 text-white p-4">
            <div className="game-box">
                <Header />
                <Status game={true} />
                <Chips />
                <div className="black-box">
                    <h2>Coming Soon . . .</h2>
                </div>
            </div>
        </div>
    );
}
