import Container from "@mui/material/Container";
import Header from "./Header";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <StContainer>
        <Header />
        {children}
      </StContainer>
    </Container>
  );
};

export default Layout;

const StContainer = styled.div`
  padding-bottom: 50px;
`;
