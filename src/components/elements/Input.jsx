import styled from "styled-components";

const Input = ({ children }) => {
  return <StInput>{children}</StInput>;

};

export default Input;

const StInput= styled.input`
width:97vw;
height:30px;
margin-top:15px;
display:flex;
border:solid 1px;
border-color:#eee;
border-radius:10px;
outline-color:#eee;
`