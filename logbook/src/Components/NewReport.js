import classes from "../CSS/NewReport.module.css";
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const NewReport = () => {
    const [date, setDate ] = useState();

    return (
        <div>
            <Sidebar />
        <div className={classes.wrapper}>
        <div className={classes.innerwrapper}>
            <h3 className={classes.title}>WEEKLY REPORT</h3>

            <div className={classes.report}>
                <select id="week">
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
                        <input type="date" name="" id="date" onChange={(e) => {setDate(e.target.value)}} placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="monday" className={classes.week} placeholder='Monday'></textarea>
                </div>
                
                    
                
                <div className={classes.reportt}>
                    <div className={classes.date}>
                        <input type="date" name="" id="date" onChange={(e) => {setDate(e.target.value)}} placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="tuesday" className={classes.week} placeholder='Tuesday'></textarea> 
                </div>

                <div className={classes.reportt}>
                    <div className={classes.date}>
                        <input type="date" name="" id="date" onChange={(e) => {setDate(e.target.value)}} placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="wednesday" className={classes.week} placeholder='Wednesday'></textarea> 
                </div>

                <div className={classes.reportt}>
                    <div className={classes.date}>
                        <input type="date" name="" id="date" onChange={(e) => {setDate(e.target.value)}} placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="thursday" className={classes.week} placeholder='Thursday'></textarea> 
                </div>

                <div className={classes.reportt}>
                    <div className={classes.date}>
                        <input type="date" name="" id="date" onChange={(e) => {setDate(e.target.value)}} placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="friday" className={classes.week} placeholder='Friday'></textarea> 
                </div>
                
                
            </div>
            <button className={classes.submitbtn}>Submit Report</button>
        </div>
        </div>
        </div>
    );
}
 
export default NewReport;