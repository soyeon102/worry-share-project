import AnotherStyled from "styled-components";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CommonButton from "./elements/CommonButton";
import { useDispatch, useSelector } from "react-redux";
import {
  __addComment,
  __getComments,
  __deleteComment,
} from "../redux/modules/commentsSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const WorryComment = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments.comments);

  const [comment, setComment] = useState({
    id: 0,
    commentUser: "",
    comment: "",
    commentDate: "",
    editCheck: false,
    postId: id,
  }); // Material UI

  const onClickAddComment = (comment) => {
    dispatch(__addComment(comment));
  };

  const onClickDeleteComment = (commentId) => {
    dispatch(__deleteComment(commentId));
  };

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
              placeholder="댓글을 입력해주세요"
              onChange={(e) => {
                const { value } = e.target;
                setComment({
                  ...comment,
                  comment: value,
                });
              }}
            />

            <CommonButton
              text="+"
              variant="outlined"
              onClick={() => onClickAddComment(comment)}
            />
          </StCommentAdd>
          <div>
            <StCommentList>
              {comments?.map((one) => {
                if (one.postId == id) {
                  return (
                    <StComment key={one.id}>
                      <div>
                        <div>{one.commentUser}</div>
                        <div>{one.comment}</div>
                      </div>
                      <CommonButton
                        del
                        onClick={() => {
                          onClickDeleteComment(one.id);
                        }}
                      />
                    </StComment>
                  );
                } else {
                  return null;
                }
              })}
            </StCommentList>
          </div>
        </Stack>
      </Box>
    </>
  );
};

export default WorryComment;

const StCommentAdd = AnotherStyled(Item)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
  margin: 0px auto;
`;

const StComment = styled(Item)({
  border: "1px solid black",
  height: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
