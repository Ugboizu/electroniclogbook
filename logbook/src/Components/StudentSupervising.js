import React, { useEffect, useState } from 'react';
import api from '../api/api';
import classes from '../CSS/StudentSupervising.module.css';
import SidebarLecturer from './SidebarLecturer';

function StudentSupervising() {

  const [ user, setUser ] = useState(JSON.parse(localStorage.user))
  const [ companyDetails, setCompanyDetails ] = useState({})
  const [loading, setLoading ] = useState(false);
  const [loadedStudent, setLoadedStudents ] = useState([]);

  const getLecturer = async () => {
        
    const data = { 
        lecturerID: user._id,
    }
    setLoading(true);
    try {
        const response = await api.post("/supervisor/profile", data)
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
    getStudentProfile()
  }, [user])
  const getStudentProfile = async (id) => {
        
    const data = { 
        studentID: id,
    }
    // console.log(data);
    setLoading(true);
    try {
      const studInfo = []
      for(let i = 0; i < user.students.length; i++){

        const response = await api.post("/student/profile", {studentID: user.students[i]})
        console.log(response.data);
        if (response.data?.success === false) {
            // setMessageSnackBar("Error occured. Check internet and try again.")
            // handleSnackBar()
            setLoading(false)
          } else {
            // setCompanyDetails(response.data.user)
            studInfo.push(response.data.user)
            // return response.data.user
            console.log(studInfo)
        }
      }
      setLoadedStudents(studInfo)
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
  const studentCards = loadedStudent.map((item, pos) => {
    // const student = await getStudentProfile(item)
    return (
      <div key={pos} className={classes.column}>
        <div className={classes.card}>
          <img src="../images/friend.png" alt="profile" />
          <h3>{`${item.lastName} ${item.firstName} ${item.middleName} `}</h3>
          <p>{`${item.matricNumber}`}</p>
          <button className={classes.btn}> <a href={`studentsupervising/workdetails/${item._id}`}>Work Details</a> </button>  <button className={classes.btn}> <a href={`studentsupervising/pastrecords/${item._id}`}>Report</a> </button>
        </div>
      </div>
    )
  })

 

  console.log(user);
  return (
    <div>
      <SidebarLecturer />
      <div className={classes.wrapper}>
        <div className={classes.row}>
          {studentCards}

        </div>
      </div>
    </div>
  );
}
    

export default StudentSupervising