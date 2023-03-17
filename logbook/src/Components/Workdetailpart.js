import classes from "../CSS/Workdetailpart.module.css";
import React from 'react';
import SidebarLecturer from "./SidebarLecturer";

function Workdetailpart() {
  return (
      <div>
          <SidebarLecturer />
      
    <div className={classes.wrapper}>
        <button> <a href="/studentsupervising">BACK</a> </button>
        <div className={classes.innerwrapper}>
            
            <div className={classes.profilee}>
                <h3>PERSONAL DETAILS</h3>
                <div className={classes.pdetailss}>
                    
                    <div className={classes.detaill}>
                        <h4>Fullname</h4>
                        <h4>Matric Number</h4>
                        <h4>Sex</h4>
                        <h4>Email Address</h4>
                        <h4>Department</h4>
                        <h4>Course of Study</h4>
                        <h4>Level</h4>
                    </div>
                    <div className={classes.answerr}>
                        <h4>Umezurike Ugboizu Nmachi</h4>
                        <h4>19/2754</h4>
                        <h4>Female</h4>
                        <h4>umezugbo@gmail.com</h4>
                        <h4> Computer and Engineering Sciences</h4>
                        <h4>Computer Science</h4>
                        <h4>400L</h4>
                    </div>
                    
                </div>
                <h3>WORK DETAILS</h3>
                <div className={classes.pdetailss}>
                    <div className={classes.detaill}>
                        <h4>Company Name</h4>
                        <h4>Company Adress</h4>
                        <h4>Company LGA</h4>
                        <h4>Company State</h4>
                        <h4>Company Email Address</h4>
                        <h4>Company Phonenumber</h4>
                        <h4>Resumption Date</h4>
                        <h4>Termination Date</h4>
                        <h4>Assigned Department</h4>
                        <h4>Job Description</h4>
                    </div>
                    <div className={classes.answerr}>
                        <h4>Ashpot Microsystems Limited</h4>
                        <h4>11 Nicholas Street, Aba</h4>
                        <h4>Aba North</h4>
                        <h4>Abia</h4>
                        <h4>ashpotmicrosystems@gmail.com</h4>
                        <h4>09037504702</h4>
                        <h4>31-01-22</h4>
                        <h4>30-06-22</h4>
                        <h4>Web Development</h4>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <h3>SUPERVISORS</h3>
                <div className={classes.pdetailss}>
                    <div className={classes.detaill}>
                        <h4>Company Supervisor</h4>
                        <h4>School Supervisor</h4>
                    </div>
                    <div className={classes.answerr}>
                        <h4>Mr. Uba Joseph</h4>
                        <h4>Dr. Ernest Onuiri </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Workdetailpart