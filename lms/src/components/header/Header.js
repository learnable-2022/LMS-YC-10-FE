import React from "react";
import Logo from "../images/Logo.png"; 
import styles from "./Header.module.css"
import { Link } from "react-router-dom";



function Header(){
return(
    <>
        <div className={styles.navHeaderWrapper}>
        <div className={styles.navHeader}>
                    <div className={styles.navLogo}>
                    <Link to="/"><img src={Logo} alt="Logo" /></Link>
                    </div>
                    <div className={styles.navBarWrapper}>
                        <div className={styles.navBarWrapper}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/termsofuse">Features</Link></li>
                            <li><Link to="https://df">Pricing</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </div>
                        <div className={styles.navBtn}>
                            <button><Link to="/accounttype">Sign Up</Link></button>
                            <button><Link to="/login">Sign In</Link></button>
                        </div>
                    </div>
                </div>
        </div>
    </>
)
} 
export default Header;