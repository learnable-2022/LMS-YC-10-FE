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
// import PopUp from "./components/popUpSideBar/PopUp";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

 

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


          {/* <Route path="*" element={} /> */}
       
      </Routes>
          
         </div>
        );
        
      }
     
        

}

export default App;
