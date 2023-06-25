import React, { useEffect, useState } from 'react';
import "./Header.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../logo-the-white-house.png";
const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCopy = (event) => {
        event.preventDefault();
        // Optional: Show a message or perform any other action when copy is attempted
        toast.warning("Copy Paste Not Allowed");
    };

    return (
        <header className={isScrolled ? 'scrolled' : ''} onCopy={handleCopy}>
            <nav id="navbar" className="navbar">
                <p id="brand">THE WHITE HOUSE</p>

                <p id="menu">MENU</p>
            </nav>
            <div className="logo-container">
                <img id='logo' src={Logo} alt='logo' />
            </div>
            {/* Rest of your JSX content */}
            <ToastContainer />
        </header>
    );
}
export default Header