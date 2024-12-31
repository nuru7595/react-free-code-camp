import jokeData from "./JokeData";
import Joke from "./Joke";

export default function Arrays() {
    const ninjaTurtles = [
        <h3 key={1}>Donatello</h3>,
        <h3 key={2}>Michaelangelo</h3>,
        <h3 key={3}>Rafael</h3>,
        <h3 key={4}>Leonardo</h3>,
    ];

    const jokeElements = jokeData.map((x, i) => {
        return <Joke key={i} setup={x.setup} punchline={x.punchline} />;
    });

    return (
        <div className="black-box">
            {ninjaTurtles}
            <hr />
            {jokeElements}
        </div>
    );
}
