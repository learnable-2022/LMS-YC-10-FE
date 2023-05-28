import React from "react";
import kid1 from "../../images/kid1.png";
import kid2 from "../../images/kid2.png";
import kid3 from "../../images/kid3.png";
import kid4 from "../../images/kid4.png";
import design from "../../images/design.png";
import chat from "../../images/chat.png";
import puzzle from "../../images/WordPuzzle.png";




function RightCoursePage(){
return(
    <>
        <div>
            <div>
                <div>
                    <p>Recent Updates</p>
                    <a href="https://">More</a>
                </div>
                <div>
                    <img src={design} alt="Course" />
                    <p>Principle Of Design</p>
                </div>
                <div>
                    <img src={puzzle} alt="Game" />
                    <p>Python Word Puzzle</p>
                </div>
                <div>
                    <img src={chat} alt="Chat" />
                    <p>Chat</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Learners on the Course</p>
                    <a href="https://">More</a>
                </div>
                <div>
                    <img src={kid1} alt="Child" />
                    <p>Perpee James</p>
                </div>
                <div>
                    <img src={kid2} alt="Child" />
                    <p>Queen Kings</p>
                </div>
                <div>
                    <img src={kid3} alt="Child" />
                    <p>Stanley Okeke</p>
                </div>
                <div>
                    <img src={kid4} alt="Child" />
                    <p>Ifeanyi Okereke</p>
                </div>
            </div>
        </div>
    </>
)
}
export default RightCoursePage;