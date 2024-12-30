import src from "../images/marker.png";

export default function Entry(props) {
    return (
        <article className="flex flex-col md:flex-row items-center bg-white py-8 gap-4 md:gap-0">
            <div className="min-w-56 h-56 px-6">
                <img
                    src={props.img.src}
                    alt={props.img.alt}
                    className="object-cover h-full rounded-lg min-w-full"
                />
            </div>
            <div className="px-6">
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <img src={src} alt="Location Icon" width={'12px'} />
                    <span className="font-bold tracking-[6px] text-sm">{props.country}</span>
                    <a href={props.googleMapsLink} target="_blank" className="underline pl-4 text-slate-500 text-sm">View on Google Maps</a>
                </div>
                <h1 className="bg-transparent text-left p-0 my-3 text-3xl">{props.title}</h1>
                <p className="font-bold p-0">{props.dates}</p>
                <p className="px-0 tracking-normal">{props.text}</p>
            </div>
        </article>
    );
}
