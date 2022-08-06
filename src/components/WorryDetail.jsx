import { useParams } from "react-router-dom";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Layout from "./layout/Layout";

const WorryDetail = () => {
  let { id } = useParams();

  return (
    <>
      <StId>
        <span> id : {id} </span>
        <button>이전으로</button>
      </StId>
      <StTitle>제목</StTitle>
      <StContent>내용</StContent>
    </>
  );
};

export default WorryDetail;

const StId = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto;
`;

const StTitle = styled.div`
  border: 2px solid black;
  width: 80%;
  height: 50px;
  margin: 20px auto;
  text-align: center;
`;

const StContent = styled.div`
  border: 2px solid black;
  width: 80%;
  height: 250px;
  margin: 20px auto;
  text-align: center;
`;
