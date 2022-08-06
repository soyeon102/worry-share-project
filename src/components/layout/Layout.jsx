import Container from "@mui/material/Container";
import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
