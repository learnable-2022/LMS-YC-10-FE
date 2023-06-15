import { Routes, Route } from "react-router-dom";
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
import Dashboard from "./components/pages/Dashboard";
import Certificate from "./components/pages/Certificate";
import OngoingCourse from "./components/pages/OngoingCoursePage";
import ErrorShow from "./components/popUpSideBar/ErrorShow";
import SettingsPage from "./components/pages/SettingsPage";
import Assignment from "./components/pages/Assignment";
import QuizStart from "./components/pages/QuizStart";
import Quiz from "./components/pages/Quiz";
import CoursePage from "./components/pages/CoursePage";
import GeneralCoursePage from "./components/pages/GeneralCoursePage";
import LearningPath from "./components/pages/LearningPath";



function App() {


 

     
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


            {/* pages when when user is logged in  */}
          <Route  path="/dashboard" element={<Main pageLocation={<Dashboard />}/>} />
          <Route  path="/LearningPath" element={<Main pageLocation={<LearningPath />}/>} />
          <Route  path="/courses" element={<Main pageLocation={<GeneralCoursePage />}/>} />
          <Route  path="/CoursePage" element={<Main pageLocation={<CoursePage />}/>} />
          <Route  path="/Quiz" element={<Main pageLocation={<Quiz />}/>} />
          <Route  path="/quiz/quizstart" element={<Main pageLocation={<QuizStart />}/>} />
          <Route  path="/Assignment" element={<Main pageLocation={<Assignment />}/>} />
          <Route  path="/settings" element={<Main pageLocation={<SettingsPage />}/>} />
          <Route  path="/Certificate" element={<Main pageLocation={<Certificate />}/>} />
          <Route  path="/courses/ongoingcourse" element={<Main pageLocation={<OngoingCourse />}/>} />
          <Route  path="/error" element={<Main pageLocation={<ErrorShow />}/>} />



           


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

export default App;
