import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "../styles/PrivacyPolicy.module.css"




function PrivacyPolicy(){
return(
    <>
        <div>
            <div>
                <Header />
            </div>
            <div className={styles.privacyBodyWrapper}>
                <div className={styles.privacyBody}>
                    <p>
                    At Kidstot, we are committed to protecting your privacy. This Privacy Policy 
                    explains how we collect, use, and safeguard your personal information when you
                    use our Learning Management System (LMS) platform. By accessing or using our platform, you consent to the practices described in this Privacy Policy.
                    </p>
                </div>
            </div>
            <div className={styles.privacyBodyTextWrappper}>
                    <div className={styles.privacyBodyText}>
                        <ol>
                            <h3><li>Information We Collect:</li></h3>
                            <ul>
                                <li>We may collect personal information such as your name, email address, and demographic information when 
                                    you create an account or interact with our platform.</li>
                                <li>We also collect usage data, including log files, IP addresses, and device information, to analyze 
                                    platform performance and improve user experience.</li>
                            </ul>
                            <h3><li>Use of Information:</li></h3>
                            <ul>
                                <li>We use your personal information to provide and improve our platform, deliver personalized content, and communicate with you.</li>
                                <li>We may also use aggregated and anonymized data for research and statistical purposes.</li>
                            </ul>
                            <h3><li>Data Sharing:</li></h3>
                            <ul>
                                <li>Kidstot does not sell, trade, or rent your personal information to third parties.</li>
                                <li>We may share your information with trusted service providers who assist 
                                    us in operating our platform, subject to confidentiality obligations.</li>
                            </ul>
                            <h3><li>Data Security:</li></h3>
                            <ul>
                                <li>We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration.</li>
                                <li>However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</li>
                            </ul>
                            <h3><li>Third-party Links and Services:</li></h3>
                            <ul>
                                <li>Our platform may contain links to third-party websites or services. Please note that we are not responsible for their privacy practices.</li>
                                <li>We encourage you to review the privacy policies of these third-party services before providing any personal information.</li>
                            </ul>
                            <h3><li>Children’s Privacy:</li></h3>
                            <ul>
                                <li>Kids Tots is intended for users aged 9 to 16. We do not knowingly collect personal information from children under the age of 13 without parental consent.</li>
                            </ul>
                            <h3><li>Changes to the Privacy Policy:</li></h3>
                            <ul>
                                <li>We may update this Privacy Policy from time to time. Any changes will be effective upon posting on our platform.</li>
                            </ul>
                        </ol>
                        <h4>If you have any questions or concerns about our Terms of Use or Privacy Policy, please contact us at <a href="https://">www.kidstotlms.org</a></h4>
                    </div>
                </div>
            <div>
                <Footer />
            </div>
        </div>
    </>
)
}
export default PrivacyPolicy