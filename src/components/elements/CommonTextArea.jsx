import styled from "styled-components";
import "@fontsource/roboto/300.css";

const CommonTextArea = ({ labeltext, text, id, onChange }) => {
  return (
    <StBox>
      <Stlabel htmlfor={id}>{labeltext}</Stlabel>
      <StTextArea placeholder={text} id={id} onChange={onChange} />
    </StBox>
  );
};

export default CommonTextArea;

const StTextArea = styled.textarea`
  width: 100%;
  height: 250px;
  margin-top: 15px;
  padding: 20px;
  box-sizing: border-box;
  border: solid 1px #1976d2;
  border-color: #eee;
  border-radius: 10px;
  font-size: 16px;

  &:hover {
    border: solid 1px black;
  }

  &::placeholder {
    color: #b3acac;
  }
`;

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1%;
`;

const Stlabel = styled.label`
  font-size: 20px;
  font-weight: bold;
`;
