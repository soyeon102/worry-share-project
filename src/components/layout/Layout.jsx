import styled from "styled-components";

const Layout = ({ children }) => {
  return <StLayoutContainer>{children}</StLayoutContainer>;
};

export default Layout;

const StLayoutContainer=styled.div`
  margin: 0 auto;
  display:flex;
  align-items:center;
  
`
