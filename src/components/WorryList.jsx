import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WorryList = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/detail/1");
      }}
    >
      <StWorryList>
        <StListtitle>
          Title
          <StListBtn>삭제</StListBtn>
        </StListtitle>

        <StListWriter>작성자:나</StListWriter>
      </StWorryList>
    </div>
  );
};

export default WorryList;

const StWorryList = styled.div`
  height: 80px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  border: solid 1px;
  border-color: #eee;
  border-radius: 10px;
  outline-color: #eee;
  padding: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;

const StListtitle = styled.div`
  display: flex;
  font-size: 20px;
  margin-top: 10px;
  justify-content: space-between;
`;

const StListWriter = styled.div`
  font-size: 10px;
  margin-top: 10px;
`;

const StListBtn = styled.button`
  width: 50px;
  height: 3vh;
  text-align: center;
  line-height: 25px;
`;
