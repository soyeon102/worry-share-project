import Layout from "../layout/Layout";
import CommonInput from "../elements/CommonInput";
import CommonButton from "../elements/CommonButton";
import CommonTextArea from "../elements/CommonTextArea";
import CommonLabel from "../elements/CommonLabel";

const WritingPage = () => {
  const onsubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div>
        <form onSubmit={onsubmitHandler}>
          <div>
            <CommonLabel labeltext='작성자' id='Writer' />
            <CommonInput text='이름을 입력해주세요.' id='Writer' />
          </div>

          <div>
            <CommonLabel labeltext='제목' id='Title' />
            <CommonInput text='제목을 입력해주세요.' id='Title' />
          </div>

          <div>
            <CommonLabel labeltext='내용' id='Content' />
            <CommonTextArea text='내용을 입력해주세요.' id='Content' />
          </div>

          <div>
            <CommonButton
              text='추가하기'
              size='100%'
              variant='contained'
              margin='5% 0 0 0'
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default WritingPage;
