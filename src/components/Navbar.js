import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import Offer from "./Offer"
import Contact from "./Contact"

const Navbar = ()=> {

    const [btn, setbtn] = useState("Login")
    return (
        <div id='nav'>
            <div id='logo'> <Link to={"/"}> <img id='logo' src={LOGO_URL}></img> </Link></div>
            <ul id='options'>
                <li >
                <Link to="/offers" className="opt"> Offers </Link>
                </li> 
                <li >
                   <Link to={"/contact"} className="opt"> Contact </Link>
                </li>
                <li >
                <Link to={"/about"} className="opt">  About </Link>
                </li>
                <li >
                <Link to={"/cart"} className="opt">   Cart </Link>
                </li>
                <li >
                    <button id="log-btn" onClick={()=>{
                       btn==="Login" ? setbtn("Logout") : setbtn("Login")
                    }}> {btn} </button>
                </li>
            </ul>
        </div>
    )
}


export default Navbar