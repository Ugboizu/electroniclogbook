import classes from "../CSS/Profile.module.css";
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { CircularProgress } from "@mui/material";

function Profile() {
    
    const [ user, setUser ] = useState(JSON.parse(localStorage.user))
    const [ companyDetails, setCompanyDetails ] = useState({})
    const [loading, setLoading ] = useState(false);
    const [loadingUser, setLoadingUser ] = useState(false);
    
    const navigate = useNavigate()
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [messageSnackBar, setMessageSnackBar] = useState("");

    const handleSnackBar = () => {
        setOpenSnackBar(true);
    };

    
    // console.log(user);

    const getWorkDetails = async () => {
        
        const data = { 
            studentID: user._id,
        }
        // console.log(data);
        setLoading(true);
        try {
            const response = await api.post("/student/company", data)
            console.log(response.data);
            if (response.data?.success === false) {
                setMessageSnackBar("Error occured. Check internet and try again.")
                handleSnackBar()
                setLoading(false)
                setCompanyDetails(null)
            } else {
                setCompanyDetails(response.data.details)
                setLoading(false)
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

        
    }

    const getUser = async () => {
        
        const data = { 
            studentID: user._id,
        }
        // console.log(data);
        setLoadingUser(true);
        try {
            const response = await api.post("/student/profile", data)
            console.log(response.data);
            if (response.data?.success === false) {
                setMessageSnackBar("Error occured. Check internet and try again.")
                handleSnackBar()
                setLoadingUser(false)
            } else {
                setUser(response.data.user)
                setLoadingUser(false)
            }
        } catch(err) {
            if(err.response) {
                setLoadingUser(false)
                if(err.response.status === 401) {
                    setMessageSnackBar("Username or password incorrect!")
                    handleSnackBar()
                } else {
                    setMessageSnackBar("Error occured. Check internet and try again.")
                    handleSnackBar()
                }
                // console.log("Error: " + err.response);
            }
        }

        
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getWorkDetails()
        getUser()
    }, []);

    return (
        <div >
            <Sidebar />
        
            <div className={classes.wrapper} style={{paddingBottom: "50vh"}}>
                <div className={classes.innerwrapper}>
                    <div className={classes.head}>
                        <div>
                            <img src="../images/friend.png" alt="profile" />
                        </div>
                        <div>
                            <h3>{`${user.lastName} ${user.firstName} ${user.middleName}`}</h3>
                            <h4>{`${user.matricNumber}`}</h4>
                            <h4>{`${user.course}`}</h4>
                        </div>
                    </div>
                    <div className={classes.profile}>
                        <h3>PERSONAL DETAILS</h3>
                        <div className={classes.pdetails}>
                            
                            <div className={classes.detail}>
                                <h4>Fullname</h4>
                                <h4>Matric Number</h4>
                                <h4>Sex</h4>
                                <h4>Email Address</h4>
                                <h4>Department</h4>
                                <h4>Course of Study</h4>
                                <h4>Level</h4>
                            </div>
                            <div className={classes.answer}>
                                <h4>{`${user.lastName} ${user.firstName} ${user.middleName}`}</h4>
                                <h4>{`${user.matricNumber}`}</h4>
                                <h4>{`${user.gender}`}</h4>
                                <h4>{`${user.username}`}</h4>
                                <h4>{`${user.school}`}</h4>
                                <h4>{`${user.course}`}</h4>
                                <h4>{`${user.level}`}</h4>
                            </div>
                            
                        </div>
                        {
                            loading ? <CircularProgress sx={{margin: "auto", marginTop: "20px", display: "flex", justifyContent: "center", }}  size={17} color="inherit" /> : 
                            companyDetails ?
                            <div>
                                <h3>WORK DETAILS</h3>
                                <div className={classes.pdetails}>
                                    <div className={classes.detail}>
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
                                    <div className={classes.answer}>
                                        <h4>{companyDetails.companyName}</h4>
                                        <h4>{companyDetails.companyAddress}</h4>
                                        <h4>{companyDetails.lga}</h4>
                                        <h4>{companyDetails.state}</h4>
                                        <h4>{companyDetails.companyEmail}</h4>
                                        <h4>{companyDetails.companyPhoneNumber}</h4>
                                        <h4>{companyDetails.resumptionDate}</h4>
                                        <h4>{companyDetails.terminationDate}</h4>
                                        <h4>{companyDetails.assignedDepartment}</h4>
                                        <h4>{companyDetails.jobDesc}</h4>
                                    </div>
                                </div>
                            </div>
                            :  ""
                        }

                        {/* {
                            user.lecturerID ? 
                            <div>
                                <h3>SUPERVISOR</h3>
                                <div className={classes.pdetails}>
                                    <div className={classes.detail}>
                                        <h4>Company Supervisor</h4>
                                        <h4>School Supervisor</h4>
                                    </div>
                                    <div className={classes.answer}>
                                        <h4>Mr. Uba Joseph</h4>
                                        <h4>{user.lecturerID}</h4>
                                    </div>
                                </div>
                            </div>
                            :  ""
                        } */}
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile