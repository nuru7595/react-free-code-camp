export default function Body() {
    return (
        <main className="bg-slate-700 p-5 rounded-sm main">
            <h1 className="bg-transparent text-react text-left text-4xl">
                Fun Facts About React Js
            </h1>
            <ul className="list list-disc list-inside mt-3">
                <li className="py-1">Was first released in 2013.</li>
                <li className="py-1">Was originally created by Jordan Walke.</li>
                <li className="py-1">Has well over 100k stars on GitHub.</li>
                <li className="py-1">Is maintained by Meta.</li>
                <li className="py-1">
                    Powers thousands of enterprise apps, including mobile apps.
                </li>
            </ul>
        </main>
    );
}
