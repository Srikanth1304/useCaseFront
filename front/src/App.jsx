import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Header from './PageComponents/Header';
import Body from './PageComponents/Body';
import Footer from './PageComponents/Footer';

import Jobs from './NavComponents/Jobs';
import Home from './NavComponents/Home';
import About from './NavComponents/About';
import Applied from './NavComponents/Applied';
import Notifications from './NavComponents/Notifications';
import Contact from './NavComponents/Contact';    


import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import InterviewChat from './NavComponents/InterviewChat';
import Interview from './NavComponents/Interview';
export default function App() {


  return (  
   
    <div className="flex flex-col h-screen">

      <BrowserRouter>
      {/* <Header /> */}
      <Routes>
      <Route path='/login' element={<Login/>}/>    
      <Route path='/signup' element={<SignUp/>}/>  
        <Route path='/' element={<Header/>}>    
          <Route path="/" element={<Home/>} />   
          <Route path="jobs" element={<Jobs/>} />
          <Route path="about" element={<About/>} />
          <Route path="applied" element={<Applied/>} />
          <Route path="notifications" element={<Notifications/>} />
          <Route path="contact" element={<Contact/>} />  
          <Route path="interview" element={<InterviewChat/>} />  
          <Route path="interviews" element={<Interview/>} />
        </Route>
      </Routes>
  
      </BrowserRouter>
    </div>
  );
}
