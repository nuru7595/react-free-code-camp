export default function ChangingStateQuiz() {
    return (
        <div className="black-box">
            <p>Q1: You have 2 options for what you can pass in to a state setter function (e.g. setCount). What are they?</p>
            <p className="bg-slate-700">A1: 1/ New State Value: You can pass a new value directly to the setter function. <br />2/ Updater Function: You can pass a function that receives the current state as an argument and returns the new state.</p>
            <p>Q2: When would you want to pass the first option (from answer above) to the state setter function?</p>
            <p className="bg-slate-700">A2: When I want to set a new value directly to the setter function.</p>
            <p>Q3: When would you want to pass the second option (from answer above) to the state setter function?</p>
            <p className="bg-slate-700">A3: When I want to change the old value.</p>
        </div>
    )
}