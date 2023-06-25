import React from "react";
import Logo from "../images/Logo.png"; 
import styles from "./Header.module.css"
import { Link, NavLink } from "react-router-dom";



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
                            <li><NavLink to="/"
                            className={({isActive, isPending}) => isPending ? "pending": 
                            isActive ? styles.active : ""}>Home</NavLink></li>
                            <li><NavLink to="/comingsoon"
                            className={({isActive, isPending}) => isPending ? "pending": 
                            isActive ? styles.active : ""}>Features</NavLink></li>
                            <li><NavLink to="/comingsoon"
                            className={({isActive, isPending}) => isPending ? "pending": 
                            isActive ? styles.active : ""}>Pricing</NavLink></li>
                            <li><NavLink to="/contactus" className={({isActive, isPending}) => isPending ? "pending":
                            isActive ? styles.active : ""}>Contact Us</NavLink></li>
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