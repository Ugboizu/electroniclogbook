import classes from "../CSS/LandingPage.module.css";
import React from 'react';
import { Link } from 'react-router-dom'; 

function LandingPage() {
  return (
    <div className={classes.wrap}>
      <div className={classes.nav}>
        <img src="../images/bablogo.png" alt="logo" />
        <nav>
            <h3>BABCOCK UNIVERSITY <p>SIWES PORTAL</p></h3>
        </nav>
        <div className={classes.dropdown}>
          <button className={classes.btn1}> Login </button>
            <div className={classes.dropdowncontent}>
              <a href="/student/login">Student</a>
              <a href="/lecturer/login">Lecturer</a>
            </div>
        </div>
        <div className={classes.dropdown}>
          <button className={classes.btn2}> Signup </button>
             <div className={classes.dropdowncontent}>
                <a href="/student/signup">Student</a>
                <a href="/lecturer/signup">Lecturer</a>
            </div>
        </div>
  

      </div>
        <div className={classes.container}>
            <div className={classes.head}>
              <h1 className={classes.image}>SIWES ACTIVITY LOG</h1>
              <p>The Student Industrial Work Experience Scheme (SIWES) program was established by the Industrial Trust Fund (ITF)
                The SIWES program is an effort to bridge the gap that exists between theory and practice.
                Contact Details of the various ITF Office in Nigeria can be found on their official webpage.</p> 
                {/* <div className={classes.btn3}>
                  <a>Click Here</a>
                </div> */}
                
            </div>
            <div className={classes.landingpage}>
              <img src="../images/Exams-bro.png" alt="landingpage" />
            </div>

        </div>

    </div>
  )
}

export default LandingPage
// const LandingPage = () => {
//     return (
//         <section>
//             <div className='home'>
//                 <h1>SIWES REPORTING AND ASSESSMENT APPLICATION</h1>
//                 <h2>SIWES Program</h2>
//                 <p>The Student Industrial Work Experience Scheme (SIWES) program was established by the Industrial Trust Fund (ITF) in 1973 and it is the accepted skill training program adopted by many Nigerian Tertiary Institutions, it forms part of the approved minimum academic standard in various degree program in these institutes for graduating its student.
//                     The SIWES program is an effort to bridge the gap that exists between theory and practice.
//                     A Contact Details is provided to the various ITF Office in Nigeria, to view this, <link href="#">Click Here</link></p>
//             </div>

//             <div className='Aim'>
//                 <h1>Aim and Objective of SIWES Students</h1>
//                 <p>The main aim to be achieved during the SIWES program is the ability to practice the knowledge gained in the school room into an experience gained on the industrial field within the range of the student's course of study. The key objectives are;</p>
//                 <p>Provide students with an opportunity to apply their theoretical knowledge gain in the school room in real work situation on the field.
//                 To create a better and easier transmission for the student, form university student, to working class adults. Thus enhance student contact for later job placement.
//                 To give room for social and academic interaction with professionals in their fields and working environment and also to expose the reality of working places.
//                 To in bide into each student the ability to create a good work relationship with their present student colleagues and also their future work colleagues</p>
//             </div>
//         </section>
//     );
// }
 
// export default LandingPage;
