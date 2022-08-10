import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { __getWorries } from "../redux/modules/worrySlice";
import { useDispatch, useSelector } from "react-redux";
import { Satellite } from "@mui/icons-material";

const WorryDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, worries } = useSelector((state) => state.worries);
  const [targetId, setTargetId] = useState(null);
  const [editWorry, setEditWorry] = useState({
    title: "",
  });

  useEffect(() => {
    dispatch(__getWorries());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const onClickEditButtonHandler = (WorryId, edit) => {
    axios.patch(`http://localhost:3001/detail/${WorryId}`, edit);
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

        <button onClick={() => navigate("/list")}>이전으로</button>
      </StId>
      <StTitle>
        {worries?.map((worry) => {
          if (worry.id == id) {
            return worry.title;
          }
        })}
      </StTitle>
      <StContent>
        {worries?.map((worry) => {
          if (worry.id == id) {
            return worry.content;
          }
        })}
      </StContent>
      <StButtonDiv>
        <StButton>수정하기</StButton>
      </StButtonDiv>
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

const StButton = styled.button``;

const StButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 90%;
`;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
