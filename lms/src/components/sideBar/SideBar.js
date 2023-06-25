import React, { useContext} from "react";
import { IoDocumentOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { VscHome } from "react-icons/vsc";
import { FiLogIn } from "react-icons/fi";
import styles from "./SideBar.module.css"
import Logo from "../images/LogoWhite.png"; 
import { NavLink, Link } from "react-router-dom";
import { AiOutlinePieChart } from 'react-icons/ai';
import axios from "axios";
import { UserContext } from '../../utils/UserContext';



function SideBar(){

    const user = useContext(UserContext)
 
    const handleLogout = async () => {
    
        let token = localStorage.getItem("token")
        // let email = localStorage.getItem("userEmail")
        const email = user.userData.data.Email
          const data = {
            email: email,
          }
          const url = "https://kidtots.onrender.com/student/logout"
        
          await axios.post(url, data, {
            headers:{
            "Authorization": "Bearer" + token,
            "Content-Type": "application/json",
            }
           }).then((response) =>{
         
            if(response.status === 200){
                localStorage.clear();
            // setEmail("");
            }
           }).then((error) =>{

           })     
        }   
  

return(
    <>
        <div className={styles.sideBarWrapper}>
 

            <div className={styles.logo}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className={styles.navLinkWrapper}>
                <div className={styles.firstSectionLink} >
                    <li>
                        <NavLink to="/dashboard"
                        className={({isActive, isPending}) => isPending ? "pending": 
                        isActive ? styles.active : ""}>
                            <div>
                            <i><VscHome /></i><p>Dashboard</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/learningpath"                 
                        className={({isActive, isPending}) => isPending ? "pending": 
                        isActive ? styles.active : ""}>
                            <div>
                            <i><FaBook /></i><p>Courses</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/assignment"
                        className={({isActive, isPending}) => isPending ? "pending": 
                        isActive ? styles.active : ""}>
                            <div>
                            <i><MdOutlineAssignment /></i><p>Assignments</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/comingsoon"
                        className={({isActive, isPending}) => isPending ? "pending": 
                        isActive ? styles.active : ""}>
                            <div>
                                <i><AiOutlinePieChart /></i>
                                <p>Progress Report</p>
                            </div>
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to="/certificate"
                        className={({isActive, isPending}) => isPending ? "pending": 
                        isActive ? styles.active : ""}>
                            <div>
                            <i><IoDocumentOutline /></i><p>Certificates</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings"
                        className={({isActive, isPending}) => isPending ? "pending": 
                        isActive ? styles.active : ""}>
                            <div>
                            <i><IoSettingsOutline /></i><p>Settings</p>
                            </div>
                        </NavLink>
                    </li>
                </div>
                <div className={styles.sideBarFooter}>
                    <div>
                        <Link to="/">
                        <div onClick={handleLogout}>
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