import classes from "../CSS/NewReport.module.css";
import React, { useState } from 'react';
import Sidebar from './Sidebar';
// import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

const NewReport = () => {
    const [date, setDate ] = useState("");
    const [dateMon, setDateMon ] = useState("");
    const [dateTue, setDateTue ] = useState("");
    const [dateWed, setDateWed ] = useState("");
    const [dateThu, setDateThu ] = useState("");
    const [dateFri, setDateFri ] = useState("");
    const [textMon, settextMon ] = useState("");
    const [textTue, settextTue ] = useState("");
    const [textWed, settextWed ] = useState("");
    const [textThu, settextThu ] = useState("");
    const [textFri, settextFri ] = useState("");
    const [week, setWeek ] = useState(""); 
    const [loading, setLoading ] = useState(""); 
    const user = JSON.parse(localStorage.user)

    const navigate = useNavigate()
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [messageSnackBar, setMessageSnackBar] = useState("");

    const handleSnackBar = () => {
        setOpenSnackBar(true);
    };

    const handleSubmit = async () => {
        setLoading(true);
        
        if(week !== "" && textFri !== "" && textMon !== "" && textThu !== "" && textTue !== "" && textWed !== "" && dateFri !== "" && dateMon !== "" && dateThu !== "" && dateTue !== "" && dateWed !== "" ) {

            setDate(`${dateMon} till ${dateFri}`)
            console.log(date)
            if(true) {
                const data = { 
                    studentID: user._id,
                    monday: textMon,
                    tuesday: textTue,
                    wednesday: textWed,
                    thursday: textThu,
                    friday: textFri,
                    week: week,
                    date: `${dateMon} till ${dateFri}`,
                }
                console.log(data);
                try {
                    const response = await api.post("/student/upload-report", data)
                    console.log(response.data);
                    if (response.data?.success === false) {
                        setMessageSnackBar("Error occured. Check internet and try again.")
                        handleSnackBar()
                        setLoading(false)
                        console.log("Error Occured from server");
                    } else {
                        setMessageSnackBar("Successfully Updated")
                        handleSnackBar()
                        navigate("/pastrecords")
                        
                        console.log("Successfully Updated")
                        console.log(response.data);
                    }
                } catch(err) {
                    if(err.response) {
                        // setLoading(false)
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

        } else { 
            // There is a missing field
            setMessageSnackBar("All Fields Required")
            handleSnackBar()
            setLoading(false)

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
        <div className={classes.innerwrapper}>
            <h3 className={classes.title}>WEEKLY REPORT</h3>

            <div className={classes.report}>
                <select id="week" onChange={(e) => {setWeek(e.target.value)}} >
                    <option name="">WEEK</option>
                    <option name="1">1</option>
                    <option name="2">2</option>
                    <option name="3">3</option>
                    <option name="4">4</option>
                    <option name="5">5</option>
                    <option name="6">6</option>
                    <option name="7">7</option>
                    <option name="8">8</option>
                    <option name="9">9</option>
                    <option name="10">10</option>
                    <option name="11">11</option>
                    <option name="12">12</option>
                    <option name="13">13</option>
                    <option name="14">14</option>
                    <option name="15">15</option>
                    <option name="16">16</option>
                    <option name="17">17</option>
                    <option name="18">18</option>
                    <option name="19">19</option>
                    <option name="20">20</option>
                    <option name="21">21</option>
                    <option name="22">22</option>
                    <option name="23">23</option>
                    <option name="24">24</option>
                    <option name="25">25</option>
                    <option name="26">26</option>
                    <option name="27">27</option>
                    <option name="28">28</option>
                    <option name="29">29</option>
                    <option name="30">30</option>
                </select> 
                <div className={classes.reportt}> 
                    <div className={classes.date}>
                        <input type="date" name="" id="date" onChange={(e) => {setDateMon(e.target.value)}} placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="monday" onChange={(e) => {settextMon(e.target.value)}} className={classes.week} placeholder='Monday'></textarea>
                </div>
                
                    
                
                <div className={classes.reportt}>
                    <div className={classes.date}>
                        <input type="date" name="" id="date" onChange={(e) => {setDateTue(e.target.value)}} placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="tuesday" onChange={(e) => {settextTue(e.target.value)}} className={classes.week} placeholder='Tuesday'></textarea> 
                </div>

                <div className={classes.reportt}>
                    <div className={classes.date}>
                        <input type="date" name="" id="date" onChange={(e) => {setDateWed(e.target.value)}} placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="wednesday" onChange={(e) => {settextWed(e.target.value)}} className={classes.week} placeholder='Wednesday'></textarea> 
                </div>

                <div className={classes.reportt}>
                    <div className={classes.date}>
                        <input type="date" name="" id="date" onChange={(e) => {setDateThu(e.target.value)}} placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="thursday" onChange={(e) => {settextThu(e.target.value)}} className={classes.week} placeholder='Thursday'></textarea> 
                </div>

                <div className={classes.reportt}>
                    <div className={classes.date}>
                        <input type="date" name="" id="date" onChange={(e) => {setDateFri(e.target.value)}} placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="friday" onChange={(e) => {settextFri(e.target.value)}} className={classes.week} placeholder='Friday'></textarea> 
                </div>
                
                
            </div>
            <button className={classes.submitbtn} onClick={handleSubmit}>Submit Report{loading ? <CircularProgress  size={17} color="inherit" /> : ""}</button>
        </div>
        </div>
        </div>
    );
}
 
export default NewReport;