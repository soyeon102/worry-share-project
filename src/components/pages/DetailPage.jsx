import Layout from "../layout/Layout";
import WorryDetail from "../WorryDetail";
import WorryComment from "../WorryComment";

const DetailPage = () => {
  return (
    <Layout>
      <WorryDetail />
      <WorryComment />
    </Layout>
  );
};

export default DetailPage;
