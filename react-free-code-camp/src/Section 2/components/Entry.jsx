import src from "../images/marker.png";

export default function Entry() {
    return (
        <article className="flex flex-col md:flex-row items-center bg-white py-8 gap-4 md:gap-0">
            <div className="min-w-56 h-56 px-6">
                <img
                    src="https://scrimba.com/links/travel-journal-japan-image-url"
                    alt="Japan Image"
                    className="object-cover h-full rounded-lg min-w-full"
                />
            </div>
            <div className="px-6">
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <img src={src} alt="Location Icon" width={'12px'} />
                    <span className="font-bold tracking-[6px] text-sm">JAPAN</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" target="_blank" className="underline pl-4 text-slate-500 text-sm">View on Google Maps</a>
                </div>
                <h1 className="bg-transparent text-left p-0 my-3 text-3xl">Mount Fuji</h1>
                <p className="font-bold p-0">Dates: 12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="px-0 tracking-normal">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    );
}
