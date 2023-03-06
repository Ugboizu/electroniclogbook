import React, { useState } from "react";
import { Header, Entity, Inner, Question, Text, Body } from "./Styles";

const QuestionContext = React.createContext();
export default function Pastrecord({ children, ...restProps }) {
  return (
    <Body {...restProps}>
      <Inner>{children}</Inner>
    </Body>
  );
}
Pastrecord.Header = function PastrecordHeader({ children, ...restProps }) {
  return <Header {...restProps}> {children}</Header>;
};
Pastrecord.Entity = function PastrecordEntity({ children, ...restProps }) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <Entity {...restProps}> {children}</Entity>
    </QuestionContext.Provider>
  );
};
Pastrecord.Question = function PastrecordHeader({ children, ...restProps }) {
  const { open, setOpen } = React.useContext(QuestionContext);

  return (
    <Question onClick={() => setOpen((open) => !open)} {...restProps}>
      {children}
      {open ? <h3>^</h3> : <h3>+</h3>}
    </Question>
  );
};
Pastrecord.Text = function PastrecordText({ children, ...restProps }) {
  const { open } = React.useContext(QuestionContext);
  return open ? <Text {...restProps}>{children}</Text> : null;
};