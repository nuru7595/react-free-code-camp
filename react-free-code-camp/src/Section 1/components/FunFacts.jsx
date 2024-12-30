import src from '../../assets/favicon.ico'

export default function FunFacts() {
    return (
        <div className='black-box'>
            <h3 className="flex items-center">
                <img
                    src={src}
                    alt="React logo"
                    width="40px"
                    className="mr-4"
                />
                Fun Facts About React Js
            </h3>
            <div className="slate-box">
                <ul>
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
