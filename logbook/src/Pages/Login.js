import classes from "../CSS/Login.module.css"
import React, { useEffect, useState } from 'react';
import * as FaIcons from "react-icons/fa";
import api from "../api/api"
import { useNavigate } from "react-router-dom";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
const Login = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [matricno, setMatricno ] = useState("");
    const [password, setPassword ] = useState("");
    const [showpassword, setShowpassword ] = useState(false);
    const [loading, setLoading ] = useState(false);
    
    const navigate = useNavigate()

    
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [messageSnackBar, setMessageSnackBar] = useState("");

    const handleSnackBar = () => {
        setOpenSnackBar(true);
    };

    const handleSubmit = async () => {
        setLoading(true);
        
        if(matricno !== "" && password !== "") {
            const data = { 
                username: matricno,
                password: password
            }
            console.log(data);
            try {
                const response = await api.post("/student/login", data)
                console.log(response.data);
                if (response.data?.success === false) {
                    setMessageSnackBar("Error occured. Check internet and try again.")
                    handleSnackBar()
                    setLoading(false)
                } else {
                    localStorage.setItem('loggedIn', JSON.stringify(true)); 
                    localStorage.setItem('user', JSON.stringify(response.data.user)); 
                    navigate("/profile")
    
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
            setMessageSnackBar("All Fields Required")
            handleSnackBar()
            setLoading(false)
        }
    }

    return (
        <div className={classes.wrapper} >
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={() => setOpenSnackBar(false)}>
                <Alert onClose={() => setOpenSnackBar(false)} severity="warning"sx={{ width: '100%', background: "#020167", color: "white" }}>
                    {messageSnackBar}
                </Alert>
            </Snackbar>

            <div className={classes.innerWrapper}>
                <div className={classes.sec1}>
                    <h3 className={classes.title}>LOGIN</h3>
                    <p className={classes.titletxt}>Sign into your account </p>
                    
                    <input className={classes.txtbox} value={matricno} onChange={(e) => {setMatricno(e.target.value)}} type="text" name="" id="matricNo" placeholder="Matric Number"></input>
                    <br></br>
                    <input className={classes.txtbox} value={password} onChange={(e) => {setPassword(e.target.value)}} type={ showpassword ? "text" : "password"} name="" id="password" placeholder="Password"></input>
                    <br></br>
                    <input className={classes.ckbox} checked={showpassword} onChange={(e) => {setShowpassword(e.target.checked)}} type="checkbox" name="" id="password" ></input>
                    <label>Show Password</label> <br />

                    <button className={classes.loginbtn} sx={{display: "flex", alignItems: "center", }}onClick={handleSubmit}>Login {loading ? <CircularProgress  size={17} color="inherit" /> : ""}</button>
                    <br />
                    <p className={classes.titletxt}>Don't have an account? <a href="/student/signup">Sign up</a></p>
                    
                </div>
                <div className={classes.sec2}>
                    <div className={classes.babcock}>
                        <img src="../images/bablogo.png" alt="logo" />
                        <p><span className={classes.bu}>BABCOCK UNIVERSITY</span><br /> <span className={classes.siwes}>SIWES PORTAL</span></p>
                        
                    </div>
                    
                    <p className={classes.logintext}>We want to make easy for our lecturers and students to easily access portal, fill in records, view past records securely and effectively.</p>

                    <div className={classes.btnWrapper}>
                        <a href="/"><FaIcons.FaHome /> Home</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default Login;       