import React, { useState } from "react";
import { Header, Entity, Inner, Question, Text, Body } from "./Styles";

const QuestionContext = React.createContext();
export default function Records({ children, ...restProps }) {
  return (
    <Body {...restProps}>
      <Inner>{children}</Inner>
    </Body>
  );
}
Records.Header = function RecordsHeader({ children, ...restProps }) {
  return <Header {...restProps}> {children}</Header>;
};
Records.Entity = function RecordsEntity({ children, ...restProps }) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <Entity {...restProps}> {children}</Entity>
    </QuestionContext.Provider>
  );
};
Records.Question = function RecordsHeader({ children, ...restProps }) {
  const { open, setOpen } = React.useContext(QuestionContext);

  return (
    <Question onClick={() => setOpen((open) => !open)} {...restProps}>
      {children}
      {open ? <h3>^</h3> : <h3>+</h3>}
    </Question>
  );
};
Records.Text = function RecordsText({ children, ...restProps }) {
  const { open } = React.useContext(QuestionContext);
  return open ? <Text {...restProps}>{children}</Text> : null;
};