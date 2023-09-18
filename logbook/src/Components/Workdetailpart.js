import classes from "../CSS/Workdetailpart.module.css";
import React, { useEffect, useState } from 'react';
import SidebarLecturer from "./SidebarLecturer";
import { useParams } from "react-router-dom";
import api from "../api/api";

function Workdetailpart() {

    
    const [ user, setUser ] = useState({})
    const [ companyDetails, setCompanyDetails ] = useState({})
    const [loading, setLoading ] = useState(false);
    
    const params = useParams()

    
    // console.log(user);

    const getWorkDetails = async () => {
        
        const data = { 
            studentID: params.id,
        }
        // console.log(data);
        setLoading(true);
        try {
            const response = await api.post("/student/company", data)
            console.log(response.data);
            if (response.data?.success === false) {
                // setMessageSnackBar("Error occured. Check internet and try again.")
                // handleSnackBar()
                setLoading(false)
            } else {
                setCompanyDetails(response.data.details)
            }
        } catch(err) {
            if(err.response) {
                setLoading(false)
                if(err.response.status === 401) {
                    // setMessageSnackBar("Username or password incorrect!")
                    // handleSnackBar()
                } else {
                    // setMessageSnackBar("Error occured. Check internet and try again.")
                    // handleSnackBar()
                }
                // console.log("Error: " + err.response);
            }
        }

        
    }

    const getUser = async () => {
        
        const data = { 
            studentID: params.id,
        }
        // console.log(data);
        setLoading(true);
        try {
            const response = await api.post("/student/profile", data)
            console.log(response.data);
            if (response.data?.success === false) {
                // setMessageSnackBar("Error occured. Check internet and try again.")
                // handleSnackBar()
                setLoading(false)
            } else {
                setUser(response.data.user)
            }
        } catch(err) {
            if(err.response) {
                setLoading(false)
                if(err.response.status === 401) {
                    // setMessageSnackBar("Username or password incorrect!")
                    // handleSnackBar()
                } else {
                    // setMessageSnackBar("Error occured. Check internet and try again.")
                    // handleSnackBar()
                }
                // console.log("Error: " + err.response);
            }
        }

        
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getUser()
        getWorkDetails()
    }, []);

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
                            <h4>{`${user.lastName} ${user.firstName} ${user.middleName}`}</h4>
                                <h4>{`${user.matricNumber}`}</h4>
                                <h4>{`${user.gender}`}</h4>
                                <h4>{`${user.username}`}</h4>
                                <h4>{`${user.school}`}</h4>
                                <h4>{`${user.course}`}</h4>
                                <h4>{`${user.level}`}</h4>
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
                </div>
            </div>
        </div>
    )
}

export default Workdetailpart