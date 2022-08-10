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
    window.location.reload();
  };

  return (
    <StWorryList onClick={() => navigate(`/detail/${props.worry.id}`)}>
      <StListtitle>
        제목:{props.worry.title}{" "}
        <CommonButton
          onClick={onClickDeleteButtonHandler}
          iconColor='primary'
        />
      </StListtitle>

      <StListWriter>작성자:{props.worry.user}</StListWriter>
    </StWorryList>
  );
};

export default WorryCard;

const StWorryList = styled.div`
  margin-top: 15px;
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
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;

const StListWriter = styled.div`
  font-size: 15px;
  padding-top: 40px;
  padding-bottom: 10px;
`;
