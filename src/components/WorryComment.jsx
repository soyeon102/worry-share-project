import AnotherStyled from "styled-components";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { __getComments } from "../redux/modules/commentsSlice";
import { Rowing } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  //Material UI  적용
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  let { id } = useParams();
  const { isLoading, error, worries, comments } = useSelector(
    (state) => state.comments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={3}>
          <StCommentAdd>
            <StUserName>작성자</StUserName>

            <StCommentInput
              type="text"
              id="comment"
              placeholder="여기에 입력해주세요"
            />

            <StAddButton>+</StAddButton>
          </StCommentAdd>
          <div>
            <StCommentList>
              {comments?.map((comment) => {
                return (
                  <StComment key={comment.commentId}>
                    <div>{comment.commentUser}</div>
                    <div>{comment.comment}</div>
                  </StComment>
                );
              })}
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

const StComment = styled(Item)({
  border: "2px solid lightblue",
  height: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
