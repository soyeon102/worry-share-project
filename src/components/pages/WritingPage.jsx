import Layout from "../layout/Layout";
import CommonInput from "../elements/CommonInput";
import CommonButton from "../elements/CommonButton";
import CommonTextArea from "../elements/CommonTextArea";

const WritingPage = () => {
  const onsubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div>
        <form onSubmit={onsubmitHandler}>
          <CommonInput
            text='이름을 입력해주세요.'
            id='Writer'
            labeltext='작성자'
          />

          <CommonInput
            text='제목을 입력해주세요.'
            id='Title'
            labeltext='제목'
          />

          <CommonTextArea
            text='내용을 입력해주세요.'
            id='Content'
            labeltext='내용'
          />

          <CommonButton
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
