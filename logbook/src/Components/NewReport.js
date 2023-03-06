import classes from "../CSS/NewReport.module.css"

const NewReport = () => {
    return (
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
                </select> 
                <div className={classes.reportt}> 
                    <div className={classes.date}>
                        <input type="date" name="" id="date" placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="monday" className={classes.week} placeholder='Monday'></textarea>
                </div>
                
                    
                
                <div className={classes.reportt}>
                    <div className={classes.date}>
                        <input type="date" name="" id="date" placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="tuesday" className={classes.week} placeholder='Tuesday'></textarea> 
                </div>

                <div className={classes.reportt}>
                    <div className={classes.date}>
                        <input type="date" name="" id="date" placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="wednesday" className={classes.week} placeholder='Wednesday'></textarea> 
                </div>

                <div className={classes.reportt}>
                    <div className={classes.date}>
                        <input type="date" name="" id="date" placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="thursday" className={classes.week} placeholder='Thursday'></textarea> 
                </div>

                <div className={classes.reportt}>
                    <div className={classes.date}>
                        <input type="date" name="" id="date" placeholder='Date'></input> 
                    </div>
                    <textarea name="" id="friday" className={classes.week} placeholder='Friday'></textarea> 
                </div>
                
                
            </div>
            <button className={classes.submitbtn}>Submit Report</button>
        </div>
        </div>
    );
}
 
export default NewReport;