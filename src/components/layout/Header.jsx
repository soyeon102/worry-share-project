import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <StHeaderTitle>고민상담소 🤔</StHeaderTitle>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #efefef;
`;

const StHeaderTitle = styled.h1`
  display: inline-block;
  cursor: pointer;
`;
