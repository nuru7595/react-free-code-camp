import jokeData from "./JokeData";
import Joke from "./Joke";

export default function Arrays() {
    const ninjaTurtles = [
        <h3>Donatello</h3>,
        <h3>Michaelangelo</h3>,
        <h3>Rafael</h3>,
        <h3>Leonardo</h3>,
    ];

    const jokeElements = jokeData.map((x) => {
        return <Joke setup={x.setup} punchline={x.punchline} />;
    });

    return (
        <div className="black-box">
            {ninjaTurtles}
            <hr />
            {jokeElements}
        </div>
    );
}
