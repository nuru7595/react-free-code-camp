export default function FunFacts() {
    return (
        <div>
            <h3 className="bg-transparent text-react text-left flex items-center">
                <img
                    src="./src/assets/favicon.ico"
                    alt="React logo"
                    width="40px"
                    className="mr-4"
                />
                Fun Facts About React Js
            </h3>
            <div className="bg-slate-700 p-5 rounded-sm">
                <ul className="list-disc list-inside">
                    <li>Was first released in 2013.</li>
                    <li>Was originally created by Jordan Walke.</li>
                    <li>Has well over 100k stars on GitHub.</li>
                    <li>Is maintained by Meta.</li>
                    <li>Powers thousands of enterprise apps, including mobile apps.</li>
                </ul>
            </div>
        </div>
    );
}
