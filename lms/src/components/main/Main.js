import React from "react";
import SideBar from "../sideBar/SideBar";
import styles from "./Main.module.css";



function Main({pageLocation}){
return(
    <>
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
    </>
)
}
export default Main;