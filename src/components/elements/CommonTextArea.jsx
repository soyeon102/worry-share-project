import styled from "styled-components";
import "@fontsource/roboto/300.css";

const CommonTextArea = ({ text, id }) => {
  return <StTextArea placeholder={text} id={id} />;
};

export default CommonTextArea;

const StTextArea = styled.textarea`
  width: 100%;
  height: 250px;
  margin-top: 15px;

  border: solid 1px;
  border-color: #eee;
  border-radius: 10px;
  outline-color: blue;

  font-size: 17px;
  font-family: roboto;
  &:hover {
    border: solid 2px;
    border-color: black;
  }

  ::placeholder {
    color: #b3acac;
  }
`;
