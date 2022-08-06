import { useParams } from "react-router-dom";
import styled from "styled-components";
const WorryDetail = () => {
  let { id } = useParams();

  return (
    <>
      <StDiv>
        <span> id : {id} </span>
        <button>이전으로</button>
      </StDiv>
    </>
  );
};

export default WorryDetail;

const StDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto;
`;
