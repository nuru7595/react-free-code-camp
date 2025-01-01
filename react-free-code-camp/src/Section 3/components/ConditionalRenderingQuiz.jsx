export default function ConditionalRenderingQuiz() {
    return (
        <div className="black-box">
            <p>Q1: What is "Conditional Rendering"?</p>
            <p className="bg-slate-700">A1: Conditional Rendering means to show something depending upon a Condition.</p>
            <p>Q2: When would you use &&?</p>
            <p className="bg-slate-700">A2: I would use && when I want to render something only if the given condition is true and I don't need an else condition.</p>
            <p>Q3: When would you use a ternary?</p>
            <p className="bg-slate-700">A3: I would use a ternary operator when I want to render something if the given condition is true and another thing if the condition is false.</p>
            <p>Q4: What if you need to decide between &gt; 2 options on what to display?</p>
            <p className="bg-slate-700">A4: Then I will use a ternary operator.</p>
        </div>
    )
}