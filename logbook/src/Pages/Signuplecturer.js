import classes from "../CSS/Signuplecturer.module.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

function Signuplecturer() {
    const [state, setState ] = useState();
    const [password, setPassword ] = useState();
    const [confirmpassword, setConfirmpassword ] = useState(false);
    const [firstname, setFirstname ] = useState();
    const [middlename, setMiddlename ] = useState();
    const [surname, setSurname ] = useState();
    const [email, setEmail ] = useState();
    const [phonenumber, setPhonenumber ] = useState();
    const [selectedOption, setSelectedOption ] = useState();
    const [school, setSchool ] = useState();
    const [loading, setLoading ] = useState(false);

    const navigate = useNavigate();
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [messageSnackBar, setMessageSnackBar] = useState("");

    const handleSnackBar = () => {
        setOpenSnackBar(true);
    };

    const handleSubmit = async () => {
        setLoading(true);
        
        if(email !== "" && password !== "" && state !== "" && confirmpassword !== "" && firstname !== "" && middlename !== "" && surname !== "" && phonenumber !== "" && selectedOption !== "" && school !== "" ) {

            if(confirmpassword === password) {

                const data = { 
                    username: email, 
                    firstName: firstname, 
                    lastName: surname, 
                    middleName: middlename, 
                    school: school, 
                    state: state,
                    gender: selectedOption,
                    phoneNumber: phonenumber, 
                    dateCreated: String,
                    password: password,
                }
                console.log(data);
                try {
                    const response = await api.post("/supervisor/register", data)
                    console.log(response.data);
                    if (response.data?.success === false) {
                        setMessageSnackBar("Error occured. Check internet and try again.")
                        handleSnackBar()
                        setLoading(false)
                    } else {
                        navigate("/lecturer/login")
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
            } else {
                // Passwords don't match
                setMessageSnackBar("Passwords don't match")
                handleSnackBar()
                setLoading(false)
            }

        } else { 
            // There is a missing field
            setMessageSnackBar("All Fields Required")
            handleSnackBar()
            setLoading(false)
        }
        
    }


  return (
    <div className={classes.wrapper}>
        <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={() => setOpenSnackBar(false)}>
            <Alert onClose={() => setOpenSnackBar(false)} severity="warning"sx={{ width: '100%', background: "#020167", color: "white" }}>
                {messageSnackBar}
            </Alert>
        </Snackbar>
        <div className={classes.innerWrapper}>
                <div className={classes.sec2}>
                    <div className={classes.babcock}>
                        <img src="../images/bablogo.png" alt="logo" />
                        <p><span className={classes.bu}>BABCOCK UNIVERSITY</span><br /> <span className={classes.siwes}>SIWES PORTAL</span></p>
                      
                    </div>
                        
                    <div className={classes.btnWrapper}>
                        <button className={classes.homebtn}><a href="/">Home</a> </button>
                    </div>
                </div>
                <div className={classes.title}>
                      <h3>REGISTRATION</h3> 
                </div>
                <div className={classes.reg}>
                    
                    <div className={classes.regsec1}>
                      <input type="text" name="" id="firstname" className={classes.input} onChange={(e) => {setFirstname(e.target.value)}} placeholder='Firstname'></input> 
             
                      <input type="text" name="" id="surname" className={classes.input} onChange={(e) => {setSurname(e.target.value)}} placeholder='Surname'></input> 

                      <input type="text" name="" id="eaddress" className={classes.input} onChange={(e) => {setEmail(e.target.value)}} placeholder='Email Address'></input> 

                      <input type="text" name="" id="phonenumber" className={classes.input} onChange={(e) => {setPhonenumber(e.target.value)}} placeholder='Phonenumber'></input> 

                      <label for="sex">Sex:
                        <input type="radio" name="sex" id="sex" className={classes.r} checked={selectedOption === 'male'} onChange={(e) => setSelectedOption(e.target.value)} value="male" ></input>
                        <label>Male</label>
                        <input type="radio" name="sex" id="sex" className={classes.r} checked={selectedOption === 'female'} onChange={(e) => setSelectedOption(e.target.value)} value="female" ></input>
                        <label>Female</label> 
                      </label> 

                    </div>

                    <div className={classes.regsec2}> 
                        <input type="text" name="" id="middlename" className={classes.input} onChange={(e) => {setMiddlename(e.target.value)}} placeholder='Middlename'></input> 

                        <input type="text" name="" id="state" className={classes.input} onChange={(e) => {setState(e.target.value)}} placeholder='State'></input> 

                        <input type="password" name="" id="password" className={classes.input} onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'></input> 

                        <input type="password" name="" id="cpassword" className={classes.input} onChange={(e) => {setConfirmpassword(e.target.value)}} placeholder='Confirm Password'></input> 

                        <select className='' id="school" onChange={(e) => {setSchool(e.target.value)}}>
                            <option name="">SCHOOL</option>
                            <option name="CS">Computer Science (CS)</option>
                            <option name="CIS">Computer Information System (CIS)</option>
                            <option name="CT">Computer Technology (CT)</option>
                            <option name="IT">Information Technology (IT)</option>
                            <option name="SE">Software Engineering (SE)</option>
                            <option name="MC">Mass Communication</option>
                            <option name="NS">Nursing</option>
                            <option name="FON">Food and Nutrition</option>
                            <option name="BC">Biochemistry</option>
                            <option name="AS">Agricultural Science</option>
                        </select> <br></br>
                    </div>  
                    
                </div>
                <div className={classes.note}>
                    <a href="../Pages/Login.js">Note: If you have registered previously, do not repeat because it may affect your final result!</a> 
                </div>
                
                <div className={classes.regbtn}>
                    <button onClick={handleSubmit}>Register{loading ? <CircularProgress  size={17} color="inherit" /> : ""}</button>
                </div>

                
            </div>
    </div>
  )
}

export default Signuplecturer