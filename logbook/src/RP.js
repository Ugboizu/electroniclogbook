import React from "react";
import questions from "../src/Components/Records.json";
import Records from "../src/Components/Records";
import { Body } from "./Components/RecordStyle";
import SidebarLecturer from "./Components/SidebarLecturer";

function PR() {
  return (
    <div>
      <SidebarLecturer /> 
    <Body>
        <button> <a href="/studentsupervising">BACK</a> </button>
        <Records.Header>PAST RECORDS</Records.Header>
        {questions.map((question) => (
        <Records.Entity>{question.week}
          <Records.Question>{question.date}</Records.Question>
          <Records.Text>{question.answer}</Records.Text>
        </Records.Entity>
      ))}

    </Body>
    </div>
  )
}

export default PR 