export default function Details() {
    return (
        <section>
            <h3 className="title">Information</h3>
            <table className="black-box w-full table-fixed">
                <tbody>
                    <tr>
                        <td>Started:</td>
                        <td>29 December 2024</td>
                    </tr>
                    <tr>
                        <td>Last Updated:</td>
                        <td>12 January 2025</td>
                    </tr>
                    <tr>
                        <td>Completed in:</td>
                        <td>15 Days</td>
                    </tr>
                    <tr>
                        <td>Allocated Time:</td>
                        <td>47 Hours</td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td>Completed!</td>
                    </tr>
                    <tr>
                        <td>Source: </td>
                        <td>
                            <a
                                href="https://youtu.be/x4rFhThSX04"
                                target="_blank"
                                title="Go to Youtube"
                                className="font-bold underline"
                            >
                                Free Code Camp
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
