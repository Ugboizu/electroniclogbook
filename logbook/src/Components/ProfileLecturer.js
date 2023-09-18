import classes from "../CSS/ProfileLecturer.module.css";
import React, { useState } from 'react';
import SidebarLecturer from './SidebarLecturer';

function Profile() {
    
    const [ user, setUser ] = useState(JSON.parse(localStorage.user))

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
                        <h3>{`${user.lastName} ${user.firstName} ${user.middleName}`}</h3>
                        {/* <h4>{`${user.staffID}`}</h4> */}
                        <h4>{`${user.school}`}</h4>
                        
                    </div>
                </div>
                <div className={classes.profile}>
                    <h3>PERSONAL DETAILS</h3>
                    <div className={classes.pdetails}>
                        
                        <div className={classes.detail}>
                            <h4>Fullname</h4>
                            <h4>Phone Number</h4>
                            <h4>Sex</h4>
                            <h4>Email Address</h4>
                            <h4>Department</h4>
                        </div>
                        <div className={classes.answer}>
                            <h4>{`${user.lastName} ${user.firstName} ${user.middleName}`}</h4>
                            <h4>{`${user.phoneNumber}`}</h4>
                            <h4>{`${user.gender}`}</h4>
                            <h4>{`${user.username}`}</h4>
                            <h4>{`${user.school}`}</h4>
                            
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