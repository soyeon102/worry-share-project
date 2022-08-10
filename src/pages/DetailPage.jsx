import Layout from "../components/layout/Layout";
import WorryDetail from "../components/WorryDetail";
import WorryComment from "../components/WorryComment";

const DetailPage = () => {
  return (
    <Layout>
      <WorryDetail />
      <WorryComment />
    </Layout>
  );
};

export default DetailPage;
