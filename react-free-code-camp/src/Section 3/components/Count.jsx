export default function Count(props) {
    return (
        <>
            <h2 className="bg-white w-24 h-24 rounded-full flex items-center justify-center text-dark border-react border-4">
                {props.number}
            </h2>
        </>
    );
}
