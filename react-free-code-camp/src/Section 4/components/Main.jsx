import { useState } from "react";

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imgUrl: "http://i.imgflip.com/1bij.jpg",
    });
    const handleChange = (event) => {
        const {value, name} = event.currentTarget;
        setMeme((prevMeme) => {
            return { ...prevMeme, [name]: value };
        });
    };

    return (
        <main className="p-5">
            <form className="memeForm">
                <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="topText">Top Text:</label>
                        <input
                            onChange={handleChange}
                            value={meme.topText}
                            type="text"
                            name="topText"
                            id="topText"
                            placeholder="e.g. One does not simply"
                        />
                    </div>
                    <div>
                        <label htmlFor="bottomText">Bottom Text:</label>
                        <input
                            onChange={handleChange}
                            value={meme.bottomText}
                            type="text"
                            name="bottomText"
                            id="bottomText"
                            placeholder="e.g. Walk into Mordor"
                        />
                    </div>
                </div>
                <input type="submit" value="Get a new meme image 🖼️" />
            </form>
            <div className="memeShow">
                <img src={meme.imgUrl} alt="Meme Image" />
                <span className="top-5">{meme.topText}</span>
                <span className="bottom-5">{meme.bottomText}</span>
            </div>
        </main>
    );
}
