import trollFace from '../images/troll-face.png';

export default function Header() {
    return (
        <header className='flex items-center bg-purple-700 text-white px-5 py-2'>
            <img src={trollFace} alt="Troll Face Image" width={'36px'} />
            <h2>Meme Generator</h2>
        </header>
    )
}