import AnotherStyled from "styled-components";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={3}>
          <div>
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
          </div>
        </Stack>
      </Box>
    </>
  );
}

// export default WorryComment;

const StCommentAdd = AnotherStyled(Item)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 79%;
  margin: 30px auto;
  
`;

const StUserName = AnotherStyled.div`
  padding: 10px;
  width: 20%;
  text-align: center;
  font-weight: bold;
`;

const StCommentInput = AnotherStyled.input`
  width: 70%;
  height: 40px;
`;

const StAddButton = AnotherStyled.button`
  padding: 13px;
  width: 5%;
`;

const StCommentList = AnotherStyled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 80%;
margin: 0px auto;
`;

const StComment = AnotherStyled(Item)`
border: 2px solid lightblue;
  height: 40px;
  text-align: center;
`;
