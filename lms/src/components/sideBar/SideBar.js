import React from "react";
import { IoDocumentOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { VscHome } from "react-icons/vsc";
import { FiLogIn } from "react-icons/fi";
import styles from "./SideBar.module.css"
import Logo from "../images/LogoWhite.png"; 
import { NavLink, Link } from "react-router-dom";
import { AiOutlinePieChart } from 'react-icons/ai';
// import ErrorPage from '../pages/ErrorPage';
// import styles from "../styles/ErrorPage.module.css";
// import pana from "../images/pana.png";
// import logo from "../images/Logo.png"


function SideBar(){
    // const [showError, setShowError] = useState(false)
    // const handleClick = () =>{
    //     setShowError(!showError)
    //     return 
    // }
return(
    <>
        <div className={styles.sideBarWrapper}>
        {/* <ErrorPage trigger={showError}>
        <div className={styles.errorPageWrapper}>
            <div className={styles.logoWrapper}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.errorBodyWrapper}>
                <p>We Sincerely apologize</p>
                <img src={pana} alt="error" /><br />
                <button onClick={handleClick}>Back</button>
            </div>
        </div>
        </ErrorPage> */}

            <div className={styles.logo}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className={styles.navLinkWrapper}>
                <div className={styles.firstSectionLink} id={styles.firstSectionLink}>
                    <NavLink to="/dashboard">
                        <div>
                        <i><VscHome /></i><p>Dashboard</p>
                        </div>
                    </NavLink>
                    <NavLink to="/learningpath">
                        <div>
                        <i><FaBook /></i><p>Courses</p>
                        </div>
                    </NavLink>
                    <NavLink to="/assignment">
                        <div>
                        <i><MdOutlineAssignment /></i><p>Assignments</p>
                        </div>
                    </NavLink>
                    <NavLink to="/error">
                        <div>
                            <i><AiOutlinePieChart /></i>
                            <p>Progress Report</p>
                        </div>
                    </NavLink>  
                    <NavLink to="/certificate">
                        <div>
                        <i><IoDocumentOutline /></i><p>Certificates</p>
                        </div>
                    </NavLink>
                    <NavLink to="/settings">
                        <div>
                        <i><IoSettingsOutline /></i><p>Settings</p>
                        </div>
                    </NavLink>
                </div>
                <div className={styles.sideBarFooter}>
                    <div>
                        <Link to="/home">
                        <div>
                        <i><FiLogIn /></i><p>Logout</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default SideBar