import styled from "styled-components/macro";

export const Body = styled.div`
    background-color: #E5E5E5 !important;
    /* background-repeat: no-repeat; */
    background-size: 100%;
    height: 100vh;
    margin-left: 250px;
    /* text-align: center; */
    /* align-items: center; ; */
`;
export const Entity = styled.div`
  color: #020167 ;
  border: 1px solid #020167;
  max-width: 90%;
  width: 99%;
  margin-bottom: 10px;
  margin: auto;
  &:first-of-type {
    margin-top: 1.5em;
  }
`;
export const Inner = styled.div`
  padding: 75px 40px;
  max-width: 800px;
  margin: auto;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  background: whitesmoke ;
  padding: 0.75em 1.12em;
  align-items: center;
`;
export const Text = styled.p`
  max-height: 1190px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  background: #d2d3f8;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Header = styled.h1`
  line-height: 4;
  margin-top: 0 !important;
  margin-bottom: 2px;
  justify-content: center;
    text-align: center;
    align-items: center;
    color: #020167;
    font-family: 'Poppins';
    letter-spacing: 2px;
    font-size: 24px;

  @media (max-width: 600px) {
    font-size: 33px;
  }
`;