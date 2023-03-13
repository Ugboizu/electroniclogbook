import classes from "../CSS/WorkDetails.module.css";
import React, { useState } from 'react';
import Sidebar from './Sidebar';


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
    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <div>
            <Sidebar />
        
        <div className={classes.wrapper}>
            
            <h3 className={classes.title}>WORK DETAILS</h3>

            <div className={classes.workdetails}>
                <input type="text" value={companyname} id="cname" className="" onChange={(e) => {setCompanyname(e.target.value)}} placeholder='Company Name'></input> 

                <input type="text" value={companyaddress} id="caddress" className='' onChange={(e) => {setCompanyaddress(e.target.value)}} placeholder='Company Address'></input> <br></br>
             
                <input type="text" value={state} id="state" className='' onChange={(e) => {setState(e.target.value)}} placeholder='State'></input> 

                <input type="text" value={lga} id="LGA" className='' onChange={(e) => {setLGA(e.target.value)}} placeholder='LGA'></input> <br></br>

                <input type="email" value={officeemail} id="offeaddress" className='' onChange={(e) => {setOfficeemail(e.target.value)}} placeholder='Office Email Address'></input> 

                <input type="text" value={companyphonenumber} id="cphonenumber" className='' onChange={(e) => {setCompanyphonenumber(e.target.value)}} placeholder='Company Phonenumber'></input> <br></br>

                <input type="text" value={resumptiondate} id="rdate" className='' onChange={(e) => {setResumptiondate(e.target.value)}} placeholder='Resumption Date'></input> 

                <input type="text" value={terminationdate} id="tdate" className='' onChange={(e) => {setTerminationdate(e.target.value)}} placeholder='Termination Date'></input> <br></br>

                <input type="text" value={assigneddepartment} id="assdept" className='' onChange={(e) => {setAssigneddepartment(e.target.value)}} placeholder='Assigned Department'></input> 

                <input type="text" value={jobdescription} id="jobdesc" className='' onChange={(e) => {setjobdescription(e.target.value)}} placeholder='Job Description'></input> 

                <input type="file" value={selectedFile} className={classes.file} onChange={(e) => setSelectedFile(e.target.files[0])} />Attach Acceptance Letter <br></br>

                <button className={classes.workbtn}>Update Work Details</button>
            </div>
        </div>
        </div>
    );
}
 
export default WorkDetails;