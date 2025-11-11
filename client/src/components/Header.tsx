import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import horseimg from "../assets/horseimg.jpeg"
import "../components/styles/Header.css"

function Navigations(){
    return (
        <>
          <nav className="nav-links">
        <ul className="list">
            <li className="list-item">
                <a href="#home">Home</a>
            </li>
            <li className="list-item">
                <a href="#about">About Us</a>
            </li>
            <li className="list-item">
                <a href="#services">Services</a>
            </li>
            <li className="list-item">
                <a href="#whyus">Why Us</a>
            </li>
            <li className="list-item">
                <a href="#team">Team</a>
            </li>
            <li className="list-item">
                <a href="#blog">Blog</a>
            </li>
        </ul>
    </nav>
        </>
    )
}


function Header(){
    return(
        <>
        <div className="header-comb">
            <div className="header">
            <div className="contact-email">
            <div className="email">
                <div className="email-icon"><IoPaperPlaneOutline /></div>
                <p className="email-par">kibet@gmail.com</p>
            </div>
        </div>
        <div className="club-logo">
            <div className="logo">
                <img src={horseimg} alt="Horse image" className="horse-logo" />
                <p className="horse-par">Horse Club</p>
            </div>
        </div>
        <div className="contact-no">
            <div className="no">
                <p className="no-par">+254719165008</p>
                <div className="no-icon"><FaPhoneAlt /></div>
            </div>
        </div>
        </div>
        <Navigations />
        </div>
        </>
    )
}

export default Header;
