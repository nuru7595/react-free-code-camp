import emptyStar from "../images/star-empty.png";
import filledStar from "../images/star-filled.png";

export default function Star(props) {
    return (
        <button
            onClick={props.handleClick}
            aria-pressed={props.isFilled}
            aria-label={
                props.isFilled ? "Remove from favorites" : "Add to favorites"
            }
            className="mt-2 rounded-xl bg-white"
        >
            <img
                src={props.isFilled ? filledStar : emptyStar}
                alt={props.isFilled ? "Filled Star Icon" : "Empty Star Icon"}
                width={"50px"}
            />
        </button>
    );
}
