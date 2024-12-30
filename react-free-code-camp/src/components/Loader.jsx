export default function Loader() {
    return (
        <section>
            <h3 className="title">Loading...</h3>
            <div className="black-box py-4">
                <div className="mx-auto animate-spin rounded-full h-12 w-12 border-4 border-react border-t-transparent"></div>
            </div>
        </section>
    );
}
