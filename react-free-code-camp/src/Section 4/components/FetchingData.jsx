import { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function FetchingData() {
    const [count, setCount] = useState(1);
    const add = () => {
        setCount((prev) => prev + 1);
    };

    const [starWarsData, setStarWarsData] = useState();
    console.log("Document Rendered!");
    useEffect(() => {
        fetch(`https://swapi.py4e.com/api/people/${count}/`).then((res) =>
            res.json().then((json) => {
                setStarWarsData(JSON.stringify(json, null, 2));
                console.log("Data Fetched!");
            })
        );
    }, [count]);

    return (
        <div className="black-box pt-4">
            <button
                onClick={add}
                className="bg-react text-dark py-2 px-12 rounded-md block mx-auto"
            >
                Next ID
            </button>
            <h2 className="text-center">{count}</h2>
            <h2>Star Wars Data:</h2>
            <hr className="border-react" />
            <pre className="slate-box">{starWarsData}</pre>
        </div>
    );
}
