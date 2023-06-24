import React, { useEffect } from 'react';
import "./Header.css"
import Logo from "../logo-the-white-house.png";
const Header = () => {
    useEffect(() => {
        window.onscroll = function () {
            myFunction();
        };

        const navbar = document.getElementById("navbar");
        const sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }, []);

    return (
        <header>
            <nav id="navbar" className="navbar">
                <p id="brand">THE WHITE HOUSE</p>

                <p id="menu">MENU</p>
            </nav>
            <div className="logo-container">
                <img id='logo' src={Logo} alt='logo' />
            </div>
            {/* Rest of your JSX content */}
        </header>
    );
}
export default Header