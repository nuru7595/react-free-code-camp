import Joke from './Joke';

export default function ConditionalRendering() {
    return (
        <div className="black-box">
            <Joke
                setup=" Why don’t skeletons fight each other?"
                punchline="Because they don’t have the guts!"
            />
            <Joke
                setup="Why don’t oysters share their pearls?"
                punchline="Because they’re shellfish!"
            />
            <Joke
                setup="Why did the bicycle fall over?"
                punchline="Because it was two-tired!"
            />
        </div>
    );
}
