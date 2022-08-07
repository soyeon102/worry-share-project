import styled from "styled-components";
import "@fontsource/roboto/300.css";

const CommonLabel = ({ labeltext, id }) => {
  return <Stlabel for={id}>{labeltext}</Stlabel>;
};

export default CommonLabel;

const Stlabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  font-size: 20px;
  font-weight: bold;
  font-family: roboto;
`;
