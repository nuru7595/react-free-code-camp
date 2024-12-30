export default function NotReusable() {
    const firstName = "Joe";
    const lastName = "Schmoe";

    const time = new Date().getHours();
    let timeOfDay;

    if (time < 12) {
        timeOfDay = 'Morning';
    } else if (time < 17) {
        timeOfDay = 'Noon';
    } else if (time < 21) {
        timeOfDay = 'Evening';
    } else {
        timeOfDay = 'Night';
    }

    return (
        <div className="black-box">
            <h2>Hello, {firstName} {lastName}. Good {timeOfDay}!</h2>
        </div>
    );
}
