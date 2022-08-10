import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.
import WorryCard from "./WorryCard";

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
    <div>
      {worries?.map((worry) => (
        <WorryCard key={worry.id} worry={worry} />
      ))}
    </div>
  );
};

export default WorryList;
