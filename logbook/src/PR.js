import React, { useEffect, useState } from "react";
import questions from "../src/Components/PastRecord.json";
import Pastrecord from "../src/Components/Pastrecord";
import { Body } from "./Components/Styles";
import Sidebar from "./Components/Sidebar";
import api from "./api/api";

function PR() {

  const [ user, setUser ] = useState(JSON.parse(localStorage.user))
    const [ records, setRecords ] = useState([])
    const [loading, setLoading ] = useState(false);
    
    // const navigate = useNavigate()

    
    // console.log(user);

    const getPastRec = async () => {
        
      const data = { 
          studentID: user._id,
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
      <Sidebar /> 
    <Body className="prWrapper">
        <Pastrecord.Header>PAST RECORDS</Pastrecord.Header>
        {records?.map((item) => (
        <Pastrecord.Entity>{`Week ${item.week}`}
          <Pastrecord.Question>{item.date}</Pastrecord.Question>
          <Pastrecord.Text>{`Monday:\n ${item.monday}`}</Pastrecord.Text>
          <Pastrecord.Text>{`Tuesday:\n ${item.tuesday}`}</Pastrecord.Text>
          <Pastrecord.Text>{`Wednesday:\n ${item.wednesday}`}</Pastrecord.Text>
          <Pastrecord.Text>{`Thursday:\n ${item.thursday}`}</Pastrecord.Text>
          <Pastrecord.Text>{`Friday:\n ${item.friday}`}</Pastrecord.Text>
        </Pastrecord.Entity>
      ))}

    </Body>
    </div>
  )
}

export default PR 