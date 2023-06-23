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
import OurMission from "./components/pages/OurMissonPage";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsOfUse from "./components/pages/TermsOfUsePage";
import MeetTeam from "./components/pages/MeetTeam";
import AboutUs from "./components/pages/AboutUsPage";
import ComingSoon from "./components/pages/ComingSoon";



function App() {


 

     
return (
      <div className="App">

           
      <Routes>
          <Route index path="/" element={ <LandingPage />} />
          <Route path="/accounttype" element={<AccountType /> } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login//*" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/createnewpassword" element={<CreateNewPassword />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route  path="/error" element={<ErrorPage />} />
          <Route  path="/ourmission" element={<OurMission />} />
          <Route  path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route  path="/termsofuse" element={<TermsOfUse />} />
          <Route  path="/theteam" element={<MeetTeam />} />
          <Route  path="/aboutus" element={<AboutUs />} />
          <Route  path="/comingsoon" element={<ComingSoon />} />
          {/* <Route  path="/main/*" element={<Main />} /> */}


            {/* pages when when user is logged in  */}
          <Route  path="/dashboard" element={<Main pageLocation={<Dashboard />}/>} />
          <Route  path="/learningpath" element={<Main pageLocation={<LearningPath />}/>} />
          <Route  path="/learningpath/courses/:start" element={<Main pageLocation={<GeneralCoursePage />}/>} />
          <Route  path="/learningpath/courses/:id" element={<Main pageLocation={<CoursePage />}/>} />
          <Route  path="/learningpath/quiz" element={<Main pageLocation={<Quiz />}/>} />
          <Route  path="/learningpath/quiz/quizstart" element={<Main pageLocation={<QuizStart />}/>} />
          <Route  path="/Assignment" element={<Main pageLocation={<Assignment />}/>} />
          <Route  path="/settings" element={<Main pageLocation={<SettingsPage />}/>} />
          <Route  path="/Certificate" element={<Main pageLocation={<Certificate />}/>} />
          <Route  path="/learningpath/ongoingcourse" element={<Main pageLocation={<OngoingCourse />}/>} />
          <Route  path="/error" element={<Main pageLocation={<ErrorShow />}/>} />



           

      </Routes>
          
         </div>
        );
        
     
        

}

export default App;
