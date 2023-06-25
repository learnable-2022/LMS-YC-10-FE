import React from "react";
import SideBar from "../sideBar/SideBar";
import styles from "./Main.module.css";
import { useNavigate } from "react-router-dom";



function Main({pageLocation}){
    const navigate = useNavigate()
   
 let token = localStorage.getItem("token")

return(
    <>
    { token ?
        <div className={styles.main}>
                <div className={styles.sideBarWrapper}>
                    <div className={styles.sideBar}>
                        <SideBar />
                    </div>
                </div>
                <div className={styles.mainBody}>

                    {pageLocation}

                 
                </div>
      
        </div>
        :   navigate("/")
        }
    </>
)
}
export default Main;