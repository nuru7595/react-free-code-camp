import src from '../images/globe.png';

export default function Header() {
    return (
        <header className='flex items-center justify-center gap-1 bg-rose-500 py-1 border-0'>
            <img src={src} alt="Globe Image" width={'32px'} />
            <h4 className='bg-transparent text-white'>My Travel Journal.</h4>
        </header>
    )
}