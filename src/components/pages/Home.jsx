import Layout from "../layout/Layout";
import MainButton from "../MainButton";
import CommonButton from "../elements/CommonButton";

const Home = () => {
  const handleClick = () => {
    console.log("Click!");
  };

  return (
    <Layout>
      <MainButton writePage={true} text='고민 기록하기' />
      <MainButton listPage={true} text='다른사람 고민 둘러보기' />
      <h2>Common Button Test</h2>
      <CommonButton text='delete' onClick={handleClick} variant='outlined' />
      <CommonButton text='test' onClick={handleClick} variant='contained' />
      <CommonButton iconColor='primary' onClick={handleClick} />
    </Layout>
  );
};

export default Home;
