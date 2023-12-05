import NavBar from "./NavBar";
import Title from "./Title";


function Header() {
    return (
        <header className="header">
            <Title/>
            <NavBar />
        </header>
    )
}

export default Header;