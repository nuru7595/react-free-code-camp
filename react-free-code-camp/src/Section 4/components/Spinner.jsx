export default function Spinner() {
    return (
        <div className="my-24">
            <div className="py-4">
                <div className="mx-auto animate-spin rounded-full h-12 w-12 border-4 border-react border-t-transparent"></div>
            </div>
            <h2 className="text-center">Fetching Data From API . . .</h2>
        </div>
    );
}
