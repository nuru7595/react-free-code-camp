import src from '../../assets/favicon.ico';

export default function Navbar() {
    return (
        <header>
            <nav className='flex items-center'>
                <img src={src} alt="React Logo" width='50px' />
                <span className='text-3xl font-bold ml-2'>ReactFacts</span>
            </nav>
        </header>
    );
}