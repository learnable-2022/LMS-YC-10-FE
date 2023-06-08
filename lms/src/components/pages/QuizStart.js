import React from 'react'
import styles from '../styles/quizStart.module.css';
import LmsHeader from "../lmsHeader/LmsHeader";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import star from '../images/star.png'

export default function QuizStart() {
    const questions = [
		{
			questionText: 'Which of the following best describes figma?',
			answerOptions: [
				{ answerText: 'A digital design and prototyping tool', isCorrect: true },
				{ answerText: 'A video game', isCorrect: false },
				{ answerText: 'A social media platform ', isCorrect: false },
				{ answerText: 'A cooking app', isCorrect: false },
			],
		},
		{
			questionText: 'What can you create using figma?',
			answerOptions: [
				{ answerText: 'Digital artwork', isCorrect: true },
				{ answerText: 'Origami figures', isCorrect: false },
				{ answerText: 'Music compositions', isCorrect: false },
				{ answerText: 'Science experiment', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is a basic feature of figma?',
			answerOptions: [
				{ answerText: 'Language translation', isCorrect: true },
				{ answerText: 'Fitness tracking', isCorrect: false },
				{ answerText: 'Drawing tools', isCorrect: true },
				{ answerText: 'Gardening tips', isCorrect: false },
			],
		},
		{
			questionText: 'How can you collaborate with others in figma?',
			answerOptions: [
				{ answerText: 'Play multiplayer game', isCorrect: false },
				{ answerText: 'Share your projects with friends', isCorrect: true },
				{ answerText: 'Send text messages', isCorrect: false },
				{ answerText: 'Through message', isCorrect: false },
			],
		},
        {
			questionText: 'How can children learn to use figma?',
			answerOptions: [
				{ answerText: 'Play musical instruments', isCorrect: false },
				{ answerText: 'Read novels', isCorrect: false },
				{ answerText: 'Take swimming lessons', isCorrect: false },
				{ answerText: 'Watch tutorials and videos', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
    const [progressBar, setProgressBar] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [Selected, setSelected] = useState(false)

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
        setSelected(true)
       
        
	
	};

    const handleNextQuestion = () => {
        setProgressBar(progressBar + 20);
        const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {

        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
    }

  return (
    <>
    <div className={styles.wrapper}>
        <div>
            <LmsHeader  page='Course' />
        </div>
        <div>
        <div className={styles.courseDirectory}>
            <div>
                <Link to="/">
                   <p>Course</p>
                    <i><IoIosArrowForward /></i>
                </Link>
            </div>
            <div>
                <Link to="/">
                    <p>Select a course</p>
                    <i><IoIosArrowForward /></i>
                </Link>
            </div>
            <div>
                <Link to="/" >
                   <p>UI/UX</p>
                    <i><IoIosArrowForward /></i>
                </Link>
            </div>
            <div>
                <Link to="/" >
                   <p>Introduction to Figma</p>
                    <i><IoIosArrowForward /></i>
                </Link>
            </div>
            <div>
                <p className={styles.active}>Quiz</p>
            </div>
            </div>
        </div>
        <div className={styles.bodyWrapper}>
            <div className={styles.quizContainer}>
            {showScore ? (
				<div className={styles.scoreSection}>
                    <img src={star} alt="" />
                    <h1 styles={{ display: 'block' }} >Congratulations</h1>
                    <p>You have succesfuly completed your quiz and earned a badge</p>
					
                    <div>
                        <p>You scored {score} out of {questions.length}</p>
                    <Link to='/courses/ongoingcourse' styles={{ textDecoration: 'none', color: '#0288D1', padding: '10px' }} ><p>Back to class</p></Link>
                    </div>
				</div>
                
			) : (
              <>
                  
               <div className={styles.progressBar}>
                    <div className={styles.progress}
                     style={{
                        width: progressBar + '%'
                        
                      }} 
                    >

                    </div>
               </div>

               <h3 className={styles.questionNumber}>
                    Question :{currentQuestion + 1}/ {questions.length}
               </h3>

               <p className={styles.question}>
                 {questions[currentQuestion].questionText}
                  
               </p>


					<div className={styles.answerSection}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className={styles.answers} 
                            // style={{
                            //     backgroundColor: Selected ? '#0288D1' : 'white',
                              
                            //   }}
                            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>

               <div className={styles.quizBtns}>
                <h3 onClick={handleNextQuestion} >Skip question</h3>
                <button onClick={handleNextQuestion}>Next Question</button>
              
               </div>
              </>

              )}

            </div>
            
        </div>

    

    </div>
</>
  )
}
