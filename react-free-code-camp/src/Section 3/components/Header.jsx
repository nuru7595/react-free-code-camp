import chefIcon from "../images/chef-claude-icon.png";

export default function Header() {
    return (
        <header className="flex items-center justify-center py-2 border-b-2 border-slate-300 shadow-lg">
            <img src={chefIcon} alt="Chef Icon" width={"40px"} />
            <h1>Chef Claude</h1>
        </header>
    );
}
