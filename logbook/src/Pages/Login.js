import classes from "../CSS/Login.module.css"
import React, { useState } from 'react';

const Login = () => {
    const [matricno, setMatricno ] = useState();
    const [password, setPassword ] = useState();
    const [showpassword, setShowpassword ] = useState(false);

    return (
        <div className={classes.wrapper} >

            <div className={classes.innerWrapper}>
                <div className={classes.sec1}>
                    <h3 className={classes.title}>LOGIN</h3>
                    <p className={classes.titletxt}>Sign into your account </p>
                    
                    <input className={classes.txtbox} onChange={(e) => {setMatricno(e.target.value)}} type="text" name="" id="matricNo" placeholder="Matric Number"></input>
                    <br></br>
                    <input className={classes.txtbox} onChange={(e) => {setPassword(e.target.value)}} type="password" name="" id="password" placeholder="Password"></input>
                    <br></br>
                    <input className={classes.ckbox} onChange={(e) => {setShowpassword(e.target.value)}} type="checkbox" name="" id="password" ></input>
                    <label>Show Password</label> <br />

                    <button className={classes.loginbtn}>Login</button>
                    <br />
                    <p className={classes.titletxt}>Don't have an account? <a href="/signup">Sign up</a></p>
                    
                </div>
                <div className={classes.sec2}>
                    <div className={classes.babcock}>
                        <img src="../images/bablogo.png" alt="logo" />
                        <p><span className={classes.bu}>BABCOCK UNIVERSITY</span><br /> <span className={classes.siwes}>SIWES PORTAL</span></p>
                        
                    </div>
                    
                    <p className={classes.logintext}>We want to make easy for our lecturers and students to easily access portal, fill in records, view past records securely and effectively.</p>

                    <div className={classes.btnWrapper}>
                        <button><img src="../images/home.png" /> Home</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default Login;       