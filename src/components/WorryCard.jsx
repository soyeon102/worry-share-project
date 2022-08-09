import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import axios from "axios"; // axios import 합니다.
import CommonButton from "./elements/CommonButton";
import { __getWorries, __deleteWorries } from "../redux/modules/worrySlice";

const WorryCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickDeleteButtonHandler = (e) => {
    // e.preventDefault();
    e.stopPropagation();
    if (window.confirm("삭제하시겠습니까?"))
      dispatch(__deleteWorries(props.worry.id));
  };

  return (
    <div onClick={() => navigate(`/detail/${props.worry.id}`)}>
      <StWorryList>
        <StListtitle>{props.worry.title}</StListtitle>

        <CommonButton onClick={onClickDeleteButtonHandler} />

        <StListWriter>{props.worry.user}</StListWriter>
      </StWorryList>
    </div>
  );
};

export default WorryCard;

const StWorryList = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  border: solid 1px;
  border-color: blue;
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
