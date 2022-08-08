import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const WorryDetail = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <StId>
        <span> id : {id} </span>
        <button onClick={() => navigate("/list")}>이전으로</button>
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
  box-shadow: 0px 0px 3px 1px lightcoral;
  border: none;
  width: 80%;
  height: 50px;
  margin: 20px auto;
  text-align: center;
`;

const StContent = styled.div`
  box-shadow: 0px 0px 3px 1px lightcoral;
  border: none;
  width: 80%;
  height: 250px;
  margin: 20px auto;
  text-align: center;
`;
