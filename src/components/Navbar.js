import { LOGO_URL } from "../utils/constants"

const Navbar = ()=> {
    return (
        <div id='nav'>
            <div id='logo'> <img id='logo' src={LOGO_URL}></img></div>
            <ul id='options'>
                <li>
                    Offers
                </li>
                <li>
                    Help
                </li>
                <li>
                    Sign In
                </li>
                <li>
                    Cart
                </li>
            </ul>
        </div>
    )
}


export default Navbar