import Layout from '../layout/Layout';
import styled from "styled-components";
import WorryList from '../WorryList';

const ListPage = () => {
  return (
    <Layout>
      <StListtitle>
      고민 리스트  
      </StListtitle>
    </Layout>
  );
};

export default ListPage;

const StListtitle=styled.div`
  font-size:25px;
  margin-top:5%;
`