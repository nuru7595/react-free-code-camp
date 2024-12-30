import ContactCard from "./ContactCard";
import whiskerson from "../images/mr-whiskerson.png";
import fluffykins from "../images/fluffykins.png";
import felix from "../images/felix.png";
import pumpkin from "../images/pumpkin.png";

export default function Contact() {
    return (
        <div className="p-2 grid md:grid-cols-2 gap-1">
            <ContactCard
                img={whiskerson}
                name="Mr. Whiskerson"
                cell="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <ContactCard
                img={fluffykins}
                name="Fluffykins"
                cell="(212) 555-2345"
                email="fluff@me.com"
            />
            <ContactCard
                img={felix}
                name="Felix"
                cell="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <ContactCard
                img={pumpkin}
                name="Pumpkin"
                cell="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    );
}
