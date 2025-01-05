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
                        <td>05 January 2025</td>
                    </tr>
                    <tr>
                        <td>Ongoing:</td>
                        <td>8 Days</td>
                    </tr>
                    <tr>
                        <td>Allocated Time:</td>
                        <td>38.5 Hours</td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td>Active Now</td>
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
