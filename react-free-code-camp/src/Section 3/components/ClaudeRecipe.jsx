import Markdown from "react-markdown";

export default function ClaudeRecipe(props) {
    return (
        <div>
            <h2>Chef Claude Recommends:</h2>
            <Markdown>{props.recipe}</Markdown>
        </div>
    );
}
