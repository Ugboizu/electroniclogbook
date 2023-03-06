import classes from "../CSS/WorkDetails.module.css";
import React, { useState } from 'react';

const WorkDetails = () => {
    const [companyname, setCompanyname ] = useState();
    const [companyaddress, setCompanyaddress ] = useState();
    const [state, setState ] = useState();
    const [lga, setLGA ] = useState();
    const [officeemail, setOfficeemail ] = useState();
    const [companyphonenumber, setCompanyphonenumber ] = useState();
    const [resumptiondate, setResumptiondate ] = useState();
    const [terminationdate, setTerminationdate ] = useState();
    const [assigneddepartment, setAssigneddepartment ] = useState();
    const [jobdescription, setjobdescription ] = useState();

    return (
        <div className={classes.wrapper}>
            <h3 className={classes.title}>WORK DETAILS</h3>

            <div className={classes.workdetails}>
                <input type="text" name="" id="cname" className="" onChange={(e) => {setCompanyname(e.target.value)}} placeholder='Company Name'></input> 

                <input type="text" name="" id="caddress" className='' onChange={(e) => {setCompanyaddress(e.target.value)}} placeholder='Company Address'></input> <br></br>
             
                <input type="text" name="" id="state" className='' onChange={(e) => {setState(e.target.value)}} placeholder='State'></input> 

                <input type="text" name="" id="LGA" className='' onChange={(e) => {setLGA(e.target.value)}} placeholder='LGA'></input> <br></br>

                <input type="email" name="" id="offeaddress" className='' onChange={(e) => {setOfficeemail(e.target.value)}} placeholder='Office Email Address'></input> 

                <input type="text" name="" id="cphonenumber" className='' onChange={(e) => {setCompanyphonenumber(e.target.value)}} placeholder='Company Phonenumber'></input> <br></br>

                <input type="text" name="" id="rdate" className='' onChange={(e) => {setResumptiondate(e.target.value)}} placeholder='Resumption Date'></input> 

                <input type="text" name="" id="tdate" className='' onChange={(e) => {setTerminationdate(e.target.value)}} placeholder='Termination Date'></input> <br></br>

                <input type="text" name="" id="assdept" className='' onChange={(e) => {setAssigneddepartment(e.target.value)}} placeholder='Assigned Department'></input> 

                <input type="text" name="" id="jobdesc" className='' onChange={(e) => {setjobdescription(e.target.value)}} placeholder='Job Description'></input> <br></br>

                <button className={classes.workbtn}>Update Work Details</button>
            </div>
        </div>
    );
}
 
export default WorkDetails;