import Markdown from "react-markdown";

export default function ClaudeRecipe(props) {
    return (
        <div className="claude">
            <h2 className="px-0">Chef Claude Recommends:</h2>
            <Markdown>{props.recipe}</Markdown>
        </div>
    );
}
