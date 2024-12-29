export default function Details() {
    return (
        <section>
            <h3>Information</h3>
            <div>
                <p>
                    Started: <span className="font-bold">29 December 2024</span>
                </p>
                <p>
                    Status: <span className="font-bold">Active Now</span>
                </p>
                <p>Allocated Time: <span className="font-bold">~4 Hours</span></p>
                <p>
                    Source:{" "}
                    <a
                        href="https://youtu.be/x4rFhThSX04"
                        target="_blank"
                        title="Go to Youtube"
                        className="font-bold underline"
                    >
                        Free Code Camp
                    </a>
                </p>
            </div>
        </section>
    );
}
