import classes from "../CSS/ProfileLecturer.module.css";
import React from 'react';
import SidebarLecturer from './SidebarLecturer';

function Profile() {
  return (
      <div>
          <SidebarLecturer />
      
    <div className={classes.wrapper}>
        <div className={classes.innerwrapper}>
            <div className={classes.head}>
                <div>
                    <img src="../images/friend.png" alt="profile" />
                </div>
                <div>
                    <h3>Samuel Abel</h3>
                    <h4>199724</h4>
                    <h4>Computer Science</h4>
                </div>
            </div>
            <div className={classes.profile}>
                <h3>PERSONAL DETAILS</h3>
                <div className={classes.pdetails}>
                    
                    <div className={classes.detail}>
                        <h4>Fullname</h4>
                        <h4>Lecturer ID</h4>
                        <h4>Sex</h4>
                        <h4>Email Address</h4>
                        <h4>Department</h4>
                    </div>
                    <div className={classes.answer}>
                        <h4>Samuel Abel</h4>
                        <h4>199724</h4>
                        <h4>Male</h4>
                        <h4>abelsamuel@gmail.com</h4>
                        <h4> Computer and Engineering Sciences</h4>
                    </div>
                    
                </div>
               
                {/* <h3>SUPERVISEE</h3>
                <div className={classes.pdetails}>
                    <div className={classes.detail}>
                        <h4>Student Supervising</h4>
                    </div>
                    <div className={classes.answer}>
                        <h4>Sam-Egboigbe Daniel</h4>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Profile