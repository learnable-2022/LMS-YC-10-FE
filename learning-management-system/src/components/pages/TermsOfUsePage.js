import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "../styles/TermsOfUse.module.css";


function TermsOfUse(){
return(
    <>
        <div>
            <div>
                <Header />
            </div>
            <div>
                <h1>Terms Of Use</h1>
                <div className={styles.bodyWrapper}>
                <div className={styles.body}>
                    <p>Welcome to Kidstot! These Terms of Use govern your access to and use of the Kidstot 
                    Learning Management System (LMS) platform. By accessing or using our platform, you agree
                    to comply with these terms. If you do not agree with any part of these terms, please refrain from using our platform.</p>
                </div>
                </div>
                <div className={styles.bodyTextWrappper}>
                    <div className={styles.bodyText}>
                        <ol>
                            <h3><li>User Responsibilities:</li></h3>
                            <ul>
                                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                                <li>You must use the platform in compliance with applicable laws and regulations.</li>
                                <li>You may not engage in any activity that disrupts or interferes with the platform's operation.</li>
                                <li>You must respect the intellectual property rights of Kidstot and other users.</li>
                            </ul>
                            <h3><li>Content and Ownership:</li></h3>
                            <ul>
                                <li>Kidstot retains ownership of all the content and materials available on the platform.</li>
                                <li>Users may only use the content for personal, non-commercial purposes.</li>
                                <li>You may not modify, reproduce, distribute, or sell any content from the platform without prior authorization.</li>
                            </ul>
                            <h3><li>Privacy and Data Protection:</li></h3>
                            <ul>
                                <li>Kidstot respects your privacy and handles your personal information in accordance with our Privacy Policy.</li>
                                <li>By using the platform, you consent to the collection, use, and disclosure of your personal information as described in the Privacy Policy.</li>
                            </ul>
                            <h3><li>Limitation of Liability:</li></h3>
                            <ul>
                                <li>Kidstot is not responsible for any damages or losses resulting from your use of the platform.</li>
                                <li>We strive to provide accurate and reliable content, but we do not guarantee its accuracy or completeness.</li>
                                <li>Kidstot is not liable for any third-party content, materials, or services accessed through the platform.</li>
                            </ul>
                            <h3><li>Modifications and Termination:</li></h3>
                            <ul>
                                <li>Kidstot reserves the right to modify or discontinue the platform at any time without prior notice.</li>
                                <li>We may update these Terms of Use from time to time, and the updated terms will be effective upon posting.</li>
                            </ul>
                            <h3><li>Governing Law:</li></h3>
                            <ul>
                                <li>These Terms of Use shall be governed by and construed in accordance with the laws of Federal Republic of Nigeria.</li>
                                <li>Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts in Federal Republic of Nigeria.</li>
                            </ul>
                        </ol>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </>
)
}
export default TermsOfUse