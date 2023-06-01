import React from "react";
import Logo from "../images/Logo.png"; 
import styles from "./Header.module.css"



function Header(){
return(
    <>
        <div className={styles.headerWrapper}>
        <div className={styles.header}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className={styles.navBarWrapper}>
                        <div className={styles.navBarWrapper}>
                            <li><a href="https://df">Home</a></li>
                            <li><a href="https://df">Features</a></li>
                            <li><a href="https://df">Pricing</a></li>
                            <li><a href="https://df">Contact Us</a></li>
                        </div>
                        <div className={styles.btn}>
                            <button><a href="https://df">Sign Up</a></button>
                            <button><a href="https://df">Sign In</a></button>
                        </div>
                    </div>
                </div>
        </div>
    </>
)
} 
export default Header;