import React, { useEffect } from "react";
import questions from "../src/Components/Records.json";
import Records from "../src/Components/Records";
import { Body } from "./Components/RecordStyle";
import SidebarLecturer from "./Components/SidebarLecturer";
import api from "./api/api";
import { useState } from "react";
import { useParams } from "react-router-dom";

function RP() {

  const params = useParams()

  const [ user, setUser ] = useState(JSON.parse(localStorage.user))
    const [ records, setRecords ] = useState([])
    const [loading, setLoading ] = useState(false);
    
    // const navigate = useNavigate()

    
    // console.log(user);

    const getPastRec = async () => {
        
      const data = { 
          studentID: params.id,
      }
      // console.log(data);
      setLoading(true);
      try {
          const response = await api.post("/student/reports", data)
          console.log(response.data);
          if (response.data?.success === false) {
              // setMessageSnackBar("Error occured. Check internet and try again.")
              // handleSnackBar()
              setLoading(false)
            } else {
              console.log(response.data.data);
              setRecords(response.data.data)
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
      getPastRec()
  }, []);

  return (
    <div >
      <SidebarLecturer /> 
    <Body className="prWrapper">
        <Records.Header>PAST RECORDS</Records.Header>
        {records?.map((item) => (
        <Records.Entity>{`Week ${item.week}`}
          <Records.Question>{item.date}</Records.Question>
          <Records.Text>{`Monday:\n ${item.monday}`}</Records.Text>
          <Records.Text>{`Tuesday:\n ${item.tuesday}`}</Records.Text>
          <Records.Text>{`Wednesday:\n ${item.wednesday}`}</Records.Text>
          <Records.Text>{`Thursday:\n ${item.thursday}`}</Records.Text>
          <Records.Text>{`Friday:\n ${item.friday}`}</Records.Text>
        </Records.Entity>
      ))}

    </Body>
    </div>
  )
}

export default RP