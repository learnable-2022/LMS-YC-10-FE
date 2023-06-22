import React from "react";
import styles from "../styles/Assignment.module.css";
import LmsHeader from "../lmsHeader/LmsHeader";
import ellipse from "../images/Ellipse 34.png";
import { RiErrorWarningLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import link from "../images/Link.svg";





function handleFile(files) {
    alert("Number of files: " + files.length);
  }
  
  
  // drag drop file component
  function DragDropFile() {
    // drag state
    const [dragActive, setDragActive] = React.useState(false);
    // ref
    const inputRef = React.useRef(null);
    
    // handle drag events
    const handleDrag = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };
    
    // triggers when file is dropped
    const handleDrop = function(e) {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files);
      }
    };
    
    // triggers when file is selected with click
    const handleChange = function(e) {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files);
      }
    };
    
  // triggers the input when the button is clicked
    const onButtonClick = () => {
      inputRef.current.click();
    };
    
    return (
      <form id={styles.formFileUpload} onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} type="file" id={styles.inputFileUpload} multiple={true} onChange={handleChange} />
        <label id={styles.labelFileUpload} htmlFor={styles.inputFileUpload} className={dragActive ? styles.dragActive : "" }>
            <div>
                <div className={styles.dragWrapper}>
                    <img src={link} alt="" />
                    <p>Drag and drop or</p>
                    <button className={styles.uploadButton} onClick={onButtonClick}>Browse files</button>
                </div> 
                <div className={styles.dragTextWrapper}>
                    <p>Maximum Upload File Size: 200mb</p>
                </div>
            </div>
        </label>
        { dragActive && 
        <div id={styles.dragFileElement} onDragEnter={handleDrag} 
        onDragLeave={handleDrag} onDragOver={handleDrag} 
        onDrop={handleDrop}></div> 
        }
      </form>
    );
  };

  
function Assignment(){
return(
    <>
        <div className={styles.assignment}>
            <div>
                <LmsHeader page="Assignment"/>
            </div>
            <div className={styles.assignmentBodyWrapper}>
                <div className={styles.assignmentFirstSection}>
                    <div>
                        <div className={styles.tutorWrapper}>
                            <img src={ellipse} alt="tutor" />
                            <div>
                                <h3>Mrs. Grace Benson</h3>
                                <p>UI/UX Designer</p>
                            </div>
                        </div>
                        <div className={styles.taskWrapper}>
                            <div className={styles.task}>
                                <hr />
                                <div className={styles.taskTextWrapper}>
                                    <h4>Design A Login Page For Either A Website Or An Application</h4>
                                    <div className={styles.taskText}>
                                        <p>Deadline: 5/6/2023</p>
                                        <div className={styles.levelWrapper}>
                                            <p>Difficulty</p>
                                            <div className={styles.levelAnimateWrapper}>
                                                <div className={styles.easyLevel}></div>
                                                <div className={styles.semiHardLevel}></div>
                                                <div className={styles.hardLevel}></div>
                                            </div>
                                        </div>
                                        <div className={styles.retakeWrapper}>
                                            <p>Retakes</p>
                                            <p><span> 1</span>/3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.taskDetails}>
                            <h3>Details</h3>
                            <ol><p>When doing design make sure to pay attention to the following:</p>
                                <li>To your spacing, colors and the typography you use.</li>
                                <li>To the Logo</li>
                                <li>The account identification</li>
                                <li>The title on the login page</li>
                                <li>The password</li>
                                <li>Link to reset password</li>
                                <li>Link to sign up</li>
                            </ol>
                        </div>
                    </div>
                    <div className={styles.assesmentWrapper}>
                        <div className={styles.assesProgress}>
                            <div>
                                <p><span>2</span>/4</p>
                            </div>
                            <h4>Completed Assignments</h4>
                        </div>
                        <div className={styles.assesProgress}>
                            <div>
                                <p><span>75%</span></p>
                            </div>
                            <h4>Average Class Score</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.warningWrapper}>
                    <i><RiErrorWarningLine /></i>
                    <p>After the deadline, it will be impossible to get 
                        a maximum score. submit your assignment on time.</p>
                </div>
                <div>
                    <h3 className={styles.resourcesh3}>Resources</h3>
                    <div className={styles.resourcesWrapper}>
                        <div className={styles.resources}>
                            <div>
                                <p>Designing a user-friendly login</p>
                                <i><FiDownload /></i>
                            </div>
                        </div>
                        <div className={styles.resources}>
                            <div>
                                <p>Designing UX login form and process</p>
                                <i><FiDownload /></i>
                            </div>
                        </div>
                    </div>
                    <div className={styles.doingRetakesWrapper}>
                        <div className={styles.doingRetakes}>
                            <hr />
                            <div>
                                <h4>Doing Assignment</h4>
                                <div>Retakes <p><span>1</span>/3</p></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.assignmentTextArea}>
                        <textarea placeholder="Type Answer"></textarea>
                    </div>
                    <div>
                        <DragDropFile />
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default Assignment