import Header from "./components/Header";
import Entry from "./components/Entry";
import NotReusable from "./components/NotReusable";
import Contact from "./components/Contact";
import PopQuiz from "./components/PopQuiz";
import Jokes from "./components/Jokes";
import MapFunc from "./components/MapFunc";
import Arrays from "./components/Arrays";

export default function App() {
    return (
        <>
            <h3 className="title">
                Section 2: Data-Driven React <br /> Project: Travel Journal
            </h3>
            <hr />
            <hr />
            <h4>Challenge: 1, 2, 12</h4>
            <div>
                <Header />
                <Entry
                    img={{
                        src: "https://scrimba.com/links/travel-journal-japan-image-url",
                        alt: "Mount Fuji"
                    }}
                    title="Mount Fuji"
                    country="Japan"
                    googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                    dates="12 Jan, 2021 - 24 Jan, 2021"
                    text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                />
            </div>
            <hr />
            <hr />
            <h4>Challenge: 3, 4</h4>
            <NotReusable />
            <hr />
            <hr />
            <h4>Challenge: 5, 6, 7, 9</h4>
            <Contact />
            <hr />
            <hr />
            <h4>Challenge: 8 - Pop Quiz</h4>
            <PopQuiz />
            <hr />
            <hr />
            <h4>Challenge: 10, 11</h4>
            <Jokes />
            <hr />
            <hr />
            <h4>Challenge: 13, 14, 15</h4>
            <MapFunc />
            <hr />
            <hr />
            <h4>Challenge: 16, 17</h4>
            <Arrays />
            <hr />
            <hr />
            <h4>Challenge: 18 - Map Quiz</h4>
            <div className="black-box">
                <h2>Coming Soon . . .</h2>
            </div>
            <hr />
            <hr />
            <h4>Challenge: 19</h4>
            <div className="black-box">
                <h2>Coming Soon . . .</h2>
            </div>
        </>
    );
}
