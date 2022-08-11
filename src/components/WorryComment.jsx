import AnotherStyled from "styled-components";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  __deleteComments,
  __getComments,
} from "../redux/modules/commentsSlice";
import { addComment } from "../redux/modules/commentsSlice";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [comments, setComments] = useState();
  const [comment, setComment] = useState({
    id: 0,
    commentUser: "",
    comment: "",
    commentDate: "",
    editCheck: false,
    postId: id,
  });
  const [editComment, setEditComment] = useState(false);

  useEffect(() => {
    fetchtodos();
  }, []);

  const fetchtodos = async () => {
    const { data } = await axios.get("http://localhost:3001/comments");
    setComments(data);
  };

  const onClickAddComment = async (comment) => {
    await axios.post("http://localhost:3001/comments", comment);
    fetchtodos();
  };

  const onClickEditButtonHandler = (id) => {
    setEditComment(!editComment);
  };

  const onClickDeleteHandler = (id) => {
    dispatch(__deleteComments(id));
    fetchtodos();
  };
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

            <StAddButton onClick={() => onClickAddComment(comment)}>
              +
            </StAddButton>
          </StCommentAdd>
          <div>
            {editComment ? (
              <div>
                <StCommentList>
                  {comments?.map((one) => {
                    if (one.postId == id) {
                      return (
                        <StComment key={one.id}>
                          <div>{one.comment}</div>
                          <StButton
                            onClick={() => onClickEditButtonHandler(one.id)}
                          >
                            수정완료
                          </StButton>
                        </StComment>
                      );
                    } else {
                      return null;
                    }
                  })}{" "}
                </StCommentList>
              </div>
            ) : (
              <StCommentList>
                {comments?.map((one) => {
                  if (one.postId == id) {
                    return (
                      <StComment key={one.id}>
                        <div>{one.commentUser}</div>
                        <div>{one.comment}</div>
                        <span>
                          <StButton
                            id={one.id}
                            onClick={() => onClickEditButtonHandler(one.id)}
                          >
                            댓글수정
                          </StButton>
                          <StButton
                            id={one.id}
                            onClick={() => onClickDeleteHandler(one.id)}
                          >
                            댓글삭제
                          </StButton>
                        </span>
                      </StComment>
                    );
                  } else {
                    return null;
                  }
                })}{" "}
              </StCommentList>
            )}
          </div>
        </Stack>
      </Box>
    </>
  );
}

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
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const StButton = AnotherStyled.button`
  padding: 5px;
`;
