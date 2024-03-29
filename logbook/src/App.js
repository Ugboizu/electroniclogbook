import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import WorkDetails from './Components/WorkDetails';
import NewReport from './Components/NewReport';
import Loginlecturer from './Pages/Loginlecturer';
import Signuplecturer from './Pages/Signuplecturer';
import PR from "./PR";
import Profile from './Components/Profile';
import ProfileLecturer from './Components/ProfileLecturer';
import StudentSupervising from './Components/StudentSupervising';
import Workdetailpart from './Components/Workdetailpart';
import RP from "./RP";
import ProtectedRoutes from './Pages/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      
      <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/student/login" element={<Login />} /> 
            <Route path="/lecturer/login" element={<Loginlecturer />} />
            <Route path="/student/signup" element={<Signup />} />
            <Route path="/lecturer/signup" element={<Signuplecturer />} />

            <Route element={<ProtectedRoutes />}>

              <Route path="/workdetails" element={<WorkDetails />} />
              <Route path="/newreport" element={<NewReport />} />
              <Route path="/pastrecords" element={<PR />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profileLecturer" element={<ProfileLecturer />} />
              <Route path="/studentsupervising" element={<StudentSupervising />} />
              <Route path="/studentsupervising/workdetails/:id" element={<Workdetailpart />} />
              <Route path="/studentsupervising/pastrecords/:id" element={<RP />} />
                
            </Route>
          
          </Routes>
      </Router>


      {/* <Router>
          <Routes> 
            <Route path="/workdetails" element={<WorkDetails />} />
            <Route path="/newreport" element={<NewReport />} />
            <Route path="/pastrecords" element={<PR />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profileLecturer" element={<ProfileLecturer />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/student/login" element={<Login />} /> 
            <Route path="/lecturer/login" element={<Loginlecturer />} />
            <Route path="/student/signup" element={<Signup />} />
            <Route path="/lecturer/signup" element={<Signuplecturer />} /> 
            <Route path="/studentsupervising" element={<StudentSupervising />} />
            <Route path="/studentsupervising/workdetails" element={<Workdetailpart />} />
            <Route path="/studentsupervising/pastrecords" element={<RP />} />
            </Routes>
      </Router> */}
      
    </div>
    
  
    

  );
}

export default App;
