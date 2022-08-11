import Layout from "../components/layout/Layout";
import CommonInput from "../components/elements/CommonInput";
import CommonButton from "../components/elements/CommonButton";
import CommonTextArea from "../components/elements/CommonTextArea";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __addWorry } from "../redux/modules/worrySlice";

const WorryAddition = () => {
  const [worry, setWorry] = useState({
    user: "",
    title: "",
    content: "",
    isDone: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = (worry) => {
    if (worry.user === "" || worry.title === "" || worry.content === "") {
      alert("입력하지 않은 항목이 있는지 확인 후 다시 시도해주세요.");
    } else if (worry.user.length > 5) {
      alert("이름을 5자 이내로 입력해주세요.");
    } else if (worry.title.length > 50) {
      alert("제목을 50자 이내로 입력해주세요.");
    } else if (worry.content.length > 200) {
      alert("내용을 200자 이내로 입력해주세요.");
    } else if (
      worry.user.length <= 5 &&
      worry.title.length <= 50 &&
      worry.content.length <= 200 &&
      worry.user !== "" &&
      worry.title !== "" &&
      worry.content !== ""
    ) {
      dispatch(__addWorry(worry));
      navigate("/list");
    }
  };

  const handleinputUser = (ev) => {
    const { value } = ev.target;
    setWorry({
      ...worry,
      user: value,
    });
  };

  const handleinputTitle = (ev) => {
    const { value } = ev.target;
    setWorry({
      ...worry,
      title: value,
    });
  };

  const handleinputContent = (ev) => {
    const { value } = ev.target;
    setWorry({
      ...worry,
      content: value,
    });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(worry);
        }}
      >
        <CommonInput
          text="이름을 입력해주세요.(5자 이내)"
          id="Writer"
          labeltext="작성자"
          onChange={handleinputUser}
        />

        <CommonInput
          text="제목을 입력해주세요.(50자 이내)"
          id="Title"
          labeltext="제목"
          onChange={handleinputTitle}
        />

        <CommonTextArea
          text="내용을 입력해주세요.(200자 이내)"
          id="Content"
          labeltext="내용"
          onChange={handleinputContent}
        />

        <StButtonContainer>
          <CommonButton
            text="추가하기"
            size="140px"
            variant="outlined"
            margin="5% 0 0 0"
            onClick={() => {
              onSubmitHandler(worry);
              //navigate("/list");
            }}
          />
        </StButtonContainer>
      </form>
    </div>
  );
};

export default WorryAddition;

const StButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
