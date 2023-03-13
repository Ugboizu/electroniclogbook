import React from "react";
import questions from "../src/Components/PastRecord.json";
import Pastrecord from "../src/Components/Pastrecord";
import { Body } from "./Components/Styles";
import Sidebar from "./Components/Sidebar";

function PR() {
  return (
    <div>
      <Sidebar /> 
    <Body>
        <Pastrecord.Header>PAST RECORDS</Pastrecord.Header>
        {questions.map((question) => (
        <Pastrecord.Entity>{question.week}
          <Pastrecord.Question>{question.date}</Pastrecord.Question>
          <Pastrecord.Text>{question.answer}</Pastrecord.Text>
        </Pastrecord.Entity>
      ))}

    </Body>
    </div>
  )
}

export default PR 