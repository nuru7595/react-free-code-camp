export default function Details() {
    return (
        <section>
            <h3 className="title">Information</h3>
            <div className="black-box">
                <p>
                    Started: <span>29 December 2024</span>
                </p>
                <p>
                    Last Updated: <span>03 January 2025</span>
                </p>
                <p>
                    Allocated Time: <span>29 Hours 20 Minutes</span>
                </p>
                <p>
                    Status: <span>Active Now</span>
                </p>
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
