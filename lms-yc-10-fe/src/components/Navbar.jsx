import kidLogo from './images/kidsLogo.svg'
function Navbar(){
    return ( <div>
                <div className="navContainer">
                    <div className="logo">
                        <img src={kidLogo} alt="" />
                    </div>
                    <div className="navItems">
                        <ul className="nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <div className="signup-signin">
                            <a href="#" className="generalA signup">Sign Up</a>
                            <a href="#" className="generalA signin">Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
    )
   
}

export default Navbar;