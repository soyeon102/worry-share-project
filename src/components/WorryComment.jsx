import styled from "styled-components";

const WorryComment = () => {
  return (
    <>
      <StCommentAdd>
        <StUserName>작성자</StUserName>

        <StCommentInput
          type="text"
          id="comment"
          placeholder="여기에 입력해주세요"
        />

        <StAddButton>+</StAddButton>
      </StCommentAdd>
      <StCommentList>
        <StComment>댓글</StComment>
        <StComment>댓글</StComment>
        <StComment>댓글</StComment>
      </StCommentList>
    </>
  );
};

export default WorryComment;

const StCommentAdd = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 30px auto;
`;

const StUserName = styled.div`
  border: 2px solid black;
  padding: 10px;
  width: 200px;
  text-align: center;
`;

const StCommentInput = styled.input`
  width: 880px;
  height: 40px;
`;

const StAddButton = styled.button`
  padding: 13px;
  width: 60px;
`;

const StCommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  margin: auto;
`;

const StComment = styled.div`
  border: 2px solid black;
  height: 40px;
  text-align: center;
`;
