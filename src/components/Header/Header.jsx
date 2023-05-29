import Logo from "../../ui/Logo/Logo"
import HeaderNav from "../../ui/HeaderNav/HeaderNav"
import Button from "../../ui/Button/Button"
import './Header__styles.css'
import '../../styles/index.css'

function Header() {
    return (
        <header>
            <Logo />
            <HeaderNav />
            <Button color="white" title="Call Me Back"/>
        </header>
    )
}

export default Header