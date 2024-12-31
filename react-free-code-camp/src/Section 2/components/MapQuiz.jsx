export default function MapQuiz() {
    return (
        <div className="black-box">
            <p>Q1: What does the .map() array method do?</p>
            <p className="bg-slate-700">
                A1: The .map() function takes a callback function. It loops over
                each element in an array, processes it, and returns a new array
                with the results.
            </p>
            <p>Q2: What do we usually use .map() for in React?</p>
            <p className="bg-slate-700">
                A2: Convert an array of raw data into an array of JSX elements.
                So we can display it on the page.
            </p>
            <p>
                Q3: Why is using .map() better than just creating the components
                manually by typing them out?
            </p>
            <p className="bg-slate-700">A3: We often don't have the data to type manually when we are building the app. Besides it's hard to keep tracking the data manually. Instead we can automatically do all the staff by using .map() method.</p>
        </div>
    );
}
