import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import styled from 'styled-components';

const MainButton = () => {
  return (
    <StContainer>
      <StRouteButton>
        <HistoryEduIcon sx={{ fontSize: 60 }} />
      </StRouteButton>
    </StContainer>
  );
};

export default MainButton;

const StContainer = styled.div`
  border: 1px solid red;
  padding: 20px;
`;

const StRouteButton = styled.div``;
