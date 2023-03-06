import classes from "../CSS/Signup.module.css"

const Signup = () => {
    return (
        <div className={classes.wrapper}>
             
            <div className={classes.innerWrapper}>
                <div className={classes.reg}>
                    <h3 className={classes.title}>REGISTRATION</h3>
                    {/* <p className={classes.titletxt}>Please enter all information carefully</p> */}
                    <input type="text" name="" id="firstname" className="" placeholder='Firstname'></input> 

                    <input type="text" name="" id="middlename" className='' placeholder='Middlename'></input> <br></br>
             
                    <input type="text" name="" id="surname" className='' placeholder='Surname'></input> 

                    <input type="text" name="" id="matricno" className='' placeholder='Matric No'></input> <br></br>

                    <input type="text" name="" id="eaddress" className='' placeholder='Email Address'></input> 

                    <input type="text" name="" id="phonenumber" className='' placeholder='Phonenumber'></input> <br></br>

                    <input type="password" name="" id="password" className='' placeholder='Password'></input> 

                    <input type="password" name="" id="cpassword" className='' placeholder='Confirm Password'></input> <br></br>

                    <label for="sex">Sex:</label>
                    <input type="radio" name="sex" id="sex" className='' value="Male" ></input>
                    <label>Male</label>
                    <input type="radio" name="sex" id="sex" className='' value="Female" ></input>
                    <label>Female</label> 

                    <select className='' id="level">
                        <option name="">LEVEL</option>
                        <option name="100">100 Level</option>
                        <option name="200">200 Level</option>
                        <option name="300">300 Level</option>
                        <option name="400">400 Level</option>
                        <option name="400S">400 Level Summer</option>
                    </select> <br></br>

                    <select className='' id="school" placeholder="School">
                        <option name="">SCHOOL</option>
                        <option name="CES">Computing and Engineering Sciences</option>
                        <option name="VASS">Veronica Adeleke School of Sciences</option>
                        <option name="NS">Nursing</option>
                        <option name="BAS">Basic and Applied Sciences</option>
                    </select> <br />

                    <select className='' id="courseofstudy">
                        <option name="">COURSE OF STUDY</option>
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
                        

                    <a className={classes.note} href="../Pages/Login.js">Note: If you have registered previously, do not repeat because it may affect your final result</a> <br />

                    <button className={classes.regbtn}>Register</button>

                </div>
                <div className={classes.sec2}>
                    <div className={classes.babcock}>
                        <img src="../images/bablogo.png" alt="logo" />
                        <p><span className={classes.bu}>BABCOCK UNIVERSITY</span><br /> <span className={classes.siwes}>SIWES PORTAL</span></p>
                            
                    </div>
                        
                    <p className={classes.regtext}>We want to make easy for our lecturers and students to easily access portal, fill in records, view past records securely and effectively.</p>

                    <div className={classes.btnWrapper}>
                        <button className={classes.homebtn}><img src="../images/home.png" alt="home" /> Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Signup;