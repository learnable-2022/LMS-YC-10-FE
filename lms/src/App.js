import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Main from './components/main/Main';
import LandingPage from './components/pages/LandingPage';
import AccountType from './components/pages/register/AccountType'
import SignUp from './components/pages/register/SignUp'
import Login from './components/pages/register/Login'
import ForgotPassword from './components/pages/register/ForgotPassword'
import CreateNewPassword from './components/pages/register/CreateNewPassword'
import ContactUs from './components/pages/ContactUs';
import ErrorPage from "./components/pages/ErrorPage";
import SettingsPage from "./components/pages/SettingsPage";
import CoursePage from "./components/pages/CoursePage";
import OngoingCourse from "./components/pages/OngoingCoursePage";
import LearningPath from "./components/pages/LearningPath";
import GeneralCoursePage from "./pages/GeneralCoursePage";
import Quiz from "./components/pages/Quiz";
import QuizStart from "./components/pages/QuizStart";
import Assignment from "./components/pages/Assignment";
import Dashboard from "./components/pages/Dashboard";
import Certificate from "./components/pages/Certificate";
import ErrorShow from "./components/popUpSideBar/ErrorShow";
// import Main from "./components/main/Main";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 

      if (isLoggedIn) {
        return (
          <div className="App">
         <Main />
         </div>
        );
      }
      else{
        return (
          <div className="App">

           
        <Routes>
          <Route index path="/" element={ <LandingPage />} />
          <Route path="/accounttype" element={<AccountType /> } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/createnewpassword" element={<CreateNewPassword />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route  path="/error" element={<ErrorPage />} />
          {/* <Route  path="/main/*" element={<Main />} /> */}


          {/* <Route path="*" element={} /> */}
          <Route path="" element={<Main />} >
                       
              <Route path='/' element={<Dashboard />} />
                       <Route path='/learningpath' element={<LearningPath />}/>
                       <Route path='/courses' element={<GeneralCoursePage />}/>
                       <Route path='/coursepage' element={<CoursePage/>} />
                       <Route path='/quiz' element={<Quiz/>}/>
                       <Route path='/quiz/quizstart' element={<QuizStart/>}/>
                       <Route path='/assignment' element={<Assignment/>}/>
                       {/* <Route path='/assignment' element={<Assignment/>}/> */}
                       <Route path='/settings' element={<SettingsPage/>}/>
                       <Route path='/certificate' element={<Certificate/>}/>
                       <Route path="/courses/ongoingcourse" element={<OngoingCourse />} />
                       <Route path="/error" element={<ErrorShow />} />
                   </Route>
      </Routes>
          
         </div>
        );
        
      }
     
        

}

export default App;
