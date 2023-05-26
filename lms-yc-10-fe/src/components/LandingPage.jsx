import girlHero from './images/girlHero.svg'
import genesysLogo from './images/genesysLogo.svg'
import codevilleLogo from './images/codevilleLogo.svg'
import learnableLogo from './images/learnableLogo.svg'
import teneceLogo from './images/teneceLogo.svg'
import emblem from './images/emblem.svg'
import webCourse from './images/webCourse.svg'
import roboticsCourse from './images/roboticsCourse.svg'
import uiCourse from './images/uiCourse.svg'
import scienceCourse from './images/scienceCourse.svg'
import instructor from './images/instructor.svg'
import liveClasses from './images/liveClasses.svg'
import oneSupport from './images/oneSupport.svg'
import messageIcon from './images/messageIcon.svg'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import linkedIn from './images/linkedIn.svg'

function LandingPage(){
    return (
        <div>
        <div className="wrapper">
            <div className="heroContainer">
                <div className="text">
                    <h1>Empowering Your Child <br />
                        Through Our Learning <br /> Management
                        System</h1>
                    <p>Unlock a kid's 
                        world of wonders and empowering <br />
                         children through interactive learning"</p>
                </div>
                <div className="heroImg">
                    <img src={girlHero} alt="" />
                </div>
            </div>
            <div className="getStarted-explore">
                <a href="#" className="generalA getStarted">Get Started</a>
                <a href="#" className="generalA explore">Explore Courses</a>
            </div>
        </div>
            <div className="partnerWrapper">
                <h1>OUR PARTNERS</h1>
                <div className="partners">
                    <div className="genesys">
                        <img src={genesysLogo} alt="" />
                    </div>
                    <div className="codeville">
                        <img src={codevilleLogo} alt="" />
                    </div>
                    <div className="learnable">
                        <img src={learnableLogo} alt="" />
                    </div>
                    <div className="tenece">
                        <img src={teneceLogo} alt="" />
                    </div>
                    <div className="emblem">
                        <img src={emblem} alt="" />
                    </div>
                </div>
            </div>
            <div className="coursesSection">
                <h1>Our Courses</h1>
                <div className="coursesWrapper">
                    <div className="courseContainer blue">
                        <div className="courseImg">
                            <img src={webCourse} alt="" />
                        </div>
                        <h4>Web Development</h4>
                        <p>Kids can build digital
                         worlds through web development</p>
                    </div>
                    <div className="courseContainer red">
                        <div className="courseImg">
                            <img src={roboticsCourse} alt="" />
                        </div>
                        <h4>Robotics</h4>
                        <p>Let your kids dive into the world of robotics</p>
                    </div>
                    <div className="courseContainer blue">
                        <div className="courseImg">
                            <img src={scienceCourse} alt="" />
                        </div>
                        <h4>Science</h4>
                        <p>Your child can unleash the power of Science </p>
                    </div>
                    <div className="courseContainer red">
                        <div className="courseImg">
                            <img src={uiCourse} alt="" />
                        </div>
                        <h4>UI/UX</h4>
                        <p>Unleash your child’s creativity through UI/UX</p>
                    </div>
                   

                </div>
            </div>
             {/**for the customer support chat icon*/}
             <div className="customerSupport">
                <img src={messageIcon} alt="" />
             </div>
             <div className="potentialWrapper">
                <div className="potentialContainer">
                    <h1>Unlock Your Teaching Potentials</h1>
                    <p>Easily upload and manage
                         your courses for free, engage with students,
                          and track your progress. Join our community 
                          of tutors today for free and
                         start sharing your expertise with the world!</p>
                    <div className="trial-plans">
                        <div className="trial">
                            <a href="#" className="generalA getStarted">Start For Free</a>
                        </div>
                        <div className="plans">
                            <a href="#">View All Plans</a>
                        </div>
                    </div>
                </div>
             </div>
             <div className="provisionWrapper">
                <div className="provisionContainer">
                    <h1>We Provide</h1>
                    <div className="provisions">
                        <div className="provisionContent">
                            <div className="provisionImg">
                                <img src={instructor} alt="" />
                            </div>
                            <div className="provisionText">
                                <h5>Best Instructors</h5>
                                <p>Beyond the classroom, 
                                    We have the best
                                    instructors that serve as mentors and role models.</p>
                            </div>
                           
                        </div>
                        <div className="provisionContent">
                            <div className="provisionImg">
                                <img src={liveClasses} alt="" />
                            </div>
                            <div className="provisionText">
                                <h5>Live Classes</h5>
                                <p>We offer vibrant 
                                    and dynamic live classes 
                                    where learning comes to life.</p>
                            </div>
                            
                        </div>
                        <div className="provisionContent">
                            <div className="provisionImg">
                                <img src={oneSupport} alt="" /> 
                            </div>
                            <div className="provisionText">
                                <h5>One on One Support</h5>
                                <p>Our one-on-one support is not 
                                    for academic matters alone.
                                    We provide  holistic development.</p>
                            </div>
                            
                        </div>

                    </div>
                </div>
             </div>
             <div className="clientsWrapper">
                <div className="clientsContainer">

                </div>
             </div>
             <div className="connectedWrapper">
                <div className="connectedContainer">
                    <div className="connectedContent one">
                        <div className="connectOneA">
                            <h1>Stay Connected</h1>
                            <p>Never miss out on the latest updates,
                                educational tips, and exclusive offers! Subscribe to our newsletter and 
                                stay connected with our child learning community.</p>
                        </div>
                        <div className="connectedOneB">
                            <label htmlFor="subscription" className="email">Enter Your Email</label> <br />
                            <input type="email" name="subscription" id="" placeholder='hello@example.com' />
                            <button type="submit">Submit</button>
                            <p>By submitting your email address, you agree 
                                to kidsTot’s <span>Terms of Use</span> and <span>Policy</span> </p>
                        </div>
                    </div>
                    <div className="connectedContent two">
                        <p>About Us</p>
                        <ul>
                            <li>Our Mission</li>
                            <li>Meet The Team</li>
                            <li>Testimonials</li>
                            <li>Privacy POlicy</li>
                        </ul>
                    </div>
                    <div className="connectedContent three">
                        <p>Support</p>
                            <ul>
                                <li>FAQs</li>
                                <li>Contact Us</li>
                                <li>Terms of Service</li>
                                <li>Help Center</li>
                            </ul>
                    </div>
                </div>
             </div>
            <footer>
                <div className="footerContainer">
                    <div className="copyright">
                        <p>Copyright 2023 Kidstot co. Ltd.All rights reserved</p>
                    </div>
                    <div className="socialMedia">
                        <div className="linkedin"><img src={linkedIn} alt="" /></div>
                        <div className="twitter"><img src={twitter} alt="" /></div>
                        <div className="facebook"><img src={facebook} alt="" /></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default LandingPage;