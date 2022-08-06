import Layout from '../layout/Layout';
import WorryDetail from '../WorryDetail';
import WorryComment from '../WorryComment';

const DetailPage = () => {
  return (
    <Layout>
      <WorryDetail />
      <WorryComment />
      <div>상세페이지 (삭제예정)</div>
    </Layout>
  );
};

export default DetailPage;
