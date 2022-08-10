import Layout from "../components/layout/Layout";
import WorryList from "../components/WorryList";
import styled from "styled-components";

const ListPage = () => {
  return (
    <Layout>
      <StListtitle>고민 리스트</StListtitle>
      <WorryList />
    </Layout>
  );
};

export default ListPage;

const StListtitle = styled.div`
  font-size: 25px;
  margin-top: 5%;
`;
