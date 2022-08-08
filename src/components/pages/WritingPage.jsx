import Layout from "../layout/Layout";
import CommonInput from "../elements/CommonInput";
import CommonButton from "../elements/CommonButton";
import CommonTextArea from "../elements/CommonTextArea";
import React, { useEffect, useState } from "react";
import axios from "axios";

const WritingPage = () => {
  const [worry, setWorry] = useState({
    user: "",
    title: "",
    content: "",
  });

  const [worries, setWorries] = useState(null);

  const fetchWorries = async () => {
    const { data } = await axios.get("http://localhost:3001/worries");
    setWorries(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  const onSubmitHandler = (worry) => {
    axios.post("http://localhost:3001/worries", worry);
  };

  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchWorries();
  }, []);

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
    <Layout>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler(worry);
          }}
        >
          <CommonInput
            text='이름을 입력해주세요.'
            id='Writer'
            labeltext='작성자'
            onChange={handleinputUser}
          />

          <CommonInput
            text='제목을 입력해주세요.'
            id='Title'
            labeltext='제목'
            onChange={handleinputTitle}
          />

          <CommonTextArea
            text='내용을 입력해주세요.'
            id='Content'
            labeltext='내용'
            onChange={handleinputContent}
          />

          <button
            text='추가하기'
            size='100%'
            variant='contained'
            margin='5% 0 0 0'
          />
        </form>
      </div>
    </Layout>
  );
};

export default WritingPage;
