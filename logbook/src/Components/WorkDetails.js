import classes from "../CSS/WorkDetails.module.css";
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import api from "../api/api";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";


const WorkDetails = () => {
    const [companyname, setCompanyname ] = useState("");
    const [companyaddress, setCompanyaddress ] = useState("");
    const [state, setState ] = useState("");
    const [lga, setLGA ] = useState("");
    const [officeemail, setOfficeemail ] = useState("");
    const [companyphonenumber, setCompanyphonenumber ] = useState("");
    const [resumptiondate, setResumptiondate ] = useState("");
    const [terminationdate, setTerminationdate ] = useState("");
    const [assigneddepartment, setAssigneddepartment ] = useState("");
    const [jobdescription, setjobdescription ] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading ] = useState(false);
    const [loadingLetter, setLoadingLetter ] = useState(false);
    const [dataStatus, setDataStatus ] = useState(false);
    const [fileStatus, setFileStatus ] = useState(false);
    const user = JSON.parse(localStorage.user)

    const navigate = useNavigate();
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [messageSnackBar, setMessageSnackBar] = useState("");

    const handleSnackBar = () => {
        setOpenSnackBar(true);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setSelectedFile(selectedFile);
      };

    const handleSubmit = async () => {
        setLoading(true);
        
        if(companyname !== "" && companyname !== "" && state !== "" && lga !== "" && officeemail !== "" && companyphonenumber !== "" && resumptiondate !== "" && terminationdate !== "" && assigneddepartment !== "" && jobdescription !== "" && selectedFile !== null ) {

            if(true) {
                console.log(selectedFile);

                const data = { 
                    studentID: user._id,
                    companyName: companyname,
                    companyAddress: companyaddress,
                    state: state,
                    lga: lga,
                    companyEmail: officeemail,
                    companyPhoneNumber: companyphonenumber,
                    resumptionDate: resumptiondate,
                    terminationDate: terminationdate,
                    assignedDepartment: assigneddepartment,
                    jobDesc: jobdescription,
                }
                console.log(data);
                setLoading(true);
                try {
                    const response = await api.post("/student/upload-details", data)
                    console.log(response.data);
                    if (response.data?.success === false) {
                        setMessageSnackBar("Error occured. Check internet and try again.")
                        handleSnackBar()
                        setLoading(false)
                    } else {
                        // navigate("/student/login")
                        setDataStatus(true)
                    }
                } catch(err) {
                    if(err.response) {
                        setLoading(false)
                        if(err.response.status === 401) {
                            setMessageSnackBar("Username or password incorrect!")
                            handleSnackBar()
                            setLoading(false)
                        } else {
                            setMessageSnackBar("Error occured. Check internet and try again.")
                            handleSnackBar()
                            setLoading(false)
                        }
                        // console.log("Error: " + err.response);
                    }
                }
                try {
                    const formData = new FormData();
                    formData.append('file', selectedFile);
                    formData.append('studentID', user._id);
                    console.log(formData)
                    const response = await api.post("/upload-acceptance-letter", formData)
                    console.log(response.data);
                    if (response.data?.success === false) {
                        setMessageSnackBar("Error occured. Check internet and try again.")
                        handleSnackBar()
                        setLoadingLetter(false)
                    } else {
                        
                        setLoadingLetter(false)
                        // navigate("/profile")
                        setFileStatus(true)
                    }
                } catch(err) {
                    if(err.response) {
                        setLoadingLetter(false)
                        if(err.response.status === 401) {
                            setMessageSnackBar("Username or password incorrect!")
                            handleSnackBar()
                            setLoadingLetter(false)
                        } else {
                            setMessageSnackBar("Error occured. Check internet and try again.")
                            handleSnackBar()
                            setLoadingLetter(false)
                        }
                        // console.log("Error: " + err.response);
                    }
                }
            } else {
                // Passwords don't match
            }

        } else { 
            // There is a missing field
            setMessageSnackBar("All Fields Required")
            handleSnackBar()
            setLoading(false)
        }
        if(dataStatus === true && fileStatus === true) {
            navigate("/profile")
            
        }else{
            setLoading(false)
            setLoadingLetter(false)
        }
    }


    return (
        <div>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={() => setOpenSnackBar(false)}>
                <Alert onClose={() => setOpenSnackBar(false)} severity="warning"sx={{ width: '100%', background: "#020167", color: "white" }}>
                    {messageSnackBar}
                </Alert>
            </Snackbar>
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

                <input type="file"  className={classes.file} onChange={handleFileChange} />Attach Acceptance Letter <br></br>

                <button className={classes.workbtn} onClick={handleSubmit}>Update Work Details{loading ? <CircularProgress  size={17} color="inherit" /> : ""}</button>
            </div>
        </div>
        </div>
    );
}
 
export default WorkDetails;