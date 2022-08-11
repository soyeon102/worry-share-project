import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { __updateWorries, __getWorries } from "../redux/modules/worrySlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const WorryDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, worries } = useSelector((state) => state.worries);
  const [targetId, setTargetId] = useState(null);
  const [editWorry, setEditWorry] = useState(false);
  const [post, setPost] = useState({ id: id });

  useEffect(() => {
    dispatch(__getWorries());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const onClickDeleteButtonHandler = (WorryId) => {
    axios.delete(`http://localhost:3001/worries/${WorryId}`);
    dispatch(__getWorries());
    navigate("/list");
  };

  const onClickEditButtonHandler = () => {
    setEditWorry(!editWorry);
  };

  const onClickEditCompleteHandler = () => {
    dispatch(__updateWorries(post));
    setEditWorry(!editWorry);
  };

  const editHandler = (e) => {
    const { value, name } = e.target;
    setPost({ ...post, id: id, [name]: value });
  };

  return (
    <>
      <StId>
        <StUser>
          <span> ID : {id} </span>
          <span>
            작성자 : {""}
            {worries?.map((worry) => {
              if (worry.id == id) return worry.user;
            })}
          </span>
          <span>
            작성시간 : {""}
            {worries?.map((worry) => {
              if (worry.id == id) return worry.date;
            })}
          </span>
        </StUser>

        <StButton onClick={() => navigate("/list")}>이전으로</StButton>
      </StId>

      <div>
        {worries?.map((worry) => {
          if (worry.id == id) {
            return (
              <div key={worry.id}>
                <div>
                  {editWorry ? (
                    <StEditContent key={worry.id}>
                      <StBox
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "108ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-multiline-static"
                          label="제목 수정"
                          multiline
                          rows={1}
                          defaultValue={worry.title}
                          onChange={editHandler}
                          name="title"
                        />{" "}
                        <TextField
                          id="outlined-multiline-static"
                          label="게시글 수정"
                          multiline
                          rows={10}
                          defaultValue={worry.content}
                          onChange={editHandler}
                          name="content"
                        />
                      </StBox>
                      <StButtonDiv>
                        <StButton
                          id={worry.id}
                          onClick={() => {
                            onClickEditCompleteHandler();
                          }}
                        >
                          수정완료
                        </StButton>
                      </StButtonDiv>
                    </StEditContent>
                  ) : (
                    <div>
                      <StTitle>{worry.title}</StTitle>
                      <StContent>{worry.content}</StContent>
                      <StButtonDiv>
                        <StButton
                          id={worry.id}
                          onClick={() => {
                            onClickEditButtonHandler();
                          }}
                        >
                          수정하기
                        </StButton>
                        <StButton
                          id={worry.id}
                          onClick={() => {
                            onClickDeleteButtonHandler(worry.id);
                          }}
                        >
                          삭제하기
                        </StButton>
                      </StButtonDiv>
                    </div>
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
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

const StUser = styled.div`
  display: flex;
  flex-direction: column;
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

const StButton = styled.button`
  padding: 10px;
`;

const StButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  width: 80%;
  margin: 0px auto;
`;

const StEditContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StTextArea = styled.textarea`
  width: 80%;
`;
