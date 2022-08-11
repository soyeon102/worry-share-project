import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import WorryCard from "./WorryCard";
import { useDispatch, useSelector } from "react-redux";
import { __getWorries } from "../redux/modules/worrySlice";

const WorryList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const worries = useSelector((state) => state.worries.worries);

  useEffect(() => {
    dispatch(__getWorries());
  }, [dispatch]);

  return (
    <div>
      <StWorryList>
        {worries?.map((worry) => (
          <WorryCard key={worry.id} worry={worry} />
        ))}
      </StWorryList>
    </div>
  );
};

export default WorryList;

const StWorryList = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  outline-color: #eee;

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
