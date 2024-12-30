import Joke from "./Joke";

export default function Jokes() {
    return (
        <div className="black-box">
            <Joke
                punchline="People say that money is not the key to happiness, but I always figured if you have enough money, you can have a key made."
                isPun={true}
            />
            <Joke
                setup=" Why don’t skeletons fight each other?"
                punchline="Because they don’t have the guts!"
                isPun={false}
            />
            <Joke
                setup="Why don’t oysters share their pearls?"
                punchline="Because they’re shellfish!"
                isPun={false}
            />
            <Joke
                setup="Why did the bicycle fall over?"
                punchline="Because it was two-tired!"
                isPun={false}
            />
        </div>
    );
}
