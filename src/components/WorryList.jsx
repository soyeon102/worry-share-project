import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.

const WorryList = () => {
  const navigate = useNavigate();
  const [worries, setWorries] = useState(null);

  const fetchWorries = async () => {
    const { data } = await axios.get("http://localhost:3001/worries");
    setWorries(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchWorries();
  }, []);

  return (
    <div
      onClick={() => {
        navigate("/detail/1");
      }}
    >
      <StWorryList>
        <StListtitle>
          {worries?.map((worry) => (
            <span key={worry.id}>{worry.title}</span>
          ))}
        </StListtitle>

        <IconButton
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <DeleteIcon />
        </IconButton>

        <StListWriter>
          작성자:{" "}
          {worries?.map((worry) => (
            <span key={worry.id}>{worry.user}</span>
          ))}
        </StListWriter>
      </StWorryList>
    </div>
  );
};

export default WorryList;

const StWorryList = styled.div`
  height: 80px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  border: solid 1px;
  border-color: #eee;
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
