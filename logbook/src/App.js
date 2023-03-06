import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Sidebar from './Components/Sidebar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import WorkDetails from './Components/WorkDetails';
import NewReport from './Components/NewReport';
import Loginlecturer from './Pages/Loginlecturer';
import Signuplecturer from './Pages/Signuplecturer';
import PR from "./PR";
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
          <Routes> 
            <Route path="/" element={<LandingPage />} />
            <Route path="/workdetails" element={<WorkDetails />} />
            <Route path="/newreport" element={<NewReport />} />
            <Route path="/student/login" element={<Login />} /> 
            <Route path="/lecturer/login" element={<Loginlecturer />} />
            <Route path="/student/signup" element={<Signup />} />
            <Route path="/lecturer/signup" element={<Signuplecturer />} />
            <Route path="/pastrecords" element={<PR />} />
            <Route path="/profile" element={<Profile />} />
            </Routes>
        
      </Router>
      
    </div>
    
  
    

  );
}

export default App;
